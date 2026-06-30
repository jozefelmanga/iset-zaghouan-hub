import { pageMetadata } from "@/constants/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RobotiquePageContent } from "@/components/clubs/RobotiquePageContent";

export const metadata = pageMetadata("/clubs/robotique");

export default function RobotiquePage() {
  return (
    <>
      <BreadcrumbJsonLd path="/clubs/robotique" />
      <RobotiquePageContent />
    </>
  );
}
