/**
 * Checks homepage initial JS budget after `npm run build`.
 * Parses script tags from dist/index.html, sums gzip sizes, and compares
 * against scripts/bundle-baseline.json (max gzip + 10% growth guard).
 *
 * Override a temporary regression: BUNDLE_BUDGET_OVERRIDE=1 npm run check-bundle
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const BASELINE_PATH = join(ROOT, "scripts", "bundle-baseline.json");
const GROWTH_FACTOR = 1.1;

interface Baseline {
  homepageInitialJsGzipBytes: number;
  maxHomepageInitialJsGzipBytes: number;
  measuredAt: string;
  note: string;
}

function loadBaseline(): Baseline {
  if (!existsSync(BASELINE_PATH)) {
    throw new Error(`Missing baseline: ${BASELINE_PATH}`);
  }
  return JSON.parse(readFileSync(BASELINE_PATH, "utf-8")) as Baseline;
}

function homepageScriptSrcs(): string[] {
  const htmlPath = join(DIST, "index.html");
  if (!existsSync(htmlPath)) {
    throw new Error("dist/index.html not found — run npm run build first");
  }
  const html = readFileSync(htmlPath, "utf-8");
  const pattern = /<script[^>]+src="([^"]+)"/g;
  const srcs: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    srcs.push(match[1]);
  }
  return [...new Set(srcs)];
}

function gzipSize(filePath: string): number {
  return gzipSync(readFileSync(filePath)).length;
}

function main(): void {
  const baseline = loadBaseline();
  const srcs = homepageScriptSrcs();
  let totalGzip = 0;

  for (const src of srcs) {
    const relative = src.startsWith("/") ? src.slice(1) : src;
    const filePath = join(DIST, relative);
    if (!existsSync(filePath)) {
      throw new Error(`Script referenced in index.html not found: ${relative}`);
    }
    totalGzip += gzipSize(filePath);
  }

  const ceiling = Math.ceil(baseline.homepageInitialJsGzipBytes * GROWTH_FACTOR);
  const hardMax = baseline.maxHomepageInitialJsGzipBytes;
  const effectiveMax = Math.min(hardMax, ceiling);
  const kb = (bytes: number) => (bytes / 1024).toFixed(1);

  console.log(`Homepage initial JS: ${srcs.length} scripts, ${kb(totalGzip)} KB gzip`);
  console.log(`Baseline: ${kb(baseline.homepageInitialJsGzipBytes)} KB | ceiling (+10%): ${kb(ceiling)} KB | hard max: ${kb(hardMax)} KB`);

  if (totalGzip > effectiveMax) {
    if (process.env.BUNDLE_BUDGET_OVERRIDE === "1") {
      console.warn("⚠ Budget exceeded but BUNDLE_BUDGET_OVERRIDE=1 — continuing");
      return;
    }
    console.error(
      `Bundle budget exceeded: ${kb(totalGzip)} KB gzip > ${kb(effectiveMax)} KB allowed.\n` +
        "Run npm run analyze to inspect chunks. Set BUNDLE_BUDGET_OVERRIDE=1 to bypass in emergencies."
    );
    process.exit(1);
  }

  console.log("✓ Bundle budget OK");
}

main();
