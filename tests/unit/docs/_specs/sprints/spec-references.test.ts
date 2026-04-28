import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { findMissingSpecReferenceDocs } from "../../_helpers/specReferences";

function readWorkspaceFile(relativePath: string): string {
  return readFileSync(resolve(process.cwd(), relativePath), "utf8");
}

describe("sprint docs spec references", () => {
  it("positive: sprint docs touched in this objective include explicit spec references", () => {
    const changedSprintDocs = [
      "docs/_specs/curatorial-enrichment/sprints/sprint-0-collection-model-expansion.md",
      "docs/_specs/curatorial-enrichment/sprints/sprint-1-cast-and-institution-logic.md",
      "docs/_specs/curatorial-enrichment/sprints/sprint-2-room-enrichment-and-consistency.md",
      "docs/_specs/site-exhibition/sprints/sprint-0-curatorial-foundation.md",
      "docs/_specs/site-exhibition/sprints/sprint-1-room-system-and-object-surfaces.md",
      "docs/_specs/site-exhibition/sprints/sprint-2-qa-and-continuity.md",
      "docs/_specs/site-exhibition/sprints/sprint-4-navigation-and-entry-refinement.md",
      "docs/_specs/visual-qa/sprints/sprint-0-comic-card-system.md",
      "docs/_specs/visual-qa/sprints/sprint-1-portrait-and-object-card-system.md",
      "docs/_specs/visual-qa/sprints/sprint-2-full-site-visual-review.md",
    ];

    const docs = changedSprintDocs.map((path) => ({
      path,
      content: readWorkspaceFile(path),
    }));

    expect(findMissingSpecReferenceDocs(docs)).toEqual([]);
  });
});
