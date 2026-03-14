import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROBOTS_TXT = `# Swissôtel Tashkent - Robots.txt
# Generated: ${new Date().toISOString()}

User-agent: *
Allow: /
Crawl-delay: 1

Sitemap: https://swissotel-tashkent.com/sitemap.xml

# Admin and API routes
Disallow: /admin
Disallow: /admin/
Disallow: /api/
Disallow: /api/*

# Development files
Disallow: /.git/
Disallow: /node_modules/

# Googlebot optimization
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

# Social media crawlers
User-agent: Twitterbot
Allow: /
User-agent: facebookexternalhit
Allow: /

# AI crawlers (block training, allow search)
User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
Disallow: /
User-agent: PerplexityBot
Allow: /
`;

const PUBLIC_DIR = resolve(__dirname, '..', 'public');
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
}

const OUTPUT_PATH = resolve(PUBLIC_DIR, 'robots.txt');
writeFileSync(OUTPUT_PATH, ROBOTS_TXT);

console.log('✅ Robots.txt generated:', OUTPUT_PATH);