# Phase 1: Curatorial Voice Enforcement

## Specs Covered

- `docs/_specs/scrollyTelling/spec-curatorial-voice.md`

## QA Validation (2026-04-28)

- Referenced page paths were verified and currently exist:
  - `docs/home.html`
  - `docs/index.html`
  - `docs/eras/*.html`
  - `docs/people-and-studios.html`
  - `docs/reading-maps/*.html`
  - `docs/guides/*.html`
- Covered spec still matches this phase's claims:
  - Spec requires interpretive text, no process-explainer language, and concise interpretive captions/room intros/object labels.
- Required CLI dependency is available:
  - `/usr/bin/grep` (BSD grep, GNU compatible)
- Exit checks were adjusted to match the current markup so they are runnable and meaningful before implementation.

## Objectives + Runnable Exit Checks

### Objective 1

Ensure each public exhibit room has a concise interpretive room-intro paragraph explaining significance.

Exit check:

- Run:
  - `for f in docs/home.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html; do grep -qE 'class="[^"]*(chapter-hero__lede|home-opening__intro)[^"]*"' "$f" || echo "Missing intro block: $f"; done`
- Pass condition:
  - Command prints no output (no missing intro block).

### Objective 2

Remove process-explainer language from public-facing pages.

Exit check:

- Run:
  - `grep -R -nEi '\b(process|workflow|behind the scenes|sprint|spec)\b|how we built' docs/home.html docs/index.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html`
- Pass condition:
  - No matches in public-facing exhibit copy.

Current baseline (before implementation):

- This check currently returns matches in:
  - `docs/home.html`
  - `docs/guides/collection-highlights.html`

### Objective 3

Make captions and object labels interpretive and concise.

Exit check:

- Run:
  - `grep -R -nE '<figcaption>|class="[^"]*__label"' docs/home.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html`
- Pass condition:
  - All matched `figcaption` and `__label` blocks are <= 2 sentences and include at least one significance cue term such as "marks", "shows", "reflects", or "establishes" (manual verification on grep output).

## Step 5 Loopback — Findings and Deviations (2026-04-28)

### Findings

- Objective 1 exit check: pass.
- Objective 2 exit check: pass.
- Objective 3 exit check: pass.
- Requested quality gate command `npm run lint && npm run test && npm run build && npm run test:e2e` did not fully execute because `lint` and `build` scripts are missing.
- Independent command status at QA time:
  - `npm run test`: pass
  - `npm run test:e2e`: pass
  - `npm run lint`: fail (missing script)
  - `npm run build`: fail (missing script)

### Deviations

- This phase currently has content-level completion but not pipeline-level completion.
- The phase cannot be marked complete until `lint` and `build` are defined and passing.

### Re-Plan for Closure

1. Add minimal `lint` script for current stack (HTML/CSS/Markdown or project-level static checks appropriate to this repository).
2. Add minimal `build` script for static-site validation packaging (or explicit no-op build contract if build is intentionally not required, documented in phase evidence).
3. Re-run required gate exactly:
   - `npm run lint && npm run test && npm run build && npm run test:e2e`
4. Record exact command output in completion evidence and mark phase complete only if all four commands pass.

## Step 6 Implementation Update (2026-04-28)

- Implemented missing pipeline commands:
  - Added `lint` script (`node scripts/lint.mjs`) to validate docs HTML structure and local link/media path integrity.
  - Added `build` script (`node scripts/build.mjs`) to produce static output in `out/` by copying `docs/`.
  - Updated `test:e2e` to run against built output and execute after build.
- Updated Playwright web server to serve `out/` instead of `docs/`.

### Gate Re-Run Result

- `npm run lint && npm run test && npm run build && npm run test:e2e` -> pass.

### Objective Re-Check After Step 6

- Objective 1: pass
- Objective 2: pass
- Objective 3: pass

## Audit findings

- [scripts/lint.mjs:18] — no pattern needed — The validator is linear and small; introducing pattern objects now would add indirection without reducing complexity. — disposition: **wontfix** (trade-off accepted: keep implementation simple at current scale).
- [scripts/lint.mjs:52] — strategy (future fit) — Skip-rule policy is currently centralized and works, but could be made pluggable if rule sets expand by content type/environment. — disposition: **backlog**.
- [scripts/build.mjs:1-20] — no pattern needed — Build step has one target (`docs` -> `out`) and one responsibility; factory-style abstraction would be overengineering. — disposition: **wontfix** (trade-off accepted: direct script is clearer than pattern scaffolding).
- [tests/unit/docs/_helpers/curatorialVoice.ts:35] — strategy (future fit) — Validation rules may benefit from pluggable strategies if per-room/per-surface policies diverge later. — disposition: **backlog**.
- [tests/unit/docs/_helpers/curatorialVoice.ts:58] — no pattern needed — Current orchestrator function is deterministic and concise; observer/decorator abstractions do not improve clarity here. — disposition: **wontfix** (trade-off accepted: function composition is sufficient).
- [tests/browser/exhibition-journey.spec.ts:5] — no pattern needed — Single golden-path journey does not justify a flow factory abstraction at this time. — disposition: **wontfix** (trade-off accepted: explicit test steps preserve readability and intent).
- [playwright.config.ts:3] — no pattern needed — Declarative configuration does not need singleton/config-manager indirection. — disposition: **wontfix** (trade-off accepted: plain config object is the simplest correct choice).

- **Blocker count:** 0
- **Backlog count:** 2
- **Wontfix count:** 5
