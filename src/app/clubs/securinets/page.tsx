import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SecurinetsPageContent } from "@/components/clubs/SecurinetsPageContent";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = pageMetadata("/clubs/securinets");

export default function SecurinetsPage() {
  const images = getGalleryImages("clubs/securinets", [
    "414471318_762084249283425_5669816558873673442_n.webp",
    "307089995_5896662463700630_57012804199137690_n.webp",
  ]);

  return (
    <>
      <BreadcrumbJsonLd path="/clubs/securinets" />
      <SecurinetsPageContent galleryImages={images} />
    </>
  );
}
