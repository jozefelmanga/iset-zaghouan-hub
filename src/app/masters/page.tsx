import { pageMetadata } from "@/constants/seo";
import { BookOpen } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Alert } from "@/components/ui/Alert";
import { PageWrapper } from "@/components/ui/layout";
import { MastersProgramGrid } from "@/components/masters/MastersProgramGrid";

export const metadata = pageMetadata("/masters");

export default function MastersPage() {
  return (
    <PageWrapper className="max-w-[1000px]">
      <StaticPageHeader
        icon="award"
        label="الأكاديمي"
        title="برامج الماستر"
        subtitle="التخصصات المتاحة بعد الإجازة في ISET Zaghouan"
        category="academic"
      />

      <MastersProgramGrid />

      <Alert title="معلومات حول الترشح" variant="info">
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <BookOpen size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
          <span style={{ fontSize: "13px", lineHeight: 1.5 }}>
            مناظرات الماستر تتحل في بداية الصيف (غالباً جويلية). المترشحين يترتّبو حسب مجموع النقاط (Score) اللي يعتمد على معدلات سنوات الإجازة، عدد سنوات الرسوب، ومعدل الباك.
          </span>
        </div>
      </Alert>
    </PageWrapper>
  );
}
