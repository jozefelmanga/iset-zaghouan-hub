/**
 * Small gallery thumbnails: public/images/<path> -> public/thumbs/<path>.webp
 * (480px wide). Gallery grids show the thumbnail; the full photo loads only
 * when it's opened in the lightbox. Runs before `dev` and `build`; only
 * missing or outdated thumbnails are (re)generated. public/thumbs is git-ignored.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);

const SRC = path.resolve("public/images");
const OUT = path.resolve("public/thumbs");
const SKIP_DIRS = new Set(["logo", "zan9a", "icons", "stage"]);
const WIDTH = 480;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(p, out);
    } else if (/\.(webp|jpe?g|png)$/i.test(entry.name)) {
      out.push(p);
    }
  }
  return out;
}

let made = 0;
for (const file of walk(SRC)) {
  const rel = path.relative(SRC, file).replace(/\.(webp|jpe?g|png)$/i, ".webp");
  const target = path.join(OUT, rel);
  if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= fs.statSync(file).mtimeMs) continue;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  await sharp(fs.readFileSync(file)).rotate().resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 62 }).toFile(target);
  made++;
}
console.log(`thumbs: ${made} generated`);
