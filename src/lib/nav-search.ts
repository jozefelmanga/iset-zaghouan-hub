import type { NavLink } from "@/constants/navigation";
import {
  categorySearchKeywords,
  navSearchKeywords,
} from "@/constants/nav-search-keywords";

/** Case- and accent-insensitive normalization for Latin-script search. */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function collectSearchableTerms(link: NavLink): string[] {
  const terms = [link.label, link.description, link.href].filter(Boolean) as string[];

  if (link.category) {
    terms.push(link.category, ...(categorySearchKeywords[link.category] ?? []));
  }

  terms.push(...(navSearchKeywords[link.href] ?? []));

  return terms;
}

export function matchesNavLink(link: NavLink, query: string): boolean {
  const trimmed = query.trim();
  if (!trimmed) return false;

  const normalizedQuery = normalizeForSearch(trimmed);
  const terms = collectSearchableTerms(link);

  return terms.some((term) => {
    if (term.includes(trimmed)) return true;
    return normalizeForSearch(term).includes(normalizedQuery);
  });
}
