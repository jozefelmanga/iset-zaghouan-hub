import { describe, expect, it } from "vitest";
import { allNavLinks } from "@/constants/navigation";
import { matchesNavLink, normalizeForSearch } from "./nav-search";

const results = (query: string) => allNavLinks.filter((l) => matchesNavLink(l, query)).map((l) => l.href);

describe("normalizeForSearch", () => {
  it("folds Arabic spelling variants and Latin accents", () => {
    expect(normalizeForSearch("منحة")).toBe(normalizeForSearch("منحه"));
    expect(normalizeForSearch("أوراق")).toBe(normalizeForSearch("اوراق"));
    expect(normalizeForSearch("Bibliothèque")).toBe("bibliotheque");
  });
});

describe("search finds what students actually type", () => {
  // Queries that returned nothing in the Nov 2026 audit.
  const cases: [string, string][] = [
    ["كار", "/transport"],
    ["سكن", "/housing"],
    ["مطعم", "/resto"],
    ["تربص", "/stages"],
    ["بورصة", "/bourse"],
    ["منحه", "/bourse"],
    ["اوراق المبيت", "/inscription/foyer"],
    ["مستر", "/masters"],
    ["توجيه", "/departments"],
    ["tawjih", "/departments"],
    ["sakan", "/housing"],
    ["tasjil", "/inscription"],
    ["horaire", "/transport"],
    ["timetable", "/transport"],
    ["inscriptin", "/inscription"],
    ["e-dinar", "/inscription"],
    ["edinar", "/inscription"],
    ["contact", "/faq"],
    ["telephone", "/faq"],
    ["internat", "/housing"],
    ["dortoir", "/housing"],
    ["نادي", "/clubs"],
  ];

  for (const [query, href] of cases) {
    it(`"${query}" finds ${href}`, () => {
      expect(results(query)).toContain(href);
    });
  }

  it("short queries don't match everything", () => {
    expect(results("a").length).toBeLessThan(allNavLinks.length);
  });
});
