#!/usr/bin/env node
// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, and other participating engines).
// Run after the key file is live on the site. IndexNow fetches it to verify ownership.
//
//   npm run indexnow -- https://canadiandatainsights.com/inflation/
//   npm run indexnow -- --since 2026-11-20
//   npm run indexnow
//   npm run indexnow -- --dry-run
//
// With no URLs, the source is dist/sitemap.xml when a build is present, otherwise the
// live sitemap. --since keeps entries whose <lastmod> is on or after that YYYY-MM-DD.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const SITE = 'https://canadiandatainsights.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function findKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim();
  const publicDir = path.join(root, 'public');
  for (const file of readdirSync(publicDir)) {
    const match = file.match(/^([a-f0-9]{32})\.txt$/);
    if (match && readFileSync(path.join(publicDir, file), 'utf8').trim() === match[1]) return match[1];
  }
  throw new Error('No IndexNow key file (public/<32 hex chars>.txt containing the key) found.');
}

function parseArgs(argv) {
  const dryRun = argv.includes('--dry-run');
  let since = null;
  const urls = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--dry-run') continue;
    if (arg === '--since' || arg.startsWith('--since=')) {
      const value = arg === '--since' ? argv[++i] : arg.slice('--since='.length);
      if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        throw new Error('--since expects a date YYYY-MM-DD');
      }
      since = value;
      continue;
    }
    if (arg.startsWith('-')) throw new Error(`Unknown option ${arg}`);
    urls.push(normalizeUrl(arg));
  }
  if (urls.length > 0 && since) {
    throw new Error('Pass either a list of URLs or --since, not both.');
  }
  return { dryRun, since, urls };
}

function normalizeUrl(value) {
  if (value.startsWith(`${SITE}/`)) return value;
  if (value.startsWith('/')) return `${SITE}${value}`;
  throw new Error(`URL must be on ${SITE}: ${value}`);
}

async function loadSitemap() {
  const local = path.join(root, 'dist', 'sitemap.xml');
  if (existsSync(local)) return { xml: readFileSync(local, 'utf8'), source: 'dist/sitemap.xml' };
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not fetch ${SITE}/sitemap.xml (${res.status})`);
  return { xml: await res.text(), source: `${SITE}/sitemap.xml` };
}

function urlsFromSitemap(xml, since) {
  const urls = [];
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/)?.[1];
    if (!loc || !loc.startsWith(`${SITE}/`)) continue;
    if (since) {
      const lastmod = (block.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/)?.[1] || '').slice(0, 10);
      if (!lastmod || lastmod < since) continue;
    }
    urls.push(loc);
  }
  return urls;
}

const { dryRun, since, urls: explicitUrls } = parseArgs(process.argv.slice(2));
const key = findKey();

let urlList = explicitUrls;
let source = 'arguments';
if (urlList.length === 0) {
  const sitemap = await loadSitemap();
  source = since ? `${sitemap.source} since ${since}` : sitemap.source;
  urlList = urlsFromSitemap(sitemap.xml, since);
}

if (urlList.length === 0) throw new Error(`No ${SITE} URLs to submit (${source}).`);

const host = new URL(SITE).host;
const payload = { host, key, keyLocation: `${SITE}/${key}.txt`, urlList };
console.log(`IndexNow: ${urlList.length} URLs from ${source}`);

if (dryRun) {
  const preview = urlList.length > 5 ? [...urlList.slice(0, 5), `… ${urlList.length - 5} more`] : urlList;
  console.log(JSON.stringify({ ...payload, urlList: preview }, null, 2));
  process.exit(0);
}

// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urlList.length; i += 10000) {
  const batch = urlList.slice(i, i + 10000);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ ...payload, urlList: batch }),
  });
  const body = await res.text();
  console.log(`IndexNow: HTTP ${res.status} for ${batch.length} URLs${body ? ` — ${body.slice(0, 300)}` : ''}`);
  // 200 = accepted, 202 = accepted while the key is being verified.
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}
