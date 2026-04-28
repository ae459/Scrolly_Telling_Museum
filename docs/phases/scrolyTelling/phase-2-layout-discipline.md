# Phase 2: Layout Discipline and Visual Consistency

## Specs Covered

- `docs/_specs/scrollyTelling/spec-layout-discipline.md`

## QA Validation (2026-04-28)

- Referenced page paths were verified and currently exist:
  - `docs/home.html`
  - `docs/index.html`
  - `docs/eras/*.html`
  - `docs/people-and-studios.html`
  - `docs/reading-maps/*.html`
  - `docs/guides/*.html`
- Covered spec still matches this phase's claims:
  - Spec requires consistent grid/spacing/alignment, standardized title/caption/card rules, and no overflow or ad hoc styling.
- Required dependencies are available:
  - `/usr/bin/grep`
  - `/usr/local/bin/python3`
- Exit checks were reviewed for runnability against current markup.
- Current baseline:
  - Objective 1 check (previous class set) returned no matches and was updated to current heading classes.
  - Objective 2 check currently passes (no inline `style` attributes found).

## Objectives + Runnable Exit Checks

### Objective 1

Standardize title-strip and card heading structure across all exhibit pages.

Exit check:

- Run:
  - `for f in docs/home.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html; do grep -qE 'class="[^"]*(section-heading__title|chapter-hero__title|content-card__title)[^"]*"' "$f" || echo "Missing standardized heading class: $f"; done`
  - `grep -R -nE "class=\"(title-strip|room-title|card-title)\"" docs/home.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html`
- Pass condition:
  - First command prints no output (all pages have standardized heading classes).
  - Second command returns no matches (`grep` exits `1`), confirming legacy one-off heading classes are not present.

### Objective 2

Eliminate ad hoc inline styling on exhibit pages.

Exit check:

- Run:
  - `grep -R -n "style=\"" docs/home.html docs/index.html docs/eras/*.html docs/people-and-studios.html docs/reading-maps/*.html docs/guides/*.html`
- Pass condition:
  - No inline `style` attribute matches.

### Objective 3

Ensure card/caption alignment and overflow safety at desktop and mobile widths.

Exit check:

- Run:
  - `npm run build`
  - `python3 -m http.server 8000 --directory out`
  - Open key pages at 1440px and 390px.
  - Run browser checks for horizontal overflow and clipped title text.
- Pass condition:
  - No horizontal scrollbars caused by content containers.
  - No clipped headings or caption overflow in reviewed pages.
