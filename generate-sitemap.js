import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.tsx';
import { FONTS_DATA } from './src/data/fonts.ts';

const baseUrl = 'https://fontora-ten.vercel.app';

export const CORE_PAGES = [
  { path: '', title: 'Fontora - Multilingual Font Platform & Typography Preview', desc: 'Discover, preview, and download stunning Urdu, Arabic, Hindi, English, and Roman Urdu fonts with live typography customization.', priority: '1.0', changefreq: 'daily' },
  { path: 'fonts', title: 'All Fonts Directory - Urdu, Arabic, Hindi & English | Fontora', desc: 'Browse 140+ open-source and community typefaces across Urdu, Arabic, Devanagari, and Latin scripts.', priority: '0.9', changefreq: 'daily' },
  { path: 'categories', title: 'Font Categories - Nastaleeq, Naskh, Calligraphy & Display | Fontora', desc: 'Browse fonts categorized by artistic style: Nastaleeq, Naskh, Arabic Calligraphy, Serif, Sans-Serif, and Handwriting.', priority: '0.8', changefreq: 'weekly' },
  { path: 'popular-fonts', title: 'Popular Fonts - Multilingual Typefaces | Fontora', desc: 'Explore popular Urdu Nastaleeq, Arabic, Hindi, and English fonts on Fontora.', priority: '0.9', changefreq: 'daily' },
  { path: 'urdu-fonts', title: 'Urdu Fonts - Download Free Jameel Noori Nastaleeq & Naskh | Fontora', desc: 'Download top Urdu fonts including Jameel Noori Nastaleeq, Alvi Naskh, Gulzar, and Quranic calligraphy for professional design.', priority: '0.9', changefreq: 'weekly' },
  { path: 'arabic-fonts', title: 'Arabic Fonts - Quranic, Calligraphy & Modern Sans | Fontora', desc: 'Explore premium Arabic typefaces: Amiri Quranic, Cairo, Reem Kufi, and Scheherazade with live ligature testing.', priority: '0.9', changefreq: 'weekly' },
  { path: 'hindi-fonts', title: 'Hindi Devanagari Fonts - Free Download & Live Preview | Fontora', desc: 'Discover beautiful Devanagari and Hindi fonts for websites, branding, posters, and graphic design.', priority: '0.8', changefreq: 'weekly' },
  { path: 'english-fonts', title: 'English Fonts - Modern Serif, Sans-Serif & Display | Fontora', desc: 'Collection of high-legibility English typefaces: Inter, Roboto, Playfair Display, Montserrat, and Fira Code.', priority: '0.8', changefreq: 'weekly' },
  { path: 'roman-urdu-fonts', title: 'Roman Urdu Fonts - Stylish Social Media Typography | Fontora', desc: 'Aesthetic, bold, and modern typography tailored for Roman Urdu quotes, Instagram reels, and YouTube thumbnails.', priority: '0.8', changefreq: 'weekly' },
  { path: 'about', title: 'About Us - Fontora Multilingual Typography Platform', desc: 'Learn about the Fontora platform, our mission to elevate non-Latin typography, and our open-source licensing standards.', priority: '0.7', changefreq: 'monthly' },
  { path: 'privacy-policy', title: 'Privacy Policy - Zero Tracking & Local Storage | Fontora', desc: "Read Fontora's transparent privacy policy: zero account registration, no tracking cookies, and local client storage.", priority: '0.6', changefreq: 'monthly' },
  { path: 'contact', title: 'Contact Us & Font Submissions | Fontora', desc: 'Get in touch with Fontora for font submissions, designer attribution updates, DMCA inquiries, or feedback.', priority: '0.7', changefreq: 'monthly' },
  { path: 'favorites', title: 'My Saved Fonts - Fontora Collection', desc: 'View and test your saved collection of favorite Urdu, Arabic, and English typefaces.', priority: '0.5', changefreq: 'weekly' }
];

// 1. Generate Sitemap XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

CORE_PAGES.forEach(page => {
  const url = page.path ? `${baseUrl}/${page.path}` : `${baseUrl}/`;
  xml += `  <url>\n`;
  xml += `    <loc>${url}</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
});

FONTS_DATA.forEach(font => {
  const url = `${baseUrl}/fonts/${font.slug}`;
  xml += `  <url>\n`;
  xml += `    <loc>${url}</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;

const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

// 2. Prerender Static HTML for Every Route in dist/
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);

  const templatePath = path.join(distDir, 'index.html');
  if (fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf8');

    const renderAndSave = (routePath, title, desc, canonical) => {
      global.window = {
        location: { pathname: routePath ? `/${routePath}` : '/' },
        addEventListener: () => {},
        removeEventListener: () => {},
        history: { pushState: () => {} },
        scrollTo: () => {}
      };

      let capturedTitle = title;
      let capturedDesc = desc;
      let capturedCanonical = canonical;

      global.document = {
        title: '',
        querySelector: (selector) => {
          if (selector === 'meta[name="description"]') {
            return { setAttribute: (k, v) => { capturedDesc = v; } };
          }
          if (selector === 'metaproperty="og:title"' || selector === 'meta[property="og:title"]') {
            return { setAttribute: (k, v) => { capturedTitle = v; } };
          }
          if (selector === 'meta[property="og:description"]') {
            return { setAttribute: (k, v) => { capturedDesc = v; } };
          }
          if (selector === 'link[rel="canonical"]') {
            return { setAttribute: (k, v) => { capturedCanonical = v; } };
          }
          return null;
        },
        documentElement: { classList: { add: () => {}, remove: () => {} } }
      };

      let appHtml = '';
      try {
        let activeRoute = routePath === '' ? 'home' : routePath;
        if (routePath.startsWith('fonts/')) {
          activeRoute = 'font-detail';
        }
        appHtml = renderToString(React.createElement(App, { initialRoute: activeRoute }));
      } catch (err) {
        console.warn(`SSR render warning for ${routePath}:`, err.message);
      }

      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${capturedTitle}</title>`)
        .replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${capturedDesc}" />`)
        .replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${capturedCanonical}" />`)
        .replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${capturedTitle}" />`)
        .replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${capturedDesc}" />`)
        .replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${capturedCanonical}" />`)
        .replace(/<div id="root">.*?<\/div>/, `<div id="root">${appHtml}</div>`)
        .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);

      let targetDir = distDir;
      if (routePath !== '') {
        targetDir = path.join(distDir, routePath);
      }
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), html);
    };

    // Prerender core pages
    CORE_PAGES.forEach(page => {
      const canonical = page.path ? `${baseUrl}/${page.path}` : `${baseUrl}/`;
      renderAndSave(page.path, page.title, page.desc, canonical);
    });

    // Prerender font detail pages
    FONTS_DATA.forEach(font => {
      const routePath = `fonts/${font.slug}`;
      const title = `${font.name} - Free Download & Live Preview | Fontora`;
      const desc = `${font.description} Free download ${font.name} in ${font.fontFormat} format with interactive multi-script preview.`;
      const canonical = `${baseUrl}/fonts/${font.slug}`;
      renderAndSave(routePath, title, desc, canonical);
    });

    console.log(`Successfully prerendered ${CORE_PAGES.length} core pages and ${FONTS_DATA.length} font detail pages into dist/`);
  }
}

console.log(`Sitemap generated with ${CORE_PAGES.length + FONTS_DATA.length} URLs.`);
