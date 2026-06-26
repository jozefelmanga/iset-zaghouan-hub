"use client";

import { motion } from "framer-motion";
import {
  Briefcase, Calendar, FileText, CheckCircle2, AlertCircle, ExternalLink, Calculator,
} from "lucide-react";
import { PageHeader, Card, Badge, Alert, StepItem } from "@/components/ui/shared";
import { internships, internshipDocs, internshipTips } from "@/data/internships";

const yearColors = [
  { bg: "rgba(18,184,200,0.08)",   border: "rgba(18,184,200,0.2)",   text: "#12B8C8", badge: "info"    as const },
  { bg: "rgba(34,197,94,0.08)",    border: "rgba(34,197,94,0.2)",    text: "#22C55E", badge: "success" as const },
  { bg: "rgba(246,180,27,0.08)",   border: "rgba(246,180,27,0.2)",   text: "#B45309", badge: "warning" as const },
];

export default function StagesPage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={Briefcase}
          label="مهني"
          title="الستاجات"
          subtitle="3 سنوات = 3 ستاجات. دليلك الكامل لمراحل التطبيق."
          category="career"
        />

        {/* Timeline */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Calendar size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>التايم لاين</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {internships.map((internship, i) => {
              const colors = yearColors[i] || yearColors[0];
              return (
                <motion.div
                  key={internship.year}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "20px",
                      padding: "24px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <Badge variant={colors.badge}>السنة {internship.year}</Badge>
                      <h4 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{internship.name}</h4>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "10px", marginBottom: "14px" }}>
                      {[
                        { label: "المدة",    value: internship.duration },
                        { label: "التوقيت", value: internship.timing   },
                        { label: "الوزن",   value: internship.weight   },
                      ].map(({ label, value }) => (
                        <div key={label} style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.6)" }}>
                          <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                          <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: internship.note ? "12px" : "0" }}>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>المتطلبات:</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {internship.requirements.map((r) => (
                          <span
                            key={r}
                            style={{
                              padding: "4px 12px",
                              borderRadius: "999px",
                              fontSize: "12px",
                              fontWeight: 500,
                              background: "rgba(255,255,255,0.7)",
                              color: colors.text,
                              border: `1px solid ${colors.border}`,
                            }}
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    {internship.note && (
                      <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(246,180,27,0.08)", border: "1px solid rgba(246,180,27,0.2)", fontSize: "13px", color: "#B45309", fontWeight: 500 }}>
                        ⚠️ {internship.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Formula */}
        <Card elevation="raised" padding="24px" className="mb-8">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Calculator size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>معادلة احتساب المعدل</span>
          </div>
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "var(--color-background)",
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: "13px",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              lineHeight: 1.8,
            }}
          >
            (PFE × 10 + Perfectionnement × 2.5 + Initiation × 2.5) ÷ 15
          </div>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "10px" }}>
            الستاجات تدخل في معدل السداسي الثاني من السنة الثالثة.
          </p>
        </Card>

        {/* Didosoft */}
        <div style={{ marginBottom: "28px" }}>
          <Alert title="التسجيل على Didosoft" variant="info">
            اعمل compte على{" "}
            <a href="https://didosoft.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-secondary)", fontWeight: 700 }}>
              didosoft.com
            </a>{" "}
            من أول العام. النتيجة تلقاها هناك.
          </Alert>
        </div>

        {/* Documents */}
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

        {/* Tips */}
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
      </div>
    </>
  );
}
