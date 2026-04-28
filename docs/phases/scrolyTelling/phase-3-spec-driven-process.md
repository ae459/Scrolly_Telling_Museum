# Phase 3: Spec-Driven Process Hardening

## Specs Covered

- `docs/_specs/scrollyTelling/spec-spec-driven-process.md`

## QA Validation (2026-04-28)

- Referenced paths were verified and currently exist:
  - `docs/_specs/*/`
  - `docs/phases/scrolyTelling/*.md`
  - `docs/_specs/*/sprints/*.md`
- Covered spec still matches this phase's claims:
  - Spec requires a lightweight spec-first workflow, small focused specs, and sprint/phase docs that reference the specs they implement.
- Required dependencies are available:
  - `/usr/bin/find`
  - `/usr/bin/grep`
- Exit checks were reviewed for runnability against the current repository structure.
- Current baseline:
  - Objective 1 current repo state passes with a refined per-workstream check.
  - Objective 2 command is runnable, but its original pass condition should be strengthened to verify each section appears exactly once per spec file.
  - Objective 3 current repo state does **not** yet satisfy the stated requirement because existing sprint docs do not currently include an explicit `Specs Covered` block or equivalent spec-path reference.

## Objectives + Runnable Exit Checks

### Objective 1

Require a focused spec file before any major curatorial or visual-system change.

Exit check:

- Run:
  - `for d in docs/_specs/*/; do find "$d" -maxdepth 1 -type f \( -name 'spec.md' -o -name 'spec-*.md' \) | grep -q . || echo "Missing spec file in ${d%/}"; done`
- Pass condition:
  - Command prints no output (every active top-level workstream folder has at least one spec file).

### Objective 2

Keep specs small and single-concern.

Exit check:

- Run:
  - `for f in docs/_specs/scrollyTelling/*.md; do [ "$(grep -c '^# Purpose$' "$f")" -eq 1 ] && [ "$(grep -c '^## What Done Looks Like$' "$f")" -eq 1 ] && [ "$(grep -c '^## Constraints / Non-Goals$' "$f")" -eq 1 ] || echo "Section count mismatch: $f"; done`
- Pass condition:
  - Command prints no output (each spec contains all three required sections exactly once).

### Objective 3

Require sprint/phase docs to reference the specs they implement.

Exit check:

- Run:
  - `for f in docs/phases/scrolyTelling/*.md docs/_specs/*/sprints/*.md; do grep -qE 'Specs Covered|docs/_specs/.+/spec(-[^/]*)?\.md|this spec file' "$f" || echo "Missing spec reference: $f"; done`
- Pass condition:
  - Command prints no output (every phase doc and sprint doc includes an explicit spec reference block, spec path, or equivalent spec reference text).

Current baseline (before implementation):

- This check currently fails for existing sprint docs because they do not yet include explicit spec references in the standardized form required by this phase.
