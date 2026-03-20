# DR-001: Initial Personal Site Rebuild

Status: accepted

Recorded: 2026-03-20

## Decision

- Build the site with Astro.
- Deploy the site on Cloudflare Pages.
- Keep the site static-first, with no backend, CMS, auth, or database.
- Source the CV from markdown in the repo.
- Support dark mode as part of the base site experience.
- Treat legacy capture material as a rebuild reference only, not as an ongoing runtime dependency.

## Notes

- Content and structural changes should stay repo-driven.
- Future publishing work should continue to prefer local markdown or MDX.
