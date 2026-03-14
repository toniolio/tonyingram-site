# TonyIngram.com Weekend Rebuild Roadmap

## Metadata
- project: tonyingram.com rebuild
- owner: Tony Ingram
- target_stack: Astro + static output + Cloudflare Pages
- repo_visibility: public
- hosting_target: Cloudflare Pages
- registrar_transfer_this_weekend: false
- cms: none
- future_content_plan: local Markdown/MDX blog posts via Astro content collections
- v1_scope: recreate current public site only
- pages_in_scope:
  - home
  - cv
- pages_out_of_scope:
  - contact form
  - CMS
  - app-like behavior
  - auth
  - database
  - newsletter/email capture
- analytics:
  - Cloudflare Web Analytics
- primary_goal: reach preview ASAP, then cut over DNS by end of weekend if preview is good

## Key Decisions
- Use Astro for a content-focused, mostly static site.
- Keep v1 intentionally simple and faithful to the current site.
- Use GitHub + Cloudflare Pages for automatic deploys.
- Keep domain registrar at Hostinger for now.
- Move DNS/zone to Cloudflare when ready for apex custom domain cutover.
- Use apex domain as canonical production URL:
  - canonical_url: https://tonyingram.com
  - redirect_www_to_apex: true
- Add analytics now, but no form handling.
- Prepare content structure now so blog posts can be added later from local Markdown/MDX.

## Recommended Repo Structure
```text
/
├─ .gitignore
├─ .nvmrc
├─ AGENTS.md
├─ README.md
├─ package.json
├─ astro.config.mjs
├─ public/
│  ├─ favicon.svg
│  ├─ images/
│  └─ legacy/
│     ├─ screenshots/
│     ├─ source-html/
│     └─ notes/
├─ src/
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ cv.astro
│  ├─ content/
│  │  └─ blog/
│  ├─ styles/
│  └─ content.config.ts
└─ docs/
   └─ roadmap/
      └─ weekend-roadmap.md
```

## Legacy Capture Rules
- Capture the current live site before major implementation begins.
- Store these in `public/legacy/` or `legacy/` during build, then decide later whether to keep them in final repo.
- Preferred artifacts:
  - full-page screenshots of desktop home
  - full-page screenshots of desktop cv
  - mobile screenshots of both pages
  - copied page source HTML for reference
  - any downloaded images/logos from the existing site
  - brief notes on fonts, spacing, colors, and interactions
- Codex may be able to inspect public sites if internet access is enabled for its environment, but legacy captures should still be provided so implementation does not depend on live fetching.

## Definition of Done
- The current public site is recreated in Astro with matching content and close visual fidelity.
- Home page and CV page both exist and are navigable.
- The site is responsive on mobile and desktop.
- Metadata is present:
  - title
  - description
  - canonical
  - social image if available
- Assets are local to the repo.
- README includes:
  - local dev commands
  - build command
  - preview command
  - Cloudflare Pages deployment notes
  - DNS cutover notes
- Cloudflare Pages preview is live.
- Cloudflare Web Analytics is enabled.
- Production domain is connected.
- `www` redirects to apex.
- `*.pages.dev` is redirected or otherwise de-emphasized after cutover.

## Phase Plan

### Phase 0 — Local Setup
- [ ] Install/check Node.js version compatible with Astro.
- [ ] Create local project workspace.
- [ ] Create public GitHub repo.
- [ ] Connect local folder to Git.
- [ ] Push initial commit.
- [ ] Open folder in VS Code.

### Phase 1 — Capture the Existing Site
- [ ] Save screenshots of both current pages at desktop width.
- [ ] Save screenshots of both current pages at mobile width.
- [ ] Copy page HTML source into `legacy/source-html/`.
- [ ] Gather existing logos/images into `public/images/` or `legacy/`.
- [ ] Write short visual notes in `legacy/notes/`.

### Phase 2 — Scaffold Astro Base
- [ ] Initialize Astro project.
- [ ] Add MDX support for future posts.
- [ ] Add content collections scaffold for blog content.
- [ ] Add shared layout, nav, footer, and global styles.
- [ ] Add `.nvmrc`.
- [ ] Add `AGENTS.md` for Codex.
- [ ] Add base SEO/head component.

### Phase 3 — Recreate Current Site
- [ ] Implement home page.
- [ ] Implement CV page.
- [ ] Recreate images/logos.
- [ ] Match spacing/typography/colors as closely as practical.
- [ ] Ensure responsive behavior.
- [ ] Validate internal links.

### Phase 4 — Prepare for Future Blog
- [ ] Create `src/content/blog/`.
- [ ] Create `src/content.config.ts`.
- [ ] Add one draft/example blog entry if helpful.
- [ ] Do not publish a blog index in v1 unless desired.

### Phase 5 — Deployment and Preview
- [ ] Push working site to GitHub.
- [ ] Create Cloudflare Pages project from GitHub repo.
- [ ] Confirm build settings.
- [ ] Validate preview deployment.
- [ ] Fix build/runtime issues.

### Phase 6 — Production Cutover
- [ ] Add `tonyingram.com` as custom domain in Cloudflare Pages.
- [ ] Move DNS nameservers for apex domain to Cloudflare.
- [ ] Confirm production resolves correctly.
- [ ] Redirect `www.tonyingram.com` to `https://tonyingram.com`.
- [ ] Add/confirm canonical URL tags.
- [ ] Optionally redirect `*.pages.dev` to custom domain.

### Phase 7 — Final Polish
- [ ] Enable Cloudflare Web Analytics.
- [ ] Verify metadata and social previews.
- [ ] Verify mobile layout.
- [ ] Verify no broken links or missing assets.
- [ ] Verify Lighthouse/performance informally.
- [ ] Update README with final instructions.

## Codex Collaboration Rules
- Treat this repo as a small production website, not an experiment sandbox.
- Prioritize shipping the current site faithfully before improving or redesigning.
- Keep the stack minimal.
- Do not add React or other framework integrations unless clearly necessary.
- Do not add a backend.
- Keep all assets local.
- Run local checks before claiming work is done.
- Update README when commands or deploy steps change.
- Explain any unavoidable differences from the legacy site.

## Suggested Files for Codex Context

### `AGENTS.md`
Include rules such as:
- recreate current public site faithfully first
- keep stack minimal
- prefer Astro primitives over extra dependencies
- no backend or CMS
- future blog should be local Markdown/MDX
- keep SEO basics in place
- before declaring done, check links, assets, responsiveness, and build success

### `README.md`
Should include:
- project purpose
- local commands
- deployment target
- branch/deploy flow
- domain plan
- analytics plan

## Build/Deploy Defaults
- local_dev_command: `npm run dev`
- production_build_command: `npm run build`
- local_preview_command: `npm run preview`
- expected_output_dir: `dist`

## Canonical Domain Policy
- preferred_public_url: `https://tonyingram.com`
- redirect_policy:
  - `https://www.tonyingram.com/*` -> `https://tonyingram.com/:splat` (301)
- note: both `www` and apex are acceptable in general, but one must be chosen consistently and the site should redirect the other variant.

## Analytics Policy
- provider: Cloudflare Web Analytics
- privacy_goal: simple, privacy-first traffic/performance visibility
- no_email_capture: true
- no_third_party_marketing_scripts_in_v1: true

## Risks / Gut Checks
- Recreating exactly may take longer than expected if the Elementor site has subtle spacing/font quirks.
- DNS cutover can be delayed by nameserver changes or stale records.
- Cloudflare Pages preview should be reached long before production cutover.
- Do not let future-blog architecture slow v1 shipping.
- Avoid perfectionism on first deploy.

## Weekend Success Criteria
- Bronze:
  - repo created
  - Astro scaffold complete
  - preview deployment live
- Silver:
  - home and cv pages recreated with good fidelity
  - analytics enabled
  - README complete
- Gold:
  - production domain live on Cloudflare Pages
  - `www` redirect working
  - old Hostinger-served site no longer serving production traffic

## Immediate Next Actions
1. Create local repo/workspace.
2. Push initial GitHub commit.
3. Capture the existing live site into `legacy/`.
4. Add this roadmap to the repo.
5. Add `AGENTS.md`.
6. Launch Codex with the rebuild prompt.
