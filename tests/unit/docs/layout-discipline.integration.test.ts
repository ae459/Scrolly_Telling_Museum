import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";
import { findRuleDeclarations } from "./_helpers/cssRules";

const SHARED_TITLE_SELECTORS = [
  ".display-title",
  ".site-brand__title",
  ".chapter-hero__title",
  ".home-opening__title",
  ".section-heading__title",
  ".site-footer__title",
  ".transition-block__title",
];

function readWorkspaceFile(relativePath: string): string {
  return readFileSync(resolve(process.cwd(), relativePath), "utf8");
}

function extractUsedSharedTitleClasses(html: string): string[] {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  const used = new Set<string>();

  for (const selector of SHARED_TITLE_SELECTORS) {
    if (document.querySelector(selector)) {
      used.add(selector);
    }
  }

  return [...used];
}

describe("layout discipline seam: page markup -> shared title CSS", () => {
  it("happy path: actual exhibit pages use shared title classes covered by the shared CSS rule", () => {
    const css = readWorkspaceFile("docs/styles.css");
    const declarations = findRuleDeclarations(css, SHARED_TITLE_SELECTORS);

    expect(declarations).not.toBeNull();
    expect(declarations?.["line-height"]).toBe("1.08");
    expect(declarations?.["text-wrap"]).toBe("balance");
    expect(declarations?.["overflow-wrap"]).toBe("anywhere");

    const pagePaths = [
      "docs/home.html",
      "docs/eras/golden-age.html",
      "docs/eras/marvel-age.html",
      "docs/eras/cinematic-age.html",
      "docs/people-and-studios.html",
      "docs/reading-maps/publication-lineage.html",
      "docs/guides/collection-highlights.html",
      "docs/guides/bauhaus-marvel-language.html",
    ];

    for (const pagePath of pagePaths) {
      const html = readWorkspaceFile(pagePath);
      const usedClasses = extractUsedSharedTitleClasses(html);

      expect(usedClasses.length, `${pagePath} should use at least one shared title class`).toBeGreaterThan(0);
      for (const usedClass of usedClasses) {
        expect(SHARED_TITLE_SELECTORS).toContain(usedClass);
      }
    }
  });

  it("failure mode: an unsupported title class is not covered by the shared CSS seam", () => {
    const css = readWorkspaceFile("docs/styles.css");
    const html = '<section><h2 class="museum-title-rogue">Rogue Title</h2></section>';
    const usedClasses = extractUsedSharedTitleClasses(html);
    const declarations = findRuleDeclarations(css, [
      ".display-title",
      ".museum-title-rogue",
    ]);

    expect(usedClasses).toHaveLength(0);
    expect(declarations).toBeNull();
  });
});
