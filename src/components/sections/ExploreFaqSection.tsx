"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, ChevronLeft } from "@/lib/icons";
import { homeFaqPreview } from "@/data/content";
import { explorePreviewSpots } from "@/data/explore";
import { sectionReveal } from "@/lib/motion";
import { Grid } from "@/components/ui/layout";

export function ExploreFaqSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <Grid gap="lg" minColWidth="320px">
        {/* Explore Zaghouan */}
        <Card elevation="raised" padding="28px">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <span className="section-label">اكتشاف</span>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", marginTop: "4px" }}>
                اكتشف زغوان
              </h3>
            </div>
            <a
              href="/explore"
              style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--color-secondary)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
            >
              الكل <ArrowLeft size={14} />
            </a>
          </div>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
            بلاد مليانة بتاريخها و جبلها. أحسن البلايص باش تقرا و تفرهد.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {explorePreviewSpots.map((spot) => (
              <span
                key={spot}
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 500,
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {spot}
              </span>
            ))}
          </div>
        </Card>

        {/* FAQ */}
        <Card elevation="raised" padding="28px">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <span className="section-label">مساعدة</span>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", marginTop: "4px" }}>
                الأسئلة الشائعة
              </h3>
            </div>
            <a
              href="/faq"
              style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--color-secondary)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
            >
              الكل <ArrowLeft size={14} />
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {homeFaqPreview.map((q) => (
              <a
                key={q}
                href="/faq"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderRadius: "12px",
                  background: "var(--color-background)",
                  textDecoration: "none",
                  color: "var(--color-text)",
                  fontSize: "13px",
                  fontWeight: 500,
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = "rgba(18,184,200,0.06)";
                  a.style.color = "var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = "var(--color-background)";
                  a.style.color = "var(--color-text)";
                }}
              >
                <span>{q}</span>
                <ChevronLeft size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </Card>
      </Grid>
    </motion.section>
  );
}
