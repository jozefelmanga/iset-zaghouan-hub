interface JsonLdProps {
  data: Record<string, unknown>;
}

/** Renders schema.org JSON-LD in a script tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
