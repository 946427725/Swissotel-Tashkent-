import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { writeFileSync } from 'fs';

// SEO Plugin - generates sitemap and robots.txt on build
const seoPlugin = () => ({
  name: 'seo-generator',
  buildStart() {
    const BASE_URL = 'https://swissotel-tashkent.com';
    const TODAY = new Date().toISOString().split('T')[0];
    
    const routes = [
      { path: '/', priority: '1.0', changefreq: 'weekly' },
      { path: '/rooms', priority: '0.9', changefreq: 'weekly' },
      { path: '/dining', priority: '0.8', changefreq: 'weekly' },
      { path: '/spa', priority: '0.8', changefreq: 'weekly' },
      { path: '/offers', priority: '0.9', changefreq: 'daily' },
      { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    ];

    // Generate Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    writeFileSync('public/sitemap.xml', sitemap);
    console.log('✅ Sitemap generated');

    // Generate Robots.txt
    const robots = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml

Disallow: /admin
Disallow: /api/
`;
    
    writeFileSync('public/robots.txt', robots);
    console.log('✅ Robots.txt generated');
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), seoPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});