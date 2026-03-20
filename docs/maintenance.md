# Maintenance

Practical local build and deploy notes for `tonyingram.com`.

## Local

- Node.js: `22.22.1`
- Package manager: `npm`
- Install: `npm install`
- Dev server: `npm run dev`
- Checks: `npm run check`
- Build: `npm run build`
- Preview: `npm run preview`

## Deploy

- Hosting: Cloudflare Pages
- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: `22.22.1`

## Production

- Canonical URL: `https://tonyingram.com`
- `public/_redirects` handles the legacy `/curriculum-vitae/` to `/cv/` redirect.
- `public/_redirects` also carries the `www` to apex redirect rule.
