import { pageMetadata } from "@/constants/seo";
import Link from "next/link";
import { ArrowRight } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { InternshipCompanySearch } from "@/components/stages/InternshipCompanySearch";
import { stageCompanyCount } from "@/data/stage-companies";

export const metadata = pageMetadata("/stages/companies");

export default function StageCompaniesPage() {
  return (
    <PageWrapper>
      <Link
        href="/stages"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--color-secondary)",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        <ArrowRight size={16} strokeWidth={2.5} />
        رجوع للستاجات
      </Link>

      <StaticPageHeader
        icon="building"
        label="دليل الشركات"
        title="دوّر على شركة للستاج"
        subtitle={`${stageCompanyCount} شركة من مصالح التربصات — دوّر بالاسم، المدينة، أو العنوان`}
        category="career"
      />

      <MotionReveal delay={0.1}>
        <InternshipCompanySearch />
      </MotionReveal>
    </PageWrapper>
  );
}
