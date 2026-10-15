// 사용법: node scripts/capture-projects.mjs [프로젝트폴더명 ...]
// C:\cursor 아래 정적 HTML 프로젝트를 로컬 서버로 띄워 PC/모바일 화면을 캡처한다.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const ROOT = process.env.PROJECTS_ROOT || 'C:\\cursor';
const OUT_DIR = path.resolve('public/projects');
const META_FILE = path.resolve('scripts/projects-meta.json');
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);
const PROJECT_TIMEOUT = 120000;

const EXCLUDE = new Set([
  'nhw', 'aa', 'easy-loan - 복사본', 'trafic-test',
  'bambam', 'heaundae-24', 'forest-teraphy', 'w-host', 'w-host-ver2', 'ceri-ticket', 'audi-ktv', 'mekander', 'robin', 'ruda',
  'nam-brother', 'happy-haseyeon', 'ujiny-daily-note', 'hillstate-parkfore', 'dongdaemun',
  // src/proto 에 이미 정리된 이미지가 있는 프로젝트
  'hara', 'cancer', 'sin_midea', 'brandiup', 'jemin-mobile-intro',
]);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
};

function findSiteRoot(dir) {
  for (const sub of ['dist', 'build', 'out', '', 'public']) {
    const candidate = path.join(dir, sub);
    const index = path.join(candidate, 'index.html');
    if (!fs.existsSync(index)) continue;
    const html = fs.readFileSync(index, 'utf8');
    if (sub === '' && /src=["']\/src\/main\.(jsx?|tsx?)["']/.test(html)) continue;
    return candidate;
  }
  return null;
}

function startServer(root) {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
    let file = path.join(root, urlPath);
    if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) && !path.extname(file)) {
      if (fs.existsSync(file + '.html')) file += '.html';
    }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function autoScroll(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    const limit = Math.min(document.documentElement.scrollHeight, 30000);
    for (let y = 0; y < limit; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await sleep(700);
}

async function hidePopups(page) {
  await page.evaluate(() => {
    const vw = window.innerWidth, vh = window.innerHeight;
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el);
      if (cs.position !== 'fixed' || cs.display === 'none') continue;
      const r = el.getBoundingClientRect();
      const big = r.width > vw * 0.5 && r.height > vh * 0.5;
      const z = parseInt(cs.zIndex, 10) || 0;
      if (big && z >= 100 && /modal|popup|layer|overlay|dim|cookie/i.test(el.className + ' ' + el.id)) {
        el.style.setProperty('display', 'none', 'important');
      }
    }
    if (document.body) document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  });
}

async function forceReveal(page) {
  await page.evaluate(() => {
    const re = /reveal|fade|aos|anim|appear|scroll|motion|slide-up|inview|in-view|observe/i;
    for (const el of document.querySelectorAll('body *')) {
      const marker = el.hasAttribute('data-aos') || el.hasAttribute('data-animate') || re.test(el.className?.toString?.() || '');
      if (!marker) continue;
      const cs = getComputedStyle(el);
      if (parseFloat(cs.opacity) < 0.1 && cs.display !== 'none') {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('transform', 'none', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
      }
    }
  });
}

async function collectMeta(page) {
  return page.evaluate(() => {
    const txt = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
    const meta = (sel) => document.querySelector(sel)?.getAttribute('content')?.trim() || '';
    const headings = [...document.querySelectorAll('h1, h2')]
      .map(txt).filter((t) => t && t.length >= 2 && t.length <= 60);
    const html = document.documentElement.outerHTML;
    const tech = [];
    const has = (re) => re.test(html);
    if (has(/swiper/i)) tech.push('Swiper');
    if (has(/gsap/i)) tech.push('GSAP');
    if (has(/aos(\.min)?\.(js|css)|data-aos=/i)) tech.push('AOS');
    if (has(/dapi\.kakao\.com|kakao.*maps/i)) tech.push('Kakao Map');
    if (has(/supabase/i)) tech.push('Supabase');
    if (has(/firebase/i)) tech.push('Firebase');
    if (has(/chart\.js|chartjs/i)) tech.push('Chart.js');
    if (has(/tailwind/i)) tech.push('Tailwind CSS');
    if (has(/googletagmanager|gtag\(/i)) tech.push('GA/GTM');
    if (has(/fbq\(|facebook\.net/i)) tech.push('Meta Pixel');
    if (has(/wcs\.naver|naver.*analytics/i)) tech.push('Naver Analytics');
    if (has(/emailjs|telegram|sendMessage/i)) tech.push('알림 연동');
    const forms = document.querySelectorAll('form, input[type="tel"], input[name*="phone" i]').length;
    return {
      title: document.title.trim(),
      description: meta('meta[name="description"]') || meta('meta[property="og:description"]'),
      headings: [...new Set(headings)].slice(0, 10),
      tech,
      hasForm: forms > 0,
      pageHeight: document.documentElement.scrollHeight,
    };
  });
}

async function shoot(page, file) {
  await page.screenshot({ path: file, type: 'webp', quality: 70, captureBeyondViewport: false, optimizeForSpeed: true });
}

async function captureProject(browser, name) {
  const dir = path.join(ROOT, name);
  const siteRoot = findSiteRoot(dir);
  if (!siteRoot) return { name, skipped: '빌드 결과물/정적 index.html 없음' };

  const server = await startServer(siteRoot);
  const url = `http://127.0.0.1:${server.address().port}/`;
  const outDir = path.join(OUT_DIR, name);
  fs.mkdirSync(outDir, { recursive: true });

  const page = await browser.newPage();
  page.on('dialog', (d) => d.dismiss().catch(() => {}));
  try {
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await sleep(1200);
    await autoScroll(page);
    await hidePopups(page);
    const meta = await collectMeta(page);
    await forceReveal(page);
    await sleep(300);

    const images = ['main.webp'];
    await shoot(page, path.join(outDir, 'main.webp'));

    const maxScroll = Math.max(0, meta.pageHeight - 900);
    const shots = maxScroll > 600 ? Math.min(4, Math.max(2, Math.floor(maxScroll / 1400))) : 0;
    for (let i = 1; i <= shots; i++) {
      const y = Math.round((maxScroll * i) / shots);
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await sleep(1200);
      await hidePopups(page);
      await forceReveal(page);
      await sleep(300);
      const file = `d${i}.webp`;
      await shoot(page, path.join(outDir, file));
      images.push(file);
    }

    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await sleep(1200);
    await autoScroll(page);
    await hidePopups(page);
    await shoot(page, path.join(outDir, 'mobile.webp'));

    return { name, ...meta, images, mobile: 'mobile.webp' };
  } catch (e) {
    return { name, error: e.message };
  } finally {
    await page.close().catch(() => {});
    server.close();
  }
}

async function main() {
  const resume = process.argv.includes('--resume');
  const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const names = (only.length ? only : fs.readdirSync(ROOT))
    .filter((n) => fs.statSync(path.join(ROOT, n)).isDirectory())
    .filter((n) => only.length || !EXCLUDE.has(n));

  const prev = fs.existsSync(META_FILE) ? JSON.parse(fs.readFileSync(META_FILE, 'utf8')) : {};
  const browser = await puppeteer.launch({ protocolTimeout: 60000, args: ['--autoplay-policy=no-user-gesture-required'] });
  const queue = [...names];

  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const name = queue.shift();
      const started = Date.now();
      if (resume && prev[name] && (prev[name].images || prev[name].skipped)) continue;
      const result = await Promise.race([
        captureProject(browser, name),
        sleep(PROJECT_TIMEOUT).then(() => ({ name, error: '시간 초과' })),
      ]);
      prev[name] = result;
      const status = result.skipped ? `SKIP (${result.skipped})` : result.error ? `ERROR ${result.error}` : `OK ${result.images.length}장`;
      console.log(`[${names.length - queue.length}/${names.length}] ${name} ${status} ${((Date.now() - started) / 1000).toFixed(1)}s`);
      fs.writeFileSync(META_FILE, JSON.stringify(prev, null, 2));
    }
  }));

  await Promise.race([browser.close(), sleep(10000)]);
  process.exit(0);
}

main();
