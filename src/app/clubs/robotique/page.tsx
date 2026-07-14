import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RobotiquePageContent } from "@/components/clubs/RobotiquePageContent";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/robotique");

export default function RobotiquePage() {
  const images = getGalleryImages("clubs/robotique", ["banner", "logo"]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/robotique" />
      <RobotiquePageContent galleryImages={images} />
    </>
  );
}
