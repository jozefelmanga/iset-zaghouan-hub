import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { RobotiquePageContent } from "@/components/clubs/RobotiquePageContent";

export const metadata = pageMetadata("/clubs/robotique");

export default function RobotiquePage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="Club Robotique ISET Zaghouan"
        subtitle="Innovate. Create. Inspire. 🤖"
        category="life"
      />
      <RobotiquePageContent />
    </PageWrapper>
  );
}
