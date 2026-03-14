# Maintenance Notes

Practical notes for working on, rebuilding, and redeploying `tonyingram.com`.

## Local Setup

- Required: Node.js `22.22.1`
- Package manager: `npm`
- Version pins live in `.nvmrc` and `package.json`

Install dependencies:

```bash
npm install
```

## Local Commands

Start the dev server:

```bash
npm run dev
```

Run Astro checks:

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

## Deploy

Cloudflare Pages settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.22.1`

`public/_redirects` carries the legacy `/curriculum-vitae/` to `/cv/` redirect and the `www` to apex redirect rule.

## Domain

- Canonical production URL: `https://tonyingram.com`

Cutover checklist:

1. Confirm the Cloudflare Pages preview deployment builds cleanly.
2. Add `tonyingram.com` as a custom domain in Cloudflare Pages.
3. Add `www.tonyingram.com` and verify redirect behavior.
4. Move nameservers from Hostinger to Cloudflare when ready.
5. Confirm apex resolution, `www` redirect, and SSL after DNS settles.

## Analytics

Cloudflare Web Analytics is the intended analytics provider. Any site-specific dashboard configuration still needs to be handled in Cloudflare.

## Legacy Reference

Historical capture material used for the rebuild lives in:

- `public/legacy/screenshots/`
- `public/legacy/notes/`
