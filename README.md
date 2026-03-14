# tonyingram-site

Astro rebuild of the current public `tonyingram.com` site, replacing the WordPress/Elementor implementation with a mostly static site that is ready for Cloudflare Pages.

## Scope

This v1 rebuild covers:

- home page
- CV page
- local legacy references captured in `public/legacy/`
- future blog scaffolding via Astro content collections and MDX

It intentionally does not add a backend, CMS, auth, forms, or email capture.

## Requirements

- Node.js `22.22.1`
- npm

The repo includes both `.nvmrc` and a Volta pin in `package.json`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run Astro's type/content checks:

```bash
npm run check
```

Create a production build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Project Structure

```text
/
├─ public/
│  ├─ _redirects
│  ├─ favicon.svg
│  ├─ images/
│  └─ legacy/
├─ src/
│  ├─ components/
│  ├─ content/
│  │  └─ blog/
│  ├─ layouts/
│  ├─ pages/
│  ├─ styles/
│  └─ content.config.ts
├─ astro.config.mjs
├─ package.json
└─ README.md
```

## Cloudflare Pages Deployment

Create a Cloudflare Pages project connected to the GitHub repo with these settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.22.1`

Cloudflare Pages will pick up `public/_redirects`, including the legacy `/curriculum-vitae/` to `/cv/` redirect and the `www` to apex redirect rule.

## Domain Cutover Notes

Canonical production URL is:

- `https://tonyingram.com`

Recommended cutover steps:

1. Create and verify the Cloudflare Pages preview deployment.
2. Add `tonyingram.com` as a custom domain in Cloudflare Pages.
3. Add `www.tonyingram.com` and confirm the redirect behaviour.
4. Move the domain's nameservers from Hostinger to Cloudflare when ready.
5. Confirm apex resolution, `www` redirect, and SSL issuance after DNS settles.

## Analytics

Target analytics provider is Cloudflare Web Analytics. This still needs to be enabled in the Cloudflare dashboard because the site-specific token/script is not stored in this repo.

## Legacy References

The current site capture used for this rebuild lives in:

- `public/legacy/source-html/`
- `public/legacy/screenshots/`
- `public/legacy/notes/`

## Notes

- The live WordPress site uses Elementor-generated markup; this rebuild keeps the content and page structure faithful while simplifying the implementation.
- The CV content is rendered from the captured legacy HTML so the copy stays aligned with the saved source of truth.
