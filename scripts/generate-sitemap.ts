import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Room data (from your constants.ts)
const ROOMS = [
  { id: "advantage-king" },
  { id: "advantage-twin" },
  { id: "executive-king" },
  { id: "executive-twin" },
  { id: "superior-king" },
  { id: "superior-executive-king" },
  { id: "vitality-room" },
  { id: "junior-suite" },
  { id: "executive-suite" },
  { id: "vitality-executive-junior-suite" },
  { id: "advantage-king-accessible" },
];

const BASE_URL = 'https://swissotel-tashkent.com';
const TODAY = new Date().toISOString().split('T')[0];

const STATIC_URLS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/rooms', priority: '0.9', changefreq: 'weekly' },
  { loc: '/dining', priority: '0.8', changefreq: 'weekly' },
  { loc: '/spa', priority: '0.8', changefreq: 'weekly' },
  { loc: '/offers', priority: '0.9', changefreq: 'daily' },
  { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
];

const ROOM_URLS = ROOMS.map(room => ({
  loc: `/rooms/${room.id}`,
  priority: '0.8',
  changefreq: 'weekly'
}));

const ALL_URLS = [...STATIC_URLS, ...ROOM_URLS];

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ALL_URLS.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${url.loc}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${BASE_URL}${url.loc}?lang=ru"/>
    <xhtml:link rel="alternate" hreflang="uz" href="${BASE_URL}${url.loc}?lang=uz"/>
  </url>`).join('\n')}
</urlset>`;

// Ensure public folder exists
const PUBLIC_DIR = resolve(__dirname, '..', 'public');
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
  console.log('📁 Created public/ folder');
}

// Write SITEMAP (not robots.txt!)
const OUTPUT_PATH = resolve(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(OUTPUT_PATH, SITEMAP);

console.log('✅ Sitemap generated:', OUTPUT_PATH);
console.log('📊 Total URLs:', ALL_URLS.length);