# Sprint 2 — QA And Continuity

## Specs Covered

- `docs/_specs/site-exhibition/spec.md`

## Goal

Define how this static museum should be checked and maintained across future sessions.

## Scope

### In

- define the normal verification baseline for HTML, CSS, SVG, links, and visual review
- define continuity rules for specs, sprint docs, and evidence-backed implementation
- distinguish lightweight changes from governed multi-surface changes
- keep the README and supporting docs aligned with the actual workflow

### Out

- major content redesigns unrelated to QA guidance
- introducing automated CI workflows unless separately scoped
- rewriting sprint or spec structure outside workflow clarification needs

## Tasks

1. Define the verification baseline.

- HTML/CSS/SVG error checks are part of normal work
- links and image references are checked after changes
- visual alignment review is treated as a real quality gate

2. Define continuity rules.

- no major feature starts without a spec
- no multi-surface feature starts without sprint docs
- implementation claims should be backed by repository evidence

3. Define acceptable lightweight changes.

- tiny copy changes may not need a new workstream
- structural, curatorial, or visual-system changes do need governed artifacts

## Files to touch

- this sprint doc as the QA baseline
- `README.md` if workflow wording changes

## Acceptance criteria

- the verification baseline is explicit
- continuity rules are explicit
- lightweight vs governed change paths are clearly distinguished
- the workflow description matches the actual docs-based project state
- future sessions have a clear maintenance model

## Verification checklist

- [ ] confirm the README and docs describe the current workflow accurately
- [ ] confirm the rules match the actual docs-based project state
- [ ] verify the QA baseline includes error checks, link checks, and visual review
- [ ] verify continuity rules define when specs and sprint docs are required

## Completion evidence

- URL: repository paths to the updated workflow guidance
- Screenshots: optional capture of README and sprint guidance in markdown preview
- PR / commit: link or commit hash when the sprint is implemented
- Follow-on QA evidence: later browser-review sessions validated media references, header hierarchy revisions, companion-room separation, and responsive opening-gallery staging inside the live `docs/` museum
- Follow-on repository evidence: `docs/styles.css`, `docs/home.html`, and the active `docs/media/` inventory were iteratively checked against live preview behavior during the progress review
