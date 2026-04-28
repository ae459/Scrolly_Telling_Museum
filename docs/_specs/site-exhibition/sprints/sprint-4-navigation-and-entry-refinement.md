# Sprint 4: Navigation and Entry Refinement

## Specs Covered

- `docs/_specs/site-exhibition/spec.md`

**Status:** Complete (April 23, 2026)

---

## Goal

Strengthen visitor onboarding and navigation by clarifying audience intent, improving entry page messaging, adding a persistent hero link across all pages, and refining the opening gallery copy.

---

## Scope

### In

- Audience signal on entry page (index.html)
- Visitor benefit promise in entry page lede
- Consolidated entry button (single CTA instead of redundant two-button pattern)
- Visitor-centric bridge paragraph in home.html opening section
- Hero navigation button added to all primary and companion pages
- Visual styling for hero button to make it distinct and actionable
- CSS support for secondary copy styling

### Out

- Era room page content updates
- Companion room content expansion
- Accessibility audit (planned for future sprint)
- Analytics or tracking implementation

---

## Tasks

1. **Entry Page (index.html) Enhancement**
   - Add explicit audience signal in eyebrow: "For people curious about Marvel as history"
   - Strengthen lede to include visitor benefit: "Understand how Marvel became a connected universe and cultural force..."
   - Add explanatory context paragraph about route and flexibility
   - Consolidate entry buttons to single "Begin the exhibition" CTA
   - Add .copy-secondary CSS class for secondary explanatory text

2. **Home Page (home.html) Opening Section**
   - Insert visitor-centric bridge paragraph after lede
   - Address both "new to Marvel" and "history-curious" visitor personas
   - Explain route structure and companion room role in plain language

3. **Navigation Enhancement Across All Pages**
   - Add hero button as first tab in site-nav--rooms navigation
   - Position before "Threshold Opening Hall" tab
   - Apply to all pages: home.html, golden-age.html, marvel-age.html, cinematic-age.html, people-and-studios.html, publication-lineage.html, collection-highlights.html, bauhaus-marvel-language.html
   - Ensure correct relative paths for nested pages (../index.html vs index.html)

4. **Hero Button Styling (styles.css)**
   - Create .room-tab--hero class with yellow background
   - Apply dark ink text for contrast
   - Set font-weight to 600 for visual prominence
   - Ensure eyebrow text color is dark ink (not red)

5. **CSS Variable Management**
   - Add .copy-secondary class with font-size: 0.95rem and margin-top: 0.5rem
   - Integrate with existing copy system (uses --muted color, line-height: 1.65)

---

## Files to Touch

### HTML Pages

- `docs/index.html` — entry page rewrites
- `docs/home.html` — opening section addition + hero button
- `docs/eras/golden-age.html` — hero button
- `docs/eras/marvel-age.html` — hero button
- `docs/eras/cinematic-age.html` — hero button
- `docs/people-and-studios.html` — hero button
- `docs/reading-maps/publication-lineage.html` — hero button
- `docs/guides/collection-highlights.html` — hero button
- `docs/guides/bauhaus-marvel-language.html` — hero button

### CSS

- `docs/styles.css` — .room-tab--hero class + .copy-secondary class

---

## Acceptance Criteria

1. ✅ Entry page clearly names the visitor type and what they will understand
2. ✅ Entry page has single, clear CTA
3. ✅ Home page opening section addresses visitor intent directly
4. ✅ Home page copy bridges curatorial method to visitor benefit
5. ✅ All pages (8 total) have hero button in navigation
6. ✅ Hero button is visually distinct (yellow background, dark text)
7. ✅ Hero button links correctly from all pages back to index.html
8. ✅ CSS system supports both .copy-secondary and .room-tab--hero without breaking existing styles
9. ✅ All relative paths are correct (no broken links)
10. ✅ Visual consistency maintained across all pages

---

## Verification Checklist

### Entry Point (index.html)

- [ ] Eyebrow reads: "For people curious about Marvel as history"
- [ ] Lede includes visitor benefit promise about understanding Marvel as connected cultural system
- [ ] Context paragraph explains route and companion room role
- [ ] Single button labeled "Begin the exhibition" links to home.html
- [ ] No redundant buttons
- [ ] .copy-secondary styling renders correctly

### Home Page (home.html)

- [ ] Bridge paragraph appears after lede, before curatorial note
- [ ] Copy addresses "new to Marvel" and "history-curious" personas
- [ ] Copy mentions route structure and companion galleries
- [ ] Hero button present and links to index.html
- [ ] Visual hierarchy is clear

### All Pages Navigation

- [ ] Hero button appears on all 8 pages (home, 3 eras, 4 companions)
- [ ] Hero button positioned first in room-tab navigation
- [ ] Label reads: "Entry" (eyebrow) / "Hero" (title)
- [ ] Links are correct for each page type:
  - From docs/ pages: `index.html`
  - From docs/eras/ pages: `../index.html`
  - From docs/reading-maps/ pages: `../index.html`
  - From docs/guides/ pages: `../index.html`

### Visual Styling

- [ ] Hero button has yellow background (#f7c948)
- [ ] Hero button has dark ink text (#111111)
- [ ] Hero button font-weight is 600
- [ ] Hero button eyebrow is dark ink (not red)
- [ ] Hero button maintains grid layout and padding consistent with other room-tabs
- [ ] Hero button hover state works correctly

### Link Integrity

- [ ] All hero button links work (no 404s)
- [ ] All internal navigation links verified
- [ ] Relative paths correct for nested pages

### Copy Consistency

- [ ] Terminology consistent (chronology, room, companion, proof, object)
- [ ] Tone remains curatorial and interpretive
- [ ] No marketing language in visitor-facing copy
- [ ] Spelling and punctuation reviewed

---

## Completion Evidence

### Code Changes

- Entry page messaging strengthened with audience signal and benefit promise
- Home opening section now addresses visitor directly
- Hero navigation button added to 8 pages with correct links
- .room-tab--hero CSS class created with yellow background styling
- .copy-secondary CSS class created for secondary explanatory text

### Files Modified

- docs/index.html (1 change: entry section rewrite)
- docs/home.html (2 changes: hero button + opening paragraph)
- docs/eras/golden-age.html (1 change: hero button)
- docs/eras/marvel-age.html (1 change: hero button)
- docs/eras/cinematic-age.html (1 change: hero button)
- docs/people-and-studios.html (1 change: hero button)
- docs/reading-maps/publication-lineage.html (1 change: hero button)
- docs/guides/collection-highlights.html (1 change: hero button)
- docs/guides/bauhaus-marvel-language.html (1 change: hero button)
- docs/styles.css (2 additions: .room-tab--hero + .copy-secondary)

### Git Status

- All changes committed and pushed to main branch
- Deployment live on GitHub Pages

---

## QA Notes

### What Worked Well

- Entry page messaging now clearly targets audience and benefit
- Home opening paragraph smoothly bridges method to visitor intent
- Hero button is visually prominent without overwhelming navigation hierarchy
- All relative paths resolved correctly across nested directories
- CSS styling integrates cleanly with existing system

### Testing Performed

- All links verified (no broken navigation)
- All media paths verified (all images load)
- Visual consistency confirmed across all pages
- Copy terminology and tone reviewed
- Responsive breakpoints tested (3 media queries active)

### No Issues Detected

---

## Next Steps

1. **Gather Visitor Feedback** (Optional next sprint)
   - Test whether entry page audience signal is clear
   - Monitor visitor click patterns: hero → home → rooms vs. direct jumps
   - Validate whether home opening copy helps visitors understand the route

2. **Curatorial Enrichment** (Planned sprint)
   - Expand companion room content while maintaining chronology spine
   - Strengthen creator and publication lineage depth

3. **Visual QA** (Planned sprint)
   - Full card system consistency review
   - Typography and spacing audit across all pages
   - Mobile and tablet responsive testing

4. **Accessibility** (Planned sprint)
   - WCAG 2.1 AA compliance audit
   - Alt-text review for all images
   - Keyboard navigation testing
