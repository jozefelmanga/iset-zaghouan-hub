import type { MetadataRoute } from "next";
import { SITEMAP_PATHS } from "@/constants/seo";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// No lastmod: a build-time date on every URL tells Google everything changed on
// each deploy, and it then ignores lastmod for the whole site.
export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
