export const CUE_TERMS = ["marks", "shows", "reflects", "establishes"];

export type ValidationError = {
  index: number;
  reason: string;
  text: string;
};

export type ValidationResult = {
  valid: boolean;
  blocksChecked: number;
  errors: ValidationError[];
};

export function extractCaptionAndLabelBlocks(html: string): string[] {
  if (typeof html !== "string") {
    throw new TypeError("html must be a string");
  }

  const blocks: string[] = [];
  const figcaptionRegex = /<figcaption>([\s\S]*?)<\/figcaption>/gi;
  const labelRegex = /class="[^"]*__label"[^>]*>([\s\S]*?)<\//gi;

  let match: RegExpExecArray | null;
  while ((match = figcaptionRegex.exec(html)) !== null) {
    blocks.push(normalizeWhitespace(stripTags(match[1])));
  }
  while ((match = labelRegex.exec(html)) !== null) {
    blocks.push(normalizeWhitespace(stripTags(match[1])));
  }

  return blocks;
}

export function validateBlockText(text: string): { valid: boolean; reason?: string } {
  if (typeof text !== "string") {
    throw new TypeError("block text must be a string");
  }

  const trimmed = text.trim();
  if (!trimmed) {
    return { valid: false, reason: "empty block" };
  }

  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length > 2) {
    return { valid: false, reason: `too many sentences (${sentences.length})` };
  }

  const cueRegex = new RegExp(`\\b(${CUE_TERMS.join("|")})\\b`, "i");
  if (!cueRegex.test(trimmed)) {
    return { valid: false, reason: "missing cue term" };
  }

  return { valid: true };
}

export function validateCuratorialVoiceHtml(html: string): ValidationResult {
  const blocks = extractCaptionAndLabelBlocks(html);

  if (blocks.length === 0) {
    return {
      valid: false,
      blocksChecked: 0,
      errors: [{ index: -1, reason: "no caption/label blocks found", text: "" }],
    };
  }

  const errors: ValidationError[] = [];
  blocks.forEach((text, index) => {
    const result = validateBlockText(text);
    if (!result.valid) {
      errors.push({ index, reason: result.reason ?? "invalid block", text });
    }
  });

  return {
    valid: errors.length === 0,
    blocksChecked: blocks.length,
    errors,
  };
}

function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, "");
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
