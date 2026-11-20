/**
 * Offline check (service worker), run after `npm run build`:  npm run check-offline
 *
 * Serves dist/ like Vercel does (exported .html URLs return 404), visits / and
 * /privacy, then shuts the server down (really offline) and checks that the
 * visited pages still open and an unvisited page shows the offline page.
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

const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".json": "application/json", ".webmanifest": "application/manifest+json" };
const isFile = (x) => { try { return fs.statSync(x).isFile(); } catch { return false; } };
const server = http.createServer((q, s) => {
  const p = decodeURIComponent(q.url.split("?")[0]);
  if (p.endsWith(".html")) { s.writeHead(404); return s.end("not found"); }
  const b = path.join(dist, p);
  const f = [b, path.join(b, "index.html"), b.replace(/[\\/]$/, "") + ".html"].find(isFile);
  if (!f) { s.writeHead(404); return s.end("not found"); }
  s.writeHead(200, { "Content-Type": types[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-store" });
  s.end(fs.readFileSync(f));
});

(async () => {
  await new Promise((r) => server.listen(port, "127.0.0.1", r));
  const base = `http://127.0.0.1:${port}`;
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new"] });
  const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}` });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  const out = {};
  await page.goto(base + "/", { waitUntil: "networkidle0" });
  out.sw = await page.evaluate(async () => {
    const reg = await Promise.race([navigator.serviceWorker.ready, new Promise((r) => setTimeout(() => r(null), 10000))]);
    return reg ? reg.active.state : "never became active";
  });
  await page.reload({ waitUntil: "networkidle0" });
  await page.goto(base + "/privacy", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 500));
  out.cachedPages = await page.evaluate(async () => {
    const names = await caches.keys();
    const all = [];
    for (const n of names.filter((n) => n.startsWith("pages"))) all.push(...(await (await caches.open(n)).keys()).map((r) => new URL(r.url).pathname));
    return all;
  });

  server.closeAllConnections();
  await new Promise((r) => server.close(r)); // now really offline
  for (const p of ["/privacy", "/", "/bourse"]) {
    try {
      await page.goto(base + p, { waitUntil: "domcontentloaded", timeout: 20000 });
      out[`offline ${p}`] = await page.title();
    } catch (e) {
      out[`offline ${p}`] = "ERROR " + e.message.split("\n")[0];
    }
  }
  console.log(JSON.stringify(out, null, 2));
  await browser.disconnect();
  await chrome.kill();

  const offlineTitle = "ما فماش كونيكسيون";
  const problems = [];
  if (out.sw !== "activated") problems.push("service worker never became active");
  if (!out.cachedPages.includes("/offline")) problems.push("offline page was not saved at install");
  for (const p of ["/privacy", "/"]) if (!out[`offline ${p}`] || out[`offline ${p}`].startsWith("ERROR") || out[`offline ${p}`].includes(offlineTitle)) problems.push(`visited page ${p} did not open offline`);
  if (!String(out["offline /bourse"]).includes(offlineTitle)) problems.push("unvisited page did not show the offline page");
  console.log(problems.length ? "FAIL:\n- " + problems.join("\n- ") : "OK: offline support works");
  process.exit(problems.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
