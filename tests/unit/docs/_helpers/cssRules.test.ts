import { describe, expect, it } from "vitest";
import { findRuleDeclarations, parseDeclarations } from "./cssRules";

describe("cssRules helper", () => {
  it("negative: invalid inputs fail loudly and safely", () => {
    expect(() => findRuleDeclarations(null as unknown as string, [".title"]))
      .toThrow(TypeError);
    expect(() => findRuleDeclarations(".title { line-height: 1.08; }", []))
      .toThrow(TypeError);
    expect(() => findRuleDeclarations(".title { line-height: 1.08; }", [""]))
      .toThrow(TypeError);
    expect(() => parseDeclarations(12 as unknown as string)).toThrow(TypeError);
  });

  it("edge: empty css returns no matching rule", () => {
    expect(findRuleDeclarations("", [".title"])).
      toBeNull();
  });

  it("edge: preserves zero values and declarations without trailing semicolon", () => {
    const declarations = parseDeclarations("margin: 0; line-height: 1.08");

    expect(declarations.margin).toBe("0");
    expect(declarations["line-height"]).toBe("1.08");
  });

  it("edge: handles unicode selectors and timezone-like values", () => {
    const css = ".章題, .title { content: \"UTC+05:30\"; line-height: 1.08; }";
    const declarations = findRuleDeclarations(css, [".章題", ".title"]);

    expect(declarations).not.toBeNull();
    expect(declarations?.content).toBe('"UTC+05:30"');
    expect(declarations?.["line-height"]).toBe("1.08");
  });

  it("edge: off-by-one selector boundary requires every requested selector", () => {
    const css = ".display-title, .section-heading__title { line-height: 1.08; }";

    expect(findRuleDeclarations(css, [".display-title"]))
      .toEqual({ "line-height": "1.08" });
    expect(findRuleDeclarations(css, [".display-title", ".section-heading__title", ".home-opening__title"]))
      .toBeNull();
  });
});
