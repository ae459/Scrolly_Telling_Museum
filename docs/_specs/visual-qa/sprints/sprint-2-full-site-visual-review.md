# Sprint 2 — Full-Site Visual Review

## Specs Covered

- `docs/_specs/visual-qa/spec.md`

## Goal

Review the full exhibition for continuity after component-level alignment work.

## Scope

### In

- review route-level consistency across homepage and companion pages
- review detail quality for overflow, misalignment, and caption balance
- confirm headings, captions, and cards still align with the visual system
- use the sprint doc as a continuity checklist baseline

### Out

- redesigning the exhibition beyond issues found during review
- adding new content that is not needed to resolve visual problems
- changing unrelated process docs except where review outcomes require it

## Tasks

1. Review route-level consistency.
   - cards and captions feel consistent across homepage and companion pages
   - room headings and supporting text still align with the visual system
2. Review detail quality.
   - no obvious overflow, misalignment, or caption imbalance remains
   - the exhibition still feels disciplined after iterative edits

## Files to touch

- relevant pages in `docs/`
- this sprint doc as the continuity checklist baseline

## Acceptance criteria

- visual continuity holds across the site
- no major alignment issues remain
- the site feels like one exhibition system
- touched pages preserve the established visual language

## Verification checklist

- [x] run HTML/CSS/SVG error review on touched files
- [x] inspect homepage, chronology pages, people room, and gallery in browser preview
- [x] verify cards, captions, and headings remain visually consistent across routes
- [x] verify no obvious overflow, misalignment, or caption imbalance remains

## Completion evidence

- URL: `docs/index.html`, `docs/home.html`, `docs/styles.css`, `docs/eras/golden-age.html`, `docs/eras/marvel-age.html`, `docs/eras/cinematic-age.html`, `docs/people-and-studios.html`, `docs/reading-maps/publication-lineage.html`, `docs/guides/bauhaus-marvel-language.html`
- Screenshots: compare the threshold page, opening gallery, chronology rooms, people room, lineage room, and object gallery after the first-pass system refinements
- PR / commit: pending repository commit
- Follow-on review evidence: later project-progress feedback resulted in a reduced header, removal of a redundant opening signpost block, clearer primary-versus-companion navigation hierarchy, and a cleaner closing CTA treatment
- Follow-on live evidence: real JPEG cover/portrait/object assets replaced placeholder media across the active pages while preserving route-level visual consistency
