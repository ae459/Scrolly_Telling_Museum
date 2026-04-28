# Sprint 0 — Comic Card System

## Specs Covered

- `docs/_specs/visual-qa/spec.md`

## Goal

Create a unified visual system for the main comic issue cards.

## Scope

### In

- standardize frame geometry across the main comic issue cards
- standardize title-strip placement and caption-box placement
- standardize typography and hierarchy within the cards
- confirm the cards read as one family when viewed side by side

### Out

- redesigning unrelated portrait or object cards
- changing exhibit page copy unless needed for visual fit
- creating entirely new comic cards without a separate need

## Tasks

1. Standardize frame geometry.
   - shared outer frame proportion
   - shared title-strip placement
   - shared caption-box placement
2. Standardize typography.
   - header sizes fit within title strips
   - issue lines and caption boxes use predictable hierarchy

## Files to touch

- `docs/media/marvel-comics-1.svg`
- `docs/media/fantastic-four-1.svg`
- `docs/media/amazing-fantasy-15.svg`

## Acceptance criteria

- comic cards read as one system
- no title overflow remains
- caption boxes feel consistent
- frame and typography rules are visually coherent across all touched cards

## Verification checklist

- [ ] confirm each SVG reports no errors
- [ ] visually compare the issue cards side by side
- [ ] verify title strips hold their text without overflow
- [ ] verify caption boxes share consistent placement and spacing

## Completion evidence

- URL: repository paths to the updated SVG cards
- Screenshots: side-by-side captures of the comic card family
- PR / commit: link or commit hash when the sprint is implemented
