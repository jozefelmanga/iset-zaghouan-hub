import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SosAmbassadeursPageContent } from "@/components/clubs/SosAmbassadeursPageContent";

export const metadata = pageMetadata("/clubs/sos-ambassadeurs");

export default function SosAmbassadeursPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/clubs/sos-ambassadeurs" />
      <SosAmbassadeursPageContent />
    </>
  );
}
