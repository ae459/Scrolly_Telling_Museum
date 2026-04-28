import { describe, expect, it } from "vitest";
import {
  extractCaptionAndLabelBlocks,
  validateBlockText,
  validateCuratorialVoiceHtml,
} from "./curatorialVoice";

describe("curatorialVoice helper", () => {
  it("negative: invalid html input fails loudly and safely", () => {
    expect(() => extractCaptionAndLabelBlocks(null as unknown as string)).toThrow(TypeError);
    expect(() => validateCuratorialVoiceHtml(0 as unknown as string)).toThrow(TypeError);
    expect(() => validateBlockText({} as unknown as string)).toThrow(TypeError);
  });

  it("negative: missing cue term is rejected", () => {
    const html = '<figcaption>No cue term in this caption.</figcaption>';
    const result = validateCuratorialVoiceHtml(html);

    expect(result.valid).toBe(false);
    expect(result.errors[0].reason).toContain("missing cue term");
  });

  it("edge: empty html returns a safe validation error", () => {
    const result = validateCuratorialVoiceHtml("");

    expect(result.valid).toBe(false);
    expect(result.blocksChecked).toBe(0);
    expect(result.errors[0].reason).toContain("no caption/label blocks");
  });

  it("edge: off-by-one sentence boundary accepts 2 and rejects 3", () => {
    expect(validateBlockText("Shows value. Reflects context.").valid).toBe(true);
    expect(validateBlockText("Shows value. Reflects context. Marks shift.").valid).toBe(false);
  });

  it("edge: zero-like and unicode content are accepted when cue terms exist", () => {
    expect(validateBlockText("0 shows baseline.").valid).toBe(true);
    expect(validateBlockText("東京 shows continuity across eras.").valid).toBe(true);
  });

  it("edge: timezone strings are handled without breaking validation", () => {
    const result = validateBlockText("UTC+05:30 shows release-window context.");
    expect(result.valid).toBe(true);
  });
});
