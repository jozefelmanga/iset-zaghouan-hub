import Link from "next/link";
import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";
import { FaqJsonLd } from "@/components/faq/FaqJsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { inscriptionFaqItems } from "@/data/faq";
import { scholarshipDeadlineDays } from "@/data/scholarships";
import { ArrowLeft, Wallet } from "@/lib/icons";
import { lastUpdated } from "@/data/last-updated";

const InscriptionContent = dynamic(
  () =>
    import("@/components/inscription/InscriptionContent").then((mod) => ({
      default: mod.InscriptionContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={480} /> }
);

export const metadata = pageMetadata("/inscription");

export default function InscriptionPage() {
  return (
    <PageWrapper seoPath="/inscription">
      <FaqJsonLd items={inscriptionFaqItems} path="/inscription" name="أسئلة على الترسيم الجامعي" />
      <StaticPageHeader
        icon="file-text"
        label="الأكاديمي"
        title="الترسيم الجامعي"
        subtitle="خطوة بخطوة باش تسجل في ISET Zaghouan"
        category="academic"
        lastUpdated={lastUpdated["/inscription"]}
      />

      {/* The step new students miss most: the bourse file deadline counts from enrollment. */}
      <Link
        href="/bourse"
        className="mb-8 flex items-center gap-3 rounded-2xl border border-[rgba(246,180,27,0.35)] bg-[rgba(246,180,27,0.08)] p-4 no-underline transition-colors hover:bg-[rgba(246,180,27,0.12)]"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(246,180,27,0.18)] text-[var(--color-amber-text)]">
          <Wallet size={18} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-bold text-[var(--color-text)]">
            عندك بورص؟ عندك {scholarshipDeadlineDays} يوم برك بعد الترسيم
          </span>
          <span className="mt-0.5 block text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
            ملف البورص يتبعث للديوان في أجل {scholarshipDeadlineDays} يوم من تاريخ الترسيم. شوف الأوراق اللازمة.
          </span>
        </span>
        <ArrowLeft size={16} strokeWidth={2.5} className="shrink-0 text-[var(--color-amber-text)]" aria-hidden="true" />
      </Link>

      <InscriptionContent />

      <section className="mt-4">
        <h2 className="mb-4 text-[18px] font-bold text-[var(--color-text)]">أسئلة متكررة على الترسيم</h2>
        <Accordion items={inscriptionFaqItems} />
      </section>
    </PageWrapper>
  );
}
