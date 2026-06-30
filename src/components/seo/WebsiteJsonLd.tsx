import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_AR,
  SITE_URL,
} from "@/lib/seo";

/** WebSite + Organization structured data for the homepage. */
export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: SITE_NAME_AR,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "ar-TN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_NAME_AR,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
      },
    ],
  };

  return <JsonLd data={jsonLd} />;
}
