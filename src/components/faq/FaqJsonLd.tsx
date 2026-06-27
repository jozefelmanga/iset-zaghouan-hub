import type { FAQItem } from "@/types";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

interface FaqJsonLdProps {
  items: FAQItem[];
}

/** FAQPage structured data for search engines. */
export function FaqJsonLd({ items }: FaqJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${SITE_NAME} — الأسئلة الشائعة`,
    url: `${SITE_URL}/faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
