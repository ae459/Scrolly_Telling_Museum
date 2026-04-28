# Sprint 0 — Curatorial Foundation

## Specs Covered

- `docs/_specs/site-exhibition/spec.md`

## Goal

Restore the durable foundation docs that explain the museum as both a curatorial object and an implementation system.

## Scope

### In

- document the museum metaphor and curatorial logic
- document the implementation rules for routes, CSS, media, and navigation
- restore the lightweight process explanation for spec -> sprint -> implementation -> QA
- ground all foundation docs in the current `docs/` site structure

### Out

- redesigning the visitor-facing exhibition pages
- adding new rooms or artifact cards beyond what is needed for documentation
- introducing new tooling or framework changes

## Tasks

1. Write the curator-facing philosophy document.

- explain the museum metaphor
- explain chronology vs companion rooms
- explain the role of objects and restraint

2. Write the implementation codex.

- map real routes, CSS systems, media, and navigation
- explain adaptation rules for future work

3. Restore the process explanation.

- explain spec -> sprint -> implementation -> QA
- keep the model lightweight and docs-folder appropriate

## Files to touch

- `docs/foundation/site-design-philosophy.md`
- `docs/foundation/site-implementation-codex.md`
- `docs/foundation/site-spec-patterns.md`
- `docs/foundation/orchestration-method.md`
- `docs/_specs/README.md`

## Acceptance criteria

- the foundation docs exist in the expected locations
- the documents explain the museum as a curatorial system, not just a static website
- implementation guidance matches the real structure of `docs/`, `docs/styles.css`, and `docs/media/`
- the process model is clear enough to support later feature workstreams
- all claims are grounded in the current repository state

## Verification checklist

- [ ] confirm the new docs exist in the expected locations
- [ ] ensure all claims are grounded in the current repository state
- [ ] verify the documents reference the active `docs/` publish surface
- [ ] confirm the process explanation is clear and lightweight

## Completion evidence

- URL: repository paths to the completed foundation docs
- Screenshots: optional capture of the docs tree or rendered markdown preview
- PR / commit: link or commit hash when the sprint is implemented
