import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProceGeniusPageContent } from "@/components/clubs/ProceGeniusPageContent";

export const metadata = pageMetadata("/clubs/procegenius");

export default function ProceGeniusPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/clubs/procegenius" />
      <ProceGeniusPageContent />
    </>
  );
}
