import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SecurinetsPageContent } from "@/components/clubs/SecurinetsPageContent";

export const metadata = pageMetadata("/clubs/securinets");

export default function SecurinetsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/clubs/securinets" />
      <SecurinetsPageContent />
    </>
  );
}
