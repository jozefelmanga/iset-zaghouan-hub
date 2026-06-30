import { JsonLd } from "@/components/seo/JsonLd";
import type { PagePath } from "@/constants/seo";
import { getBreadcrumbs } from "@/lib/breadcrumbs";
import { SITE_URL } from "@/lib/seo";

interface BreadcrumbJsonLdProps {
  path: PagePath;
}

/** BreadcrumbList structured data for nested routes. */
export function BreadcrumbJsonLd({ path }: BreadcrumbJsonLdProps) {
  if (path === "/") return null;

  const crumbs = getBreadcrumbs(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? SITE_URL : `${SITE_URL}${crumb.path}`,
    })),
  };

  return <JsonLd data={jsonLd} />;
}
