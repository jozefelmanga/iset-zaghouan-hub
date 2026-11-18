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

/** Lowercase, strip accents and punctuation so spelling variants compare equal. */
function key(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Spelling fixes for the city column (keyed by key()); anything not listed is title-cased.
const CITY_FIXES = {
  monsatir: "Monastir",
  msaken: "M'saken",
  "m saken": "M'saken",
  zaghouane: "Zaghouan",
  koln: "Köln",
  "cairo egypt": "Cairo, Egypt",
  "orsay france": "Orsay, France",
  "valenciennes france": "Valenciennes, France",
  "les berges du lac tunis": "Les Berges du Lac, Tunis",
  "erryadh sousse": "Erryadh, Sousse",
};

// Region (governorate, or country abroad) for each city, keyed by key().
const REGION_BY_CITY = {
  tunis: "Tunis", bardo: "Tunis", "la marsa": "Tunis", "lac 2": "Tunis", "les berges du lac tunis": "Tunis",
  ariana: "Ariana", ghazala: "Ariana",
  "ben arous": "Ben Arous", megrine: "Ben Arous",
  sousse: "Sousse", "erryadh sousse": "Sousse", "hammam sousse": "Sousse", msaken: "Sousse", "m saken": "Sousse",
  messadine: "Sousse", khzema: "Sousse",
  monastir: "Monastir", monsatir: "Monastir", "ksar hellal": "Monastir", jemmal: "Monastir", bekalta: "Monastir",
  nabeul: "Nabeul", hammamet: "Nabeul",
  sfax: "Sfax", mahdia: "Mahdia", beja: "Béja", gabes: "Gabès",
  zaghouan: "Zaghouan", zaghouane: "Zaghouan",
  djerba: "Médenine", zarzis: "Médenine",
  france: "France", paris: "France", "orsay france": "France", "valenciennes france": "France",
  koln: "Allemagne", london: "Royaume-Uni", canada: "Canada", "cairo egypt": "Égypte",
  maroc: "Maroc", turkey: "Turquie",
};

// For companies with no city: places that, when found in the address, give the region.
const REGION_FROM_ADDRESS = [
  ["sousse", "Sousse"], ["kantaoui", "Sousse"], ["monastir", "Monastir"], ["sfax", "Sfax"],
  ["la marsa", "Tunis"], ["sidi daoud", "Tunis"], ["centre urbain nord", "Tunis"], ["center urbain nord", "Tunis"],
  ["aouina", "Tunis"], ["carthage", "Tunis"], ["kheiredine", "Tunis"], ["khereddine", "Tunis"], ["mourouj", "Ben Arous"],
  ["montreal", "Canada"], ["saint etienne", "France"],
];

function normalizeCity(raw) {
  const value = clean(raw);
  if (!value) return undefined;
  const k = key(value);
  if (CITY_FIXES[k]) return CITY_FIXES[k];
  return value.replace(/(^|[\s'-])(\p{L})/gu, (_, sep, ch) => sep + ch.toUpperCase());
}

function regionFor(rawCity, address) {
  const city = clean(rawCity);
  if (city) {
    const region = REGION_BY_CITY[key(city)];
    if (!region) throw new Error(`No region for city "${city}" — add it to REGION_BY_CITY`);
    return region;
  }
  const addr = address ? ` ${key(address)} ` : "";
  return REGION_FROM_ADDRESS.find(([place]) => addr.includes(` ${place} `))?.[1];
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
      city: normalizeCity(row.soc_vil),
      region: regionFor(row.soc_vil, row.soc_adr),
      phone: clean(row.soc_tele),
      ...(email ? { email } : {}),
      ...(website ? { website } : {}),
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));

fs.writeFileSync(OUTPUT, JSON.stringify(companies, null, 0));
console.log(`Generated ${companies.length} stage companies → src/data/stage-companies.json`);
