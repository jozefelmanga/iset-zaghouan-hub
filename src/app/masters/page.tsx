import { pageMetadata } from "@/constants/seo";
import { BookOpen, ExternalLink } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { CollapsibleAlert } from "@/components/ui/CollapsibleAlert";
import { PageWrapper } from "@/components/ui/layout";
import { MastersProgramGrid } from "@/components/masters/MastersProgramGrid";
import { afterGraduationGuide } from "@/data/resources";

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

      <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
        <CollapsibleAlert title="تدوّر على ماسترات برّا ISET Zaghouan؟" variant="info">
          <span>
            إذا كنت تبحث على برامج ماستر خارج المعهد، تنجم تستشرف{" "}
            <a
              href={afterGraduationGuide.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-secondary)", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
            >
              {afterGraduationGuide.title}
              <ExternalLink size={12} />
            </a>{" "}
            باش تلقى معلومات وإرشادات أكثر حول البرامج والآفاق.
          </span>
        </CollapsibleAlert>

        <CollapsibleAlert title="معلومات حول الترشح" variant="info">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <BookOpen size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
            <span style={{ fontSize: "13px", lineHeight: 1.5 }}>
              مناظرات الماستر تتحل في بداية الصيف (غالباً جويلية). المترشحين يترتّبو حسب مجموع النقاط (Score) اللي يعتمد على معدلات سنوات الإجازة، عدد سنوات الرسوب، ومعدل الباك.
            </span>
          </div>
        </CollapsibleAlert>
      </div>

      <MastersProgramGrid />
    </PageWrapper>
  );
}
