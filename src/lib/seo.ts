import type { Metadata } from "next";

/** Public site URL — set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://guideisetzg.tn";

export const SITE_NAME = "ISET Zaghouan Hub";
export const SITE_NAME_AR = "دليل الطالب — ISET Zaghouan";
export const DEFAULT_DESCRIPTION =
  "دليل الطالب في ISET Zaghouan - الترسيم، المبيت، النقل، البورص، الستاجات، وكل ما يخص الحياة الجامعية";

export const DEFAULT_KEYWORDS = [
  "ISET Zaghouan",
  "ISETZG",
  "دليل الطالب",
  "ترسيم",
  "مبيت",
  "بورص",
  "نقل",
  "زغوان",
];

/** Default share image (campus banner deployed with static assets). */
export const OG_IMAGE_PATH = "/images/OG-image.webp";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_NAME_AR}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ar_TN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_NAME_AR}`,
    description: "دليلك الشامل للحياة الجامعية في ISET Zaghouan",
    images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: SITE_NAME_AR }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_NAME_AR}`,
    description: "دليلك الشامل للحياة الجامعية في ISET Zaghouan",
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export interface PageSeoInput {
  title: string;
  description: string;
  path: string;
}

/** Build per-route metadata with canonical URL and social tags. */
export function createPageMetadata({ title, description, path }: PageSeoInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "ar_TN",
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
