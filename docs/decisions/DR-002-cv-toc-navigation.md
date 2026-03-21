# DR-002: CV Table of Contents Navigation

Status: accepted

Recorded: 2026-03-21

## Decision

- Derive the `/cv/` table of contents from the rendered CV headings already present in the repo content.
- Keep direct anchor navigation for CV sections and subsections.
- Use a sticky left-side TOC on desktop and a persistent lightweight TOC control on mobile.
- Highlight the reader's current section within the TOC with stable, non-twitchy active-state behavior.
- Keep the implementation Astro-native and dependency-light.

## Notes

- The CV content source format remains repo-managed markdown with embedded structure as needed.
- The TOC logic and styling live with the CV page components rather than introducing a separate content model.
