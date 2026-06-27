import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const GPRPageContent = dynamic(
  () =>
    import("@/components/departments/GPRPageContent").then((mod) => ({
      default: mod.GPRPageContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={400} /> }
);

export const metadata = pageMetadata("/departments/gpr");

export default function GPRPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="flask"
        label="الأقسام العلمية"
        title="Génie des Procédés (GPR)"
        subtitle="قسم هندسة العمليات والبيئة - الكيمياء والبيولوجيا ومراقبة الجودة"
        category="academic"
      />
      <GPRPageContent />
    </PageWrapper>
  );
}
