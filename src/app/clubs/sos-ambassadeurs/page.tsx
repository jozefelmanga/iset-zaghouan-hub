import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SosAmbassadeursPageContent } from "@/components/clubs/SosAmbassadeursPageContent";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/sos-ambassadeurs");

export default function SosAmbassadeursPage() {
  const images = getGalleryImages("clubs/sos-ambassadeurs", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/sos-ambassadeurs" />
      <SosAmbassadeursPageContent galleryImages={images} />
    </>
  );
}
