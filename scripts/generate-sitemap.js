const fs = require('fs');
const path = require('path');

const SITE = 'https://www.json2toon.online';
const routes = [
    '/',
    '/documentation',
    '/features',
    '/about',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms'
];

const today = new Date().toISOString().split('T')[0];

const urls = routes.map((r) => `  <url>\n    <loc>${SITE}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
console.log('sitemap.xml generated at public/sitemap.xml');
