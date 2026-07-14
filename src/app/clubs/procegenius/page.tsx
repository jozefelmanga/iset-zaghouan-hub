import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProceGeniusPageContent } from "@/components/clubs/ProceGeniusPageContent";
import { getClubGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/procegenius");

export default function ProceGeniusPage() {
  const images = getClubGalleryImages("procegenius", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/procegenius" />
      <ProceGeniusPageContent galleryImages={images} />
    </>
  );
}
