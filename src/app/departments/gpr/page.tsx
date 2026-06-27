import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { GPRPageContent } from "@/components/departments/GPRPageContent";

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
