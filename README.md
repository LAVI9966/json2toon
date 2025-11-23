# JSON ⇄ TOON Converter — Deployment & SEO Guide

This repository is a static React app (Vite). Below are recommended steps to host the site, ensure it is crawlable by Google, and improve discovery.

Quick checklist
- Buy a domain and point it to your host (Netlify, Vercel, GitHub Pages, or your VPS).
- Serve over HTTPS (Let’s Encrypt or provider-managed TLS).
-- Replace `yourdomain.com` placeholders in `public/robots.txt` and `public/sitemap.xml` (already set to `https://www.json2toon.online`).
- Optionally replace `public/opengraph.png` with a real PNG for better social previews.

Build & local verification

```bash
# install deps
npm install

# build site
npm run build

# serve locally (optional - install serve)
npx serve dist
```

Deploy options
- Netlify: connect repository and set build command `npm run build`, publish `dist/`.
- Vercel: import the project, Vercel auto-detects Vite. Set build output to `dist` if needed.
- GitHub Pages: use `gh-pages` package or GitHub Actions to publish `/dist` to `gh-pages` branch.

Search Engine steps (Google)
1. Verify your site in Google Search Console (add property `https://www.json2toon.online`).
2. `public/sitemap.xml` has been updated to point to `https://www.json2toon.online`; submit it in Search Console.
3. Use URL Inspection → Request Indexing for the homepage.

Notes on bot / automated commits
- I removed local references to third-party tagger tooling. If a GitHub App or Action was making commits previously, check the repo's Settings → Installed GitHub Apps and `.github/workflows` for actions that may commit.

Links & contact
- Live site: https://www.json2toon.online/
- GitHub repo: https://github.com/LAVI9966/json2toon
- LinkedIn: https://www.linkedin.com/in/lavish-gehlod-340207237/

If you want, I can:
- Deploy this project to Netlify or Vercel and connect the domain (you must provide domain/DNS access).
- Replace the `public/opengraph.png` with a proper PNG if you provide an image.

Sitemap generation
- A script is included to (re)generate `public/sitemap.xml` before each build.
- To generate locally without building:

```bash
node scripts/generate-sitemap.js
```

Remaining manual steps (your side)
- Verify ownership in Google Search Console and submit `/sitemap.xml`.
- Request indexing for the homepage (URL Inspection → Request Indexing).
- Replace `public/opengraph.png` with a 1200×630 PNG if you want improved social previews.
- Acquire a few backlinks and share the site on social to help ranking.
- Run Lighthouse and address Core Web Vitals if needed.

Tracking (Google Analytics)
- Google Analytics (GA4) snippet is included directly in `index.html`.
- The snippet is configured with `send_page_view: false` so SPA navigation doesn't cause duplicate events; pageviews are sent by the client code when routes change.
- To verify: open GA4 Realtime/DebugView and navigate the site, or check Network tab for requests to `googletagmanager.com/gtag/js`.

Visit counter
- A simple visitor counter (CountAPI) is included on the homepage and increments on page load. For stronger control or privacy, I can add a serverless counter or switch to Plausible/Umami.
