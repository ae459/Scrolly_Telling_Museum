import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validateCuratorialVoiceHtml } from "../_helpers/curatorialVoice";

describe("docs/reading-maps/publication-lineage.html curatorial voice objective", () => {
  it("positive: validates caption and label blocks in publication lineage page", () => {
    const html = readFileSync(resolve(process.cwd(), "docs/reading-maps/publication-lineage.html"), "utf8");
    const result = validateCuratorialVoiceHtml(html);

    expect(result.valid).toBe(true);
    expect(result.blocksChecked).toBeGreaterThan(0);
    expect(result.errors).toHaveLength(0);
  });
});
