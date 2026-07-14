import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProceGeniusPageContent } from "@/components/clubs/ProceGeniusPageContent";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/procegenius");

export default function ProceGeniusPage() {
  const images = getGalleryImages("clubs/procegenius", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/procegenius" />
      <ProceGeniusPageContent galleryImages={images} />
    </>
  );
}
