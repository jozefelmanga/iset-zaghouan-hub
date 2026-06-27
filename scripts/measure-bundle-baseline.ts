/** One-off helper to print homepage initial JS gzip for updating bundle-baseline.json */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const DIST = join(process.cwd(), "dist");
const html = readFileSync(join(DIST, "index.html"), "utf-8");
const pattern = /<script[^>]+src="([^"]+)"/g;
const srcs = [...new Set([...html.matchAll(pattern)].map((m) => m[1]))];
let total = 0;

for (const src of srcs) {
  const filePath = join(DIST, src.startsWith("/") ? src.slice(1) : src);
  if (!existsSync(filePath)) throw new Error(`Missing ${filePath}`);
  const gz = gzipSync(readFileSync(filePath)).length;
  total += gz;
  console.log(`${src} — ${(gz / 1024).toFixed(1)} KB gzip`);
}

console.log(`\nTotal: ${total} bytes (${(total / 1024).toFixed(1)} KB gzip)`);
