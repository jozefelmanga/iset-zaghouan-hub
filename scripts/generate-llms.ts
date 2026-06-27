import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { generateLlmsFullTxt, generateLlmsTxt } from "../src/lib/llms-content";

const root = join(import.meta.dirname, "..");
const publicDir = join(root, "public");

writeFileSync(join(publicDir, "llms.txt"), generateLlmsTxt(), "utf-8");
writeFileSync(join(publicDir, "llms-full.txt"), generateLlmsFullTxt(), "utf-8");

console.log("Generated public/llms.txt and public/llms-full.txt");
