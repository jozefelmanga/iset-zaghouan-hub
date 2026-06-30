import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EnactusPageContent } from "@/components/clubs/EnactusPageContent";

export const metadata = pageMetadata("/clubs/enactus");

export default function EnactusPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/clubs/enactus" />
      <EnactusPageContent />
    </>
  );
}
