import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { IeeePageContent } from "@/components/clubs/IeeePageContent";
import { getClubGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/ieee");

export default function IeeePage() {
  const images = getClubGalleryImages("ieee", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/ieee" />
      <IeeePageContent galleryImages={images} />
    </>
  );
}
