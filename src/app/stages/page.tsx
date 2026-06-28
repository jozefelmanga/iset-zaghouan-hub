import { pageMetadata } from "@/constants/seo";
import { Calendar, Calculator, FileText, CheckCircle2, AlertCircle, ExternalLink, Download, ImageIcon } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Badge, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { InternshipTimeline } from "@/components/stages/InternshipTimeline";
import { internshipDocs, internshipTips, dsegExampleReports, stagePresentationLogos } from "@/data/internships";

export const metadata = pageMetadata("/stages");

export default function StagesPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="briefcase"
        label="مهني"
        title="الستاجات"
        subtitle="3 سنوات = 3 ستاجات. دليلك الكامل لمراحل التطبيق."
        category="career"
      />

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Calendar size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>التايم لاين</span>
        </div>
        <InternshipTimeline />
      </div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(34,197,94,0.10)", color: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>شعارات التقارير والعروض</span>
        </div>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", lineHeight: 1.6 }}>
          الشعارات الرسمية اللي تستعملوها في صفحات الغلاف، التقارير، والـ présentations. نزّلوهم مباشرة.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
          {stagePresentationLogos.map((logo) => (
            <Card key={logo.src} elevation="raised" padding="16px">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "100%", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", borderRadius: "12px", background: "var(--color-background)", border: "1px solid var(--color-border)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "4px" }}>{logo.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "12px" }}>{logo.label}</p>
                  <a
                    href={logo.downloadSrc}
                    download={logo.downloadName}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: "rgba(18,184,200,0.08)",
                      border: "1px solid rgba(18,184,200,0.2)",
                      color: "var(--color-secondary)",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <Download size={14} strokeWidth={2.5} />
                    تحميل
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>{dsegExampleReports.title}</span>
          <Badge variant="info">SEG</Badge>
        </div>

        <Card elevation="raised" padding="24px">
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "14px" }}>
            {dsegExampleReports.description}
          </p>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", fontWeight: 600 }}>
            {dsegExampleReports.departmentNote}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {dsegExampleReports.folders.map((folder) => (
              <span key={folder} style={{ padding: "5px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(59,130,246,0.08)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.15)" }}>
                {folder}
              </span>
            ))}
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Alert title="تنبيه مهم" variant="warning">
              {dsegExampleReports.disclaimer}
            </Alert>
          </div>

          <a
            href={dsegExampleReports.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 18px",
              borderRadius: "12px",
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={16} strokeWidth={2} />
            فتح نماذج التقارير على Google Drive
          </a>
        </Card>
      </div>

      <Card elevation="raised" padding="24px" className="mb-8">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Calculator size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>معادلة احتساب المعدل</span>
        </div>
        <div style={{ padding: "16px 20px", borderRadius: "12px", background: "var(--color-background)", textAlign: "center", fontFamily: "monospace", fontSize: "13px", color: "var(--color-text)", border: "1px solid var(--color-border)", lineHeight: 1.8 }}>
          (PFE × 10 + Perfectionnement × 2.5 + Initiation × 2.5) ÷ 15
        </div>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "10px" }}>
          الستاجات تدخل في معدل السداسي الثاني من السنة الثالثة.
        </p>
      </Card>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الوثائق المطلوبة</span>
        </div>
        <Card elevation="flat" padding="20px">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px" }}>
            {internshipDocs.map((doc, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", background: "var(--color-background)" }}>
                <CheckCircle2 size={14} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{doc}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>نصائح للنجاح</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {internshipTips.map((tip, i) => (
            <Alert key={i} title="" variant="warning">{tip}</Alert>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
