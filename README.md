Github Pages Link: https://ae459.github.io/Scrolly_Telling_Museum/

# Marvel Bauhaus Museum

Marvel Bauhaus Museum is a static HTML/CSS digital exhibition that presents Marvel history as a curated museum experience rather than a conventional fan site. The project combines Bauhaus-inspired visual order with comic-book subject matter, organizing the collection around chronology, artifacts, creators, studios, and publication lineage.

## Project Overview

This repository uses `docs/` as the single source of truth for both:

1. the live GitHub Pages exhibition
2. the curatorial, specification, and QA documentation that supports it

That structure keeps the public-facing museum and the behind-the-scenes decision-making in one place, making the project easier to maintain, review, and present.

## Exhibition Experience

The visitor-facing museum includes:

- a public hero-entry page at `docs/index.html`
- an opening gallery at `docs/home.html`
- three chronology-based exhibition rooms in `docs/eras/`
- a publication lineage room in `docs/reading-maps/`
- a people and studios room in `docs/people-and-studios.html`
- a collection highlights room in `docs/guides/`
- custom object, comic, portrait, and downloaded cover assets in `docs/media/`

## Repository Structure

- `docs/index.html` public hero splash page and Pages entry point
- `docs/home.html` opening-gallery homepage reached from the entry page
- `docs/styles.css` shared visual system and layout rules
- `docs/eras/`, `docs/guides/`, `docs/reading-maps/`, `docs/media/` active exhibition files
- `docs/_specs/` specs and sprint documents for major workstreams
- `docs/foundation/` durable design philosophy and implementation guidance
- `docs/content/` collection-model and content-architecture notes

## Hero Entry Page

The museum now opens with a dedicated hero-entry page at `docs/index.html` before the visitor reaches the main opening gallery in `docs/home.html`.

This entry page is intended to function as an exhibition threshold rather than a generic landing page. It uses:

- a centered title card with museum branding and author credit
- an `Enter Exhibit` action that routes visitors into the main homepage
- a comic-cover collage built from locally stored media assets in `docs/media/`
- a starfield backdrop behind the collage to create a more dramatic sense of arrival

This arrangement keeps GitHub Pages pointed at `docs/index.html` while preserving the main curatorial homepage as a separate room-like surface.

## Orchestration Process

The museum follows a lightweight specs-driven orchestration workflow inspired by the AI museum reference project:

- spec -> sprint -> implementation -> QA

The purpose of this process is to keep the exhibition from drifting into random page edits or unstructured fan content. Each layer has a specific job:

- **Spec** defines the curatorial problem, design goals, risks, architecture, and verification strategy for a feature or workstream.
- **Sprint** breaks that larger goal into one bounded execution unit with a clear scope, target files, acceptance criteria, and verification checklist.
- **Implementation** applies the change in the active `docs/` site and supporting documentation.
- **QA** checks visual alignment, file validity, links, media references, and exhibition coherence before the change is treated as complete.

In practice, the orchestration model is used to preserve intent across sessions. The site may be static HTML/CSS, but the planning model is still durable, curator-driven, and evidence-based.

Key documents:

- `docs/_specs/README.md`
- `docs/foundation/orchestration-method.md`
- `docs/foundation/site-design-philosophy.md`
- `docs/foundation/site-implementation-codex.md`
- `docs/foundation/site-spec-patterns.md`
- `docs/content/collection-model.md`

## Style and Visual Direction

The project uses a **Bauhaus-inspired museum style** adapted to Marvel subject matter.

That means the site emphasizes:

- strong geometry and disciplined layout
- restrained color blocking and clear hierarchy
- typography that feels editorial rather than decorative
- exhibit-style rooms instead of generic web sections
- visible artifacts, portraits, and object surfaces instead of abstract filler graphics

The intended result is a site that feels both educational and energetic: serious enough to read like a museum, but vivid enough to fit Marvel's history and cultural scale.

## Brand Position

The museum's brand posture blends two main archetypal roles:

- **Hero** — drawn from Marvel's legacy of iconic characters, conflict, transformation, and cultural scale
- **Sage** — drawn from the museum voice, chronology-led interpretation, and emphasis on historical context and evidence

Together, these create a brand identity that is not just exciting, but authoritative and interpretive. The project is meant to feel like a place where Marvel is not only celebrated, but explained.

## Persuasion Methods Used

The exhibition relies on persuasive design methods in a restrained, educational way rather than a marketing-heavy way. The clearest methods used in the current project are:

- **Authority** — the museum framing, curatorial voice, labeled rooms, and evidence surfaces make the site feel trustworthy and intentional
- **Social proof** — key figures such as Stan Lee, Jack Kirby, and major crossover artifacts show how Marvel gained legitimacy, visibility, and shared cultural recognition
- **Scarcity** — first appearances, foundational issues, and landmark objects are treated as rare or pivotal artifacts, which increases their perceived significance

These methods support the museum thesis by helping visitors feel that the material matters historically, not just nostalgically.

## GitHub Pages Deployment

Publish the site with GitHub Pages using:

- Branch: `main`
- Folder: `/docs`

The file `docs/.nojekyll` is included so GitHub Pages will not ignore underscore-prefixed directories such as `docs/_specs/`.

With the current hero-page setup, GitHub Pages should continue to open `docs/index.html`, and that page should direct visitors into `docs/home.html` via the entry button.

## Review and QA

Because the museum is built as a static site, the main review checks are:

- HTML, CSS, and SVG validation
- internal link and media-path verification
- visual QA for alignment, spacing, caption fit, and room-to-room consistency
- exhibit coherence across chronology, artifacts, and supporting interpretation

## Purpose

This project is designed to function as both a museum exhibition and a maintainable system. The goal is not only to present Marvel material attractively, but to do so with a clear curatorial structure, consistent visual language, and documentation that supports future revision.
