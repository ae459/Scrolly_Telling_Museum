export const SPEC_REFERENCE_REGEX =
  /(^##\s+Specs Covered\b|docs\/_specs\/.+\/spec(?:-[^\/\s]+)?\.md(?![A-Za-z0-9_])|\bthis spec file\b)/im;

export type ReferencedDoc = {
  path: string;
  content: string;
};

export function hasSpecReference(markdown: string): boolean {
  if (typeof markdown !== "string") {
    throw new TypeError("markdown must be a string");
  }

  return SPEC_REFERENCE_REGEX.test(markdown);
}

export function findMissingSpecReferenceDocs(docs: ReferencedDoc[]): string[] {
  if (!Array.isArray(docs)) {
    throw new TypeError("docs must be an array");
  }

  const missing: string[] = [];
  for (const doc of docs) {
    if (!doc || typeof doc !== "object") {
      throw new TypeError("each doc must be an object with path and content");
    }

    if (typeof doc.path !== "string" || doc.path.trim().length === 0) {
      throw new TypeError("doc path must be a non-empty string");
    }

    if (typeof doc.content !== "string") {
      throw new TypeError("doc content must be a string");
    }

    if (!hasSpecReference(doc.content)) {
      missing.push(doc.path);
    }
  }

  return missing;
}
