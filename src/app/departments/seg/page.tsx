import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { SEGPageContent } from "@/components/departments/SEGPageContent";

export default function SEGPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="coins"
        label="الأقسام العلمية"
        title="Sciences Économiques et de Gestion (SEG)"
        subtitle="قسم العلوم الاقتصادية والتصرف - إدارة الأعمال، المحاسبة والمالية"
        category="academic"
      />
      <SEGPageContent />
    </PageWrapper>
  );
}
