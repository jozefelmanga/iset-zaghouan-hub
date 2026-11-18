import { JsonLd } from "@/components/seo/JsonLd";
import type { FAQItem } from "@/types";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

interface FaqJsonLdProps {
  items: FAQItem[];
  /** Page path the questions live on (defaults to the FAQ page). */
  path?: string;
  name?: string;
}

/** FAQPage structured data for search engines. */
export function FaqJsonLd({ items, path = "/faq", name = "الأسئلة الشائعة" }: FaqJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${SITE_NAME} — ${name}`,
    url: `${SITE_URL}${path}`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={jsonLd} />;
}
