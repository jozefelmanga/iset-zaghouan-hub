import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { ClubDirectoryCard } from "@/components/clubs/ClubCards";
import { ClubsInfoPanels } from "@/components/clubs/ClubsInfoPanels";
import { clubDirectory } from "@/data/clubs";

export const metadata = pageMetadata("/clubs");

export default function ClubsPage() {
  return (
    <PageWrapper className="flex flex-col gap-6 md:gap-8">
      <StaticPageHeader
        icon="users"
        label="الحياة الجامعية"
        title="النوادي و الجمعيات"
        subtitle="الحياة الجامعية مهاش قراية بركا — اختار نادي و اكتشف روحك"
        category="life"
        className="mb-3 md:mb-4"
      />

      <ClubsInfoPanels />

      <section className="flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-[17px] font-bold text-text md:text-[18px]">
            النوادي النشطة بالمعهد
          </h2>
          <span className="text-[12px] font-semibold text-text-muted">
            {clubDirectory.length} نوادي
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {clubDirectory.map((club, idx) => (
            <ClubDirectoryCard key={club.id} club={club} index={idx} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
