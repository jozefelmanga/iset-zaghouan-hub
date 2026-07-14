import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SosAmbassadeursPageContent } from "@/components/clubs/SosAmbassadeursPageContent";
import { getClubGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/sos-ambassadeurs");

export default function SosAmbassadeursPage() {
  const images = getClubGalleryImages("sos-ambassadeurs", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/sos-ambassadeurs" />
      <SosAmbassadeursPageContent galleryImages={images} />
    </>
  );
}
