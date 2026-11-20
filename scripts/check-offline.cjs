/**
 * Offline check (service worker), run after `npm run build`:  npm run check-offline
 *
 * Serves dist/ like Vercel does (exported .html URLs return 404) and acts like
 * a real visitor: lands on /transport (before the service worker exists),
 * moves to /bourse with an in-app link (no page request), then shuts the
 * server down (really offline) and checks:
 *  - /transport, /bourse and the never-visited home page open, styled
 *  - an unvisited page shows the offline page, which links to the saved pages
 * Exits 1 on failure. Needs Chrome; packages come with @lhci/cli.
 */
const path = require("path");
const fs = require("fs");
const http = require("http");
const dist = path.resolve(__dirname, "..", "dist");
const port = 4174;
const puppeteer = require("puppeteer-core");
const chromeLauncher = require("chrome-launcher");

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html not found: run `npm run build` first.");
  process.exit(1);
}

const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".json": "application/json", ".webmanifest": "application/manifest+json", ".txt": "text/x-component" }; // .txt = RSC payloads (in-app navigation)
const misses = [];
const isFile = (x) => { try { return fs.statSync(x).isFile(); } catch { return false; } };
const server = http.createServer((q, s) => {
  const p = decodeURIComponent(q.url.split("?")[0]);
  if (p.endsWith(".html")) { s.writeHead(404); return s.end("not found"); }
  const b = path.join(dist, p);
  const f = [b, path.join(b, "index.html"), b.replace(/[\\/]$/, "") + ".html"].find(isFile);
  if (!f) { misses.push(q.url); s.writeHead(404); return s.end("not found"); }
  s.writeHead(200, { "Content-Type": types[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-store", Date: new Date().toUTCString() });
  s.end(fs.readFileSync(f));
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const OFFLINE_TITLE = "ما فماش كونيكسيون";

(async () => {
  await new Promise((r) => server.listen(port, "127.0.0.1", r));
  const base = `http://127.0.0.1:${port}`;
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new", ...(process.env.CI ? ["--no-sandbox"] : [])] });
  const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}` });
  const page = await browser.newPage();
  // Desktop width so the sidebar's in-app links are on screen.
  await page.setViewport({ width: 1280, height: 900 });
  const out = {};

  // 1. Land on a deep page: it loads before the service worker runs.
  await page.goto(base + "/transport", { waitUntil: "networkidle0" });
  out.sw = await page.evaluate(async () => {
    const reg = await Promise.race([navigator.serviceWorker.ready, new Promise((r) => setTimeout(() => r(null), 10000))]);
    return reg ? reg.active.state : "never became active";
  });
  await wait(3000); // cache-page message for /transport

  // 2. In-app navigation (Next.js client routing, no page request).
  await page.evaluate(() => { window.__sameDocument = true; });
  await page.click('aside a[href="/bourse"]');
  await page.waitForFunction(() => location.pathname === "/bourse", { timeout: 10000 });
  out.clientSideNav = await page.evaluate(() => window.__sameDocument === true);
  await wait(3000); // cache-page message for /bourse

  out.cachedPages = await page.evaluate(async () => {
    const all = [];
    for (const n of (await caches.keys()).filter((n) => n.startsWith("pages"))) {
      all.push(...(await (await caches.open(n)).keys()).map((r) => new URL(r.url).pathname));
    }
    return all.sort();
  });

  // 3. Really offline.
  server.closeAllConnections();
  await new Promise((r) => server.close(r));

  for (const p of ["/transport", "/bourse", "/", "/faq"]) {
    try {
      await page.goto(base + p, { waitUntil: "load", timeout: 20000 });
      await wait(800);
      out[`offline ${p}`] = await page.evaluate(() => ({
        title: document.title,
        // Page CSS loaded? (body uses the --color-background token, not the browser default)
        styled: getComputedStyle(document.body).backgroundColor !== "rgba(0, 0, 0, 0)",
        savedLinks: [...document.querySelectorAll("#saved-list a")].map((a) => a.getAttribute("href")),
      }));
    } catch (e) {
      out[`offline ${p}`] = { error: e.message.split("\n")[0] };
    }
  }
  out.misses = misses;
  console.log(JSON.stringify(out, null, 2));
  await browser.disconnect();
  await chrome.kill();

  const problems = [];
  if (!["activating", "activated"].includes(out.sw)) problems.push("service worker never became active");
  if (!out.clientSideNav) problems.push("test setup: the /bourse link did a full page load, not in-app navigation");
  if (!out.cachedPages.includes("/offline")) problems.push("offline page was not saved at install");
  for (const p of ["/transport", "/bourse", "/"]) {
    const r = out[`offline ${p}`];
    if (r.error || r.title.includes(OFFLINE_TITLE)) problems.push(`${p} did not open offline`);
    else if (!r.styled) problems.push(`${p} opened offline but without its CSS`);
  }
  const fallback = out["offline /faq"];
  if (fallback.error || !fallback.title.includes(OFFLINE_TITLE)) problems.push("unvisited page did not show the offline page");
  else if (!["/", "/transport", "/bourse"].every((p) => fallback.savedLinks.includes(p))) problems.push("offline page does not list the saved pages");

  console.log(problems.length ? "FAIL:\n- " + problems.join("\n- ") : "OK: offline support works");
  process.exit(problems.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
