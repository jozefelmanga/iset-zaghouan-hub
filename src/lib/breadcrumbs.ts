import { PAGE_SEO, type PagePath } from "@/constants/seo";

export interface BreadcrumbItem {
  name: string;
  path: PagePath;
}

/** Build breadcrumb trail from pathname using PAGE_SEO titles. */
export function getBreadcrumbs(path: PagePath): BreadcrumbItem[] {
  if (path === "/") {
    return [{ name: PAGE_SEO["/"].title, path: "/" }];
  }

  const segments = path.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: PAGE_SEO["/"].title, path: "/" }];

  for (let i = 0; i < segments.length; i++) {
    const partial = `/${segments.slice(0, i + 1).join("/")}` as PagePath;
    if (PAGE_SEO[partial]) {
      crumbs.push({ name: PAGE_SEO[partial].title, path: partial });
    }
  }

  return crumbs;
}
