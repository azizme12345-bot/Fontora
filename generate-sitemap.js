import fs from 'fs';
import path from 'path';
import { FONTS_DATA } from './src/data/fonts.ts';

const baseUrl = 'https://fontora-ten.vercel.app';

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const staticPages = ['', 'fonts', 'categories', 'favorites', 'about'];
staticPages.forEach(page => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/${page}</loc>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
  xml += `  </url>\n`;
});

FONTS_DATA.forEach(font => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/fonts/${font.slug}</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.9</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;

const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;

// Write to public/ directory
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

// Write to dist/ directory if it exists
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
}

console.log('Static sitemap.xml and robots.txt synchronized successfully in public/ and dist/');
