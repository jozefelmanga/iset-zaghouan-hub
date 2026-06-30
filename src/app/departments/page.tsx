import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Alert } from "@/components/ui/Alert";
import { PageWrapper } from "@/components/ui/layout";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { departmentList } from "@/data/departments";

export const metadata = pageMetadata("/departments");

export default function DepartmentsPage() {
  return (
    <PageWrapper seoPath="/departments" narrow>
      <StaticPageHeader
        icon="graduation-cap"
        label="الأكاديمي"
        title="الأقسام العلمية"
        subtitle="اكتشف الأقسام والشعب المتوفرة بالمعهد العالي للعلوم التطبيقية والتكنولوجيا بزغوان"
        category="academic"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "36px" }}>
        {departmentList.map((dept, idx) => (
          <DepartmentCard key={dept.code} dept={dept} index={idx} />
        ))}
      </div>

      <Alert title="توجيه جامعي" variant="info">
        يقع اختيار الشعب والتخصصات في نهاية السنة الأولى جذع مشترك بالنسبة للأقسام العلمية (باستثناء المحاسبة والمالية التي تبدأ مباشرة من السنة الأولى).
      </Alert>
    </PageWrapper>
  );
}
