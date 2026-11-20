/**
 * Colour-contrast check (axe-core, WCAG AA) on every exported route.
 *
 *   npm run build            # needed first: scans dist/
 *   npm run check-contrast   # light + dark, summary per route
 *   npm run check-contrast -- light --detail   # one theme, show each failing element
 *
 * Phone viewport (390px), reduced motion on so reveal animations are already
 * finished. Serves dist/ itself on 127.0.0.1:4173. Exits 1 if anything fails.
 *
 * axe-core, puppeteer-core and chrome-launcher come in through @lhci/cli
 * (devDependency); Chrome must be installed.
 */
const path = require("path");
const fs = require("fs");
const http = require("http");

const repo = path.resolve(__dirname, "..");
const dist = path.join(repo, "dist");
const args = process.argv.slice(2);
const detail = args.includes("--detail");
const schemes = args.includes("light") ? ["light"] : args.includes("dark") ? ["dark"] : ["light", "dark"];

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html not found: run `npm run build` first.");
  process.exit(1);
}

let puppeteer, chromeLauncher, axeSrc;
try {
  puppeteer = require("puppeteer-core");
  chromeLauncher = require("chrome-launcher");
  axeSrc = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
} catch {
  console.error("Missing axe-core / puppeteer-core / chrome-launcher (normally installed by @lhci/cli). Run `npm install`.");
  process.exit(1);
}

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (!["_next", "dev"].includes(f.name)) walk(p, out);
    } else if (f.name.endsWith(".html") && !/404|not-found|offline/.test(f.name)) {
      out.push(p);
    }
  }
  return out;
}
const routes = walk(dist)
  .map((p) => "/" + path.relative(dist, p).replace(/\\/g, "/").replace(/(index)?\.html$/, ""))
  .sort();

const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".json": "application/json" };
const isFile = (x) => { try { return fs.statSync(x).isFile(); } catch { return false; } };
const server = http.createServer((req, res) => {
  const base = path.join(dist, decodeURIComponent(req.url.split("?")[0]));
  const file = [base, path.join(base, "index.html"), base.replace(/[\\/]$/, "") + ".html"].find(isFile) || path.join(dist, "404.html");
  res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
  res.end(fs.readFileSync(file));
});

(async () => {
  await new Promise((r) => server.listen(4173, "127.0.0.1", r));
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new", ...(process.env.CI ? ["--no-sandbox"] : [])] });
  const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}` });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  // Keep the service worker out of the way.
  await page.evaluateOnNewDocument(() => { try { navigator.serviceWorker.register = () => new Promise(() => {}); } catch {} });

  let grandTotal = 0;
  for (const scheme of schemes) {
    await page.emulateMediaFeatures([
      { name: "prefers-color-scheme", value: scheme },
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    let total = 0;
    console.log(`\n== ${scheme} ==`);
    for (const route of routes) {
      await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: "networkidle0" });
      await new Promise((r) => setTimeout(r, 800));
      await page.evaluate(axeSrc);
      const nodes = await page.evaluate(async () => {
        const out = await window.axe.run(document, { runOnly: ["color-contrast"] });
        return out.violations.flatMap((v) => v.nodes.map((n) => {
          const d = n.any[0] && n.any[0].data;
          return {
            msg: d ? `${d.fgColor} on ${d.bgColor} = ${d.contrastRatio}:1 (${d.fontSize})` : n.failureSummary,
            html: n.html.slice(0, 160),
          };
        }));
      });
      total += nodes.length;
      if (nodes.length || detail) console.log(`${route.padEnd(28)} ${nodes.length}`);
      if (detail) for (const n of nodes) console.log(`   ${n.msg}\n     ${n.html}`);
    }
    console.log(`TOTAL ${scheme}: ${total} failing element(s) across ${routes.length} routes`);
    grandTotal += total;
  }

  await browser.disconnect();
  await chrome.kill();
  server.close();
  process.exit(grandTotal ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
