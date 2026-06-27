import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STAGE_DIR = path.join(__dirname, "..", "public", "images", "stage");

const files = await fs.readdir(STAGE_DIR);

for (const file of files.filter((f) => f.endsWith(".webp"))) {
  const png = file.replace(/\.webp$/i, ".png");
  await sharp(path.join(STAGE_DIR, file)).png().toFile(path.join(STAGE_DIR, png));
  console.log(`Generated stage logo: ${png}`);
}
