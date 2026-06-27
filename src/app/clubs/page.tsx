import { pageMetadata } from "@/constants/seo";
import { Heart, Star, CheckCircle2 } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ClubBenefitCard, ClubDirectoryCard } from "@/components/clubs/ClubCards";
import { clubMeta, clubBenefitCards, clubDirectory } from "@/data/clubs";

export const metadata = pageMetadata("/clubs");

export default function ClubsPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="الحياة الجامعية"
        title="النوادي و الجمعيات"
        subtitle="الحياة الجامعية مهاش قراية بركا — اكتشف روحك و طور مهاراتك"
        category="life"
      />

      <MotionReveal delay={0.1} className="mb-8">
        <Card elevation="feature" padding="28px">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={20} strokeWidth={2} />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>ليش تنضم لنادي؟</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
            {clubMeta.benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={16} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>
        </Card>
      </MotionReveal>

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>Soft Skills اللي تكتسبها</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {clubMeta.skills.map((s) => (
            <span
              key={s}
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
              style={{
                padding: "7px 16px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                background: "rgba(246,180,27,0.10)",
                color: "#B45309",
                border: "1px solid rgba(246,180,27,0.25)",
                cursor: "default",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الفوائد</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
          {clubBenefitCards.map((item, i) => (
            <ClubBenefitCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>النوادي والجمعيات النشطة بالمعهد</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {clubDirectory.map((club, idx) => (
            <ClubDirectoryCard key={club.id} club={club} index={idx} />
          ))}
        </div>
      </div>

      <Alert title="نصيحة ذهبية" variant="success">
        الحياة الجامعية مهاش قراية بركا. النوادي تربط بين الجو والتفرهيد وتخليك تكتسب خبرة في برشا ميادين مختلفة.
      </Alert>
    </PageWrapper>
  );
}
