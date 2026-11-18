import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT = path.join(__dirname, "..", "public", "documents", "stages", "sociétés_final.xlsx");
const OUTPUT = path.join(__dirname, "..", "src", "data", "stage-companies.json");

function clean(value) {
  if (value == null) return undefined;
  const text = String(value).trim();
  return text || undefined;
}

function parseContact(web) {
  const value = clean(web);
  if (!value) return {};
  if (value.includes("@") && !value.startsWith("http")) {
    return { email: value };
  }
  const website = value.startsWith("http") ? value : `https://${value}`;
  return { website };
}

const workbook = XLSX.readFile(INPUT);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

const companies = rows
  .map((row) => {
    const name = clean(row.soc_nom);
    if (!name) return null;

    const fromWeb = parseContact(row.soc_web);
    const email = clean(row.soc_email) ?? fromWeb.email;
    const website = fromWeb.website;

    return {
      name,
      address: clean(row.soc_adr),
      city: clean(row.soc_vil),
      phone: clean(row.soc_tele),
      ...(email ? { email } : {}),
      ...(website ? { website } : {}),
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));

fs.writeFileSync(OUTPUT, JSON.stringify(companies, null, 0));
console.log(`Generated ${companies.length} stage companies → src/data/stage-companies.json`);
