# AGENTS.md

## Purpose
Rebuild the current public `tonyingram.com` site in Astro, replacing the current WordPress/Elementor version.

## Source of truth
- The live public site is the primary source of truth for content, structure, and visual hierarchy.
- Also review `docs/roadmap/weekend-roadmap.md`.
- Use any `legacy/` or `public/legacy/` reference material if present.

## Scope for v1
- Recreate the current public site only
- Current pages:
  - Home
  - CV
- Deployable to Cloudflare Pages
- Preserve a clean path for future Markdown/MDX blog posts

## Out of scope for v1
- CMS
- Backend
- Database
- Auth
- Contact form
- Email capture
- App-like interactivity
- Unrequested redesigns

## Technical preferences
- Use Astro
- Keep the site primarily static
- Prefer Astro-native patterns and minimal dependencies
- Avoid React unless clearly necessary
- Keep code simple, readable, and easy to maintain

## Guardrails
- Reproduce the existing site faithfully before suggesting improvements
- Do not over-engineer
- Do not introduce backend features unless explicitly requested
- Do not add analytics unless explicitly requested for the current task
- Do not create unnecessary top-level directories

## Deployment intent
- Canonical production domain: `https://tonyingram.com`
- `www` should redirect to the apex domain
- Target hosting: Cloudflare Pages
- Fast preview deployment is the immediate goal

## Before declaring work complete
- Run the local build
- Check for missing assets and broken links
- Check responsive behavior
- Update README with accurate setup, dev, build, and deployment notes
- Clearly note any differences from the legacy site
