import { describe, expect, it } from "vitest";
import { PAGE_SEO } from "@/constants/seo";
import { getBreadcrumbs } from "@/lib/breadcrumbs";

describe("getBreadcrumbs", () => {
  it("returns only home for root path", () => {
    expect(getBreadcrumbs("/")).toEqual([{ name: PAGE_SEO["/"].title, path: "/" }]);
  });

  it("builds trail for single-segment routes", () => {
    expect(getBreadcrumbs("/faq")).toEqual([
      { name: PAGE_SEO["/"].title, path: "/" },
      { name: PAGE_SEO["/faq"].title, path: "/faq" },
    ]);
  });

  it("builds trail for nested routes", () => {
    expect(getBreadcrumbs("/departments/ti")).toEqual([
      { name: PAGE_SEO["/"].title, path: "/" },
      { name: PAGE_SEO["/departments"].title, path: "/departments" },
      { name: PAGE_SEO["/departments/ti"].title, path: "/departments/ti" },
    ]);
  });

  it("covers every non-root PAGE_SEO path", () => {
    for (const path of Object.keys(PAGE_SEO)) {
      if (path === "/") continue;
      const crumbs = getBreadcrumbs(path as keyof typeof PAGE_SEO);
      expect(crumbs[0]?.path).toBe("/");
      expect(crumbs.at(-1)?.path).toBe(path);
      expect(crumbs.length).toBeGreaterThanOrEqual(2);
    }
  });
});
