import { describe, expect, it } from "vitest";
import {
  findMissingSpecReferenceDocs,
  hasSpecReference,
} from "./specReferences";

describe("specReferences helper", () => {
  it("positive: typical inputs detect explicit spec references", () => {
    const markdown = [
      "# Sprint 0",
      "",
      "## Specs Covered",
      "",
      "- `docs/_specs/site-exhibition/spec.md`",
    ].join("\n");

    expect(hasSpecReference(markdown)).toBe(true);
    expect(
      findMissingSpecReferenceDocs([
        { path: "docs/_specs/site-exhibition/sprints/sprint-0.md", content: markdown },
      ])
    ).toEqual([]);
  });

  it("negative: invalid inputs fail loudly and safely", () => {
    expect(() => hasSpecReference(null as unknown as string)).toThrow(TypeError);
    expect(() => findMissingSpecReferenceDocs(null as unknown as never[])).toThrow(TypeError);
    expect(() =>
      findMissingSpecReferenceDocs([
        { path: "", content: "## Specs Covered" },
      ])
    ).toThrow(TypeError);
    expect(() =>
      findMissingSpecReferenceDocs([
        { path: "docs/phases/scrolyTelling/README.md", content: 0 as unknown as string },
      ])
    ).toThrow(TypeError);
  });

  it("edge: empty and zero-like content are treated as missing references", () => {
    expect(hasSpecReference("")).toBe(false);
    expect(hasSpecReference("0")).toBe(false);

    expect(
      findMissingSpecReferenceDocs([
        { path: "docs/a.md", content: "" },
        { path: "docs/b.md", content: "0" },
      ])
    ).toEqual(["docs/a.md", "docs/b.md"]);
  });

  it("edge: unicode and timezone text do not block valid reference detection", () => {
    const markdown = [
      "# Sprint — 章",
      "",
      "Status: Complete (2026-04-28 UTC+05:30)",
      "",
      "This spec file governs additions to this room.",
    ].join("\n");

    expect(hasSpecReference(markdown)).toBe(true);
  });

  it("edge: off-by-one boundaries reject almost-valid spec paths", () => {
    const almostValid = [
      "docs/_specs/site-exhibition/spec.mdx",
      "docs/_specs/site-exhibition/spec-.md",
      "docs/_specs/site-exhibition/spec",
      "docs/_specs/site-exhibition/specs.md",
    ];

    for (const value of almostValid) {
      expect(hasSpecReference(value), `should reject: ${value}`).toBe(false);
    }

    expect(hasSpecReference("docs/_specs/site-exhibition/spec.md")).toBe(true);
    expect(hasSpecReference("docs/_specs/scrollyTelling/spec-spec-driven-process.md")).toBe(true);
  });
});
