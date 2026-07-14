import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { Card } from "@/components/ui/shared";
import { User, Code, Info } from "@/lib/icons";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <PageWrapper seoPath="/about" className="max-w-[760px]">
      <StaticPageHeader
        icon="heart"
        label="عن المنصة"
        title="شنية Guide ISET Zaghouan؟"
        subtitle="منصة طلابية مستقلة تعاون الطلبة الجداد وتوفرلهم المعلومات اللازمة."
        category="campus"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Card elevation="raised" padding="28px">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(18,184,200,0.1)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Info size={18} strokeWidth={2} />
            </div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)" }}>الهدف من المنصة</h2>
          </div>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
            Guide ISET Zaghouan هي منصة <strong>مستقلة</strong> تم إنشاؤها خصيصاً لمساعدة الطلبة في المعهد العالي للدراسات التكنولوجية بزغوان. 
            الهدف الأساسي هو تجميع وتسهيل الوصول للمعلومات الأكاديمية (الترسيم، الستاجات، PFE) ومعلومات الحياة الجامعية (المبيت، النقل، النوادي).
            كل المعلومات الموجودة في المنصة تم تجميعها بناءً على خبرات وتجارب الطلبة الفعليين.
          </p>
        </Card>

        <Card elevation="flat" padding="28px">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(139,92,246,0.1)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Code size={18} strokeWidth={2} />
            </div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)" }}>التطوير والصيانة</h2>
          </div>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "16px" }}>
            تم تطوير هذه المنصة وتتم صيانتها برمجياً من قبل <strong>يوسف بن سالم (Youssef Ben Salem)</strong>، طالب سابق في المعهد العالي للدراسات التكنولوجية بزغوان.
          </p>
          <a
            href="https://linktr.ee/Youssef_Ben_Salem"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "var(--color-background)",
              padding: "16px",
              borderRadius: "14px",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
            }}
          >
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "rgba(18,184,200,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-secondary)", flexShrink: 0 }}>
              <User size={22} strokeWidth={2} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)", marginBottom: "2px" }}>Youssef Ben Salem</p>
              <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>Developer & Former ISETZG Student</p>
            </div>
            <div style={{ padding: "6px 12px", borderRadius: "8px", background: "var(--color-primary)", color: "white", fontSize: "12px", fontWeight: 600 }}>
              Contact
            </div>
          </a>
        </Card>

        <div style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.1)", borderRadius: "16px", padding: "20px" }}>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6, textAlign: "center" }}>
            ملاحظة: هذه المنصة هي مبادرة طلابية مستقلة وليست الموقع الرسمي للمعهد. للحصول على المعلومات الرسمية والقرارات الإدارية، يرجى دائماً مراجعة إدارة المعهد العالي للدراسات التكنولوجية بزغوان.
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "4px" }}>
          <a href="https://forms.gle/4Aj6svouhdPu9TBA7" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--color-text-muted)", textDecoration: "underline", opacity: 0.6 }}>
            عندك اقتراح أو لقيت مشكلة؟ أعلمنا هنا
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
