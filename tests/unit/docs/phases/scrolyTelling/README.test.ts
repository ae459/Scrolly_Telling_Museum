import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { hasSpecReference } from "../../_helpers/specReferences";

function readWorkspaceFile(relativePath: string): string {
  return readFileSync(resolve(process.cwd(), relativePath), "utf8");
}

describe("phase plan readme spec references", () => {
  it("positive: includes explicit spec coverage references", () => {
    const markdown = readWorkspaceFile("docs/phases/scrolyTelling/README.md");

    expect(hasSpecReference(markdown)).toBe(true);
    expect(markdown).toContain("## Specs Covered");
    expect(markdown).toContain("docs/_specs/scrollyTelling/spec-curatorial-voice.md");
    expect(markdown).toContain("docs/_specs/scrollyTelling/spec-layout-discipline.md");
    expect(markdown).toContain("docs/_specs/scrollyTelling/spec-spec-driven-process.md");
  });
});
