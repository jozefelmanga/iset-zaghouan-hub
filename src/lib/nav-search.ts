import type { NavLink } from "@/constants/navigation";
import {
  categorySearchKeywords,
  everydayWordsByHref,
  navSearchKeywords,
} from "@/constants/nav-search-keywords";

/**
 * Normalisation for search, so spelling variants match:
 *  - Latin: lower case, accents removed (é -> e)
 *  - Arabic: diacritics and tatweel removed, أ/إ/آ/ٱ -> ا, ة -> ه, ى -> ي, ؤ -> و, ئ -> ي
 */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/ـ/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

function collectSearchableTerms(link: NavLink): string[] {
  const terms = [link.label, link.description, link.href].filter(Boolean) as string[];

  if (link.category) {
    terms.push(link.category, ...(categorySearchKeywords[link.category] ?? []));
  }

  terms.push(...(navSearchKeywords[link.href] ?? []), ...(everydayWordsByHref[link.href] ?? []));

  return terms;
}

/** True if `a` and `b` differ by at most one letter (insert, delete or swap). For typos like "inscriptin". */
function withinOneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

export function matchesNavLink(link: NavLink, query: string): boolean {
  const q = normalizeForSearch(query);
  if (!q) return false;
  // One letter would match nearly everything: only match page names starting with it.
  if (q.length === 1) return normalizeForSearch(link.label).startsWith(q);

  return collectSearchableTerms(link).some((raw) => {
    const term = normalizeForSearch(raw);
    if (term.includes(q)) return true;
    // A longer query that contains a whole keyword: "بورصه" finds "بورص", "اوراق المبيت 2026" finds "اوراق المبيت".
    if (term.length >= 3 && q.includes(term)) return true;
    // One-letter typos in longer words.
    if (q.length >= 5) return term.split(" ").some((word) => word.length >= 5 && withinOneEdit(word, q));
    return false;
  });
}
