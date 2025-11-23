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
