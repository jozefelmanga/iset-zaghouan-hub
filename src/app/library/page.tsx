import { pageMetadata } from "@/constants/seo";
import { DoorOpen } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { Alert } from "@/components/ui/shared";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { LibraryShowcaseImage } from "@/components/library/LibraryShowcaseImage";
import { LibraryFeaturesGrid } from "@/components/library/LibraryFeaturesGrid";
import { libraryInfo } from "@/data/content";

export const metadata = pageMetadata("/library");

export default function LibraryPage() {
  return (
    <PageWrapper seoPath="/library">
      <StaticPageHeader
        icon="book-open"
        label="الأكاديمي"
        title="المكتبة الجامعية"
        subtitle="مراجع، اكزامانات، وكل ما يعاونك على المراجعة"
        category="academic"
      />

      <MotionReveal delay={0.05}>
        <LibraryShowcaseImage src={libraryInfo.image} alt={libraryInfo.imageAlt} />
      </MotionReveal>

      <MotionReveal delay={0.1} className="mb-7">
        <div
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(18,184,200,0.06))",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "20px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(34,197,94,0.12)",
              color: "#22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <DoorOpen size={26} strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", color: "#16A34A", marginBottom: "4px" }}>
              الدخول حر 🎉
            </p>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              {libraryInfo.access}
            </p>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.15} className="mb-7">
        <Alert title="ملاحظة هامة جداً ⚠️" variant="warning">
          باش تاخو أي كتاب أو وثيقة (حتى اكزامان)، حتى لو باش تقراها في وسط المكتبة، لازم تخلّي كارطة الإتديون (Carte Étudiant) ولا بطاقة التعريف (CIN) عند المسؤول.
        </Alert>
      </MotionReveal>

      <LibraryFeaturesGrid features={libraryInfo.features} />
    </PageWrapper>
  );
}
