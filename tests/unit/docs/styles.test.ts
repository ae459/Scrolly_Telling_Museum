import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { findRuleDeclarations } from "./_helpers/cssRules";

describe("docs/styles.css layout discipline objective", () => {
  it("positive: shared title rule preserves the expected layout-safe declarations", () => {
    const css = readFileSync(resolve(process.cwd(), "docs/styles.css"), "utf8");
    const declarations = findRuleDeclarations(css, [
      ".display-title",
      ".site-brand__title",
      ".chapter-hero__title",
      ".home-opening__title",
      ".section-heading__title",
      ".site-footer__title",
      ".transition-block__title",
    ]);

    expect(declarations).not.toBeNull();
    expect(declarations?.["line-height"]).toBe("1.08");
    expect(declarations?.["text-wrap"]).toBe("balance");
    expect(declarations?.["overflow-wrap"]).toBe("anywhere");
    expect(declarations?.["max-width"]).toBe("12ch");
  });
});
