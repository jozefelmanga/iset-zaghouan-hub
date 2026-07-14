import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EnactusPageContent } from "@/components/clubs/EnactusPageContent";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/enactus");

export default function EnactusPage() {
  const images = getGalleryImages("clubs/enactus", ["banner"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/enactus" />
      <EnactusPageContent galleryImages={images} />
    </>
  );
}
