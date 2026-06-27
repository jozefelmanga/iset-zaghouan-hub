import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { OddPageContent } from "@/components/clubs/OddPageContent";

export default function ODDPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="ODD ISET Zaghouan"
        subtitle="Shaping minds, building a sustainable world. 🌱💡"
        category="life"
      />
      <OddPageContent />
    </PageWrapper>
  );
}
