import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PAGE_SEO, SITEMAP_PATHS } from "@/constants/seo";
import { allNavLinks } from "@/constants/navigation";

const APP_DIR = join(process.cwd(), "src", "app");

function collectAppRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      routes.push(...collectAppRoutes(fullPath, [...segments, entry]));
    } else if (entry === "page.tsx") {
      routes.push(segments.length === 0 ? "/" : `/${segments.join("/")}`);
    }
  }
  return routes;
}

describe("SEO configuration", () => {
  it("PAGE_SEO covers every app route", () => {
    const appRoutes = collectAppRoutes(APP_DIR).sort();
    const seoRoutes = Object.keys(PAGE_SEO).sort();
    expect(seoRoutes).toEqual(appRoutes);
  });

  it("SITEMAP_PATHS matches PAGE_SEO keys", () => {
    expect([...SITEMAP_PATHS].sort()).toEqual(Object.keys(PAGE_SEO).sort());
  });

  it("every SEO entry has non-empty title and description", () => {
    for (const [path, seo] of Object.entries(PAGE_SEO)) {
      expect(seo.title.trim(), `${path} title`).not.toBe("");
      expect(seo.description.trim(), `${path} description`).not.toBe("");
    }
  });

  it("all navigable routes have SEO metadata", () => {
    const navHrefs = allNavLinks.map((link) => link.href);
    for (const href of navHrefs) {
      expect(PAGE_SEO[href as keyof typeof PAGE_SEO], `missing SEO for ${href}`).toBeDefined();
    }
  });
});
