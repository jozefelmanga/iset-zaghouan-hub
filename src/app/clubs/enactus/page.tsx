import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EnactusPageContent } from "@/components/clubs/EnactusPageContent";
import { getClubGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/enactus");

export default function EnactusPage() {
  const images = getClubGalleryImages("enactus", ["banner"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/enactus" />
      <EnactusPageContent galleryImages={images} />
    </>
  );
}
