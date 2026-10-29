import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT) || 3000;

  // Serve static files from public directory first
  app.use(express.static(path.join(__dirname, 'public')));

  // Sitemap route with proper XML headers
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    const corePages = [
      { path: '', priority: '1.0', changefreq: 'daily' },
      { path: 'fonts', priority: '0.9', changefreq: 'daily' },
      { path: 'categories', priority: '0.8', changefreq: 'weekly' },
      { path: 'popular-fonts', priority: '0.9', changefreq: 'daily' },
      { path: 'urdu-fonts', priority: '0.9', changefreq: 'weekly' },
      { path: 'arabic-fonts', priority: '0.9', changefreq: 'weekly' },
      { path: 'hindi-fonts', priority: '0.8', changefreq: 'weekly' },
      { path: 'english-fonts', priority: '0.8', changefreq: 'weekly' },
      { path: 'roman-urdu-fonts', priority: '0.8', changefreq: 'weekly' },
      { path: 'about', priority: '0.7', changefreq: 'monthly' },
      { path: 'privacy-policy', priority: '0.6', changefreq: 'monthly' },
      { path: 'contact', priority: '0.7', changefreq: 'monthly' },
    ];
    corePages.forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/${page.path}</loc>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    res.header('Content-Type', 'application/xml; charset=utf-8');
    res.send(xml);
  });

  // Robots route with plain text header
  app.get('/robots.txt', (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    const robots = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
    res.header('Content-Type', 'text/plain; charset=utf-8');
    res.send(robots);
  });

  // Google Search Console file verification handler
  app.get('/google:id(*).html', (req, res) => {
    const filename = `google${req.params.id}.html`;
    const filePath = path.join(__dirname, 'public', filename);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.send(`google-site-verification: ${filename}`);
    }
  });

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fontora server running on port ${PORT}`);
  });
}

startServer();
