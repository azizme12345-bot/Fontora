import fs from 'fs';
import path from 'path';
import { FONTS_DATA } from './src/data/fonts.ts';

const baseUrl = 'https://fontora-ten.vercel.app';

// 1. Generate Sitemap XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const staticPages = [
  { path: '', priority: '1.0' },
  { path: 'fonts', priority: '0.8' },
  { path: 'categories', priority: '0.8' },
  { path: 'favorites', priority: '0.8' },
  { path: 'about', priority: '0.8' },
];

staticPages.forEach(page => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${page.path ? '/' + page.path : '/'}</loc>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
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

  // 2. Prerender static HTML files for every route in dist/
  const templatePath = path.join(distDir, 'index.html');
  if (fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf8');

    const renderPage = (routePath, title, desc, canonical) => {
      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${desc}" />`)
        .replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
        .replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${desc}" />`)
        .replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
        .replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
        .replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${desc}" />`);

      let targetDir = distDir;
      if (routePath !== '') {
        targetDir = path.join(distDir, routePath);
      }
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), html);
    };

    // Render Home
    renderPage(
      '',
      'Fontora - Multilingual Font Platform & Typography Preview',
      'Discover, preview, and download stunning Urdu, Arabic, Hindi, English, and Roman Urdu fonts with live typography customization.',
      `${baseUrl}/`
    );

    // Render Fonts
    renderPage(
      'fonts',
      'Browse All Fonts - Urdu, Arabic, Hindi & English Typefaces | Fontora',
      'Explore 140+ premium Urdu, Arabic, Hindi, English, and Roman Urdu fonts with live multi-lingual preview and free downloads.',
      `${baseUrl}/fonts`
    );

    // Render Categories
    renderPage(
      'categories',
      'Font Categories - Nastaleeq, Naskh, Calligraphy & Display | Fontora',
      'Browse fonts by category: Nastaleeq, Naskh, Calligraphy, Serif, Sans-Serif, Handwriting, and Modern Display typography.',
      `${baseUrl}/categories`
    );

    // Render Favorites
    renderPage(
      'favorites',
      'My Saved Fonts - Fontora Collection',
      'View and test your saved collection of favorite Urdu, Arabic, and English typefaces.',
      `${baseUrl}/favorites`
    );

    // Render About
    renderPage(
      'about',
      'About Fontora & Font Licensing Policy',
      'Learn about the Fontora multilingual typography platform, open-source font licenses, and our commitment to privacy.',
      `${baseUrl}/about`
    );

    // Render Font Detail Pages (/fonts/[slug])
    FONTS_DATA.forEach(font => {
      renderPage(
        `fonts/${font.slug}`,
        `${font.name} - Free Download & Live Preview | Fontora`,
        `${font.description} Free download ${font.name} in ${font.fontFormat} format with interactive multi-script preview.`,
        `${baseUrl}/fonts/${font.slug}`
      );
    });

    console.log(`Prerendered ${5 + FONTS_DATA.length} unique HTML files successfully in dist/`);
  }
}

console.log('Static sitemap.xml, robots.txt, and prerendered HTML pages synchronized successfully.');
