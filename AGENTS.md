# AGENTS.md

## Repo rules
- Read `docs/roadmap/tonyingram-site-weekend-roadmap.md` before starting major work.
- Keep instructions here short and durable; treat the roadmap as the project spec.

## Working style
- Make small, granular commits.
- Commit often when a logical unit of work is complete.
- Keep commit messages clear and specific.
- Avoid mixing unrelated changes in the same commit.

## Technical guardrails
- Keep the stack minimal.
- Prefer Astro-native patterns and minimal dependencies.
- Do not add backend, CMS, auth, database, or contact form unless explicitly asked.
- Avoid React unless clearly necessary.

## Implementation guardrails
- Recreate the current public site faithfully before suggesting improvements.
- Keep assets local to the repo.
- Do not create unnecessary top-level directories.
- Update README when commands or deploy steps change.

## Before claiming work is done
- Run the local build.
- Check for broken links and missing assets.
- Note any assumptions or unavoidable differences.