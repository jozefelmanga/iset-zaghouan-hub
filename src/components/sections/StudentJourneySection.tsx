"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { studentJourney } from "@/data/content";
import { sectionReveal, itemReveal } from "@/lib/motion";
import { Star } from "@/lib/icons";

export function StudentJourneySection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <Card elevation="feature" padding="40px">
        <SectionHeader
          label="رحلتك الجامعية"
          title="خطوة بخطوة"
          subtitle="دليل مبسط للطالب الجديد"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "10%",
              right: "10%",
              height: "2px",
              background: "linear-gradient(90deg, var(--color-secondary), var(--color-border))",
              zIndex: 0,
            }}
          />
          {studentJourney.map((step, i) => (
            <motion.div
              key={step.id}
              {...itemReveal(i * 0.1)}
              style={{ textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: step.active ? "var(--color-secondary)" : "var(--color-surface)",
                  border: step.active ? "none" : "2px solid var(--color-border)",
                  color: step.active ? "#fff" : "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontWeight: 700,
                  fontSize: "15px",
                  boxShadow: step.active ? "0 0 0 6px rgba(18,184,200,0.15)" : "none",
                  transition: "all var(--transition-base)",
                }}
              >
                {step.active ? <Star size={20} strokeWidth={2} /> : i + 1}
              </div>
              <p style={{ fontWeight: 600, fontSize: "14px", color: step.active ? "var(--color-secondary)" : "var(--color-text)", marginBottom: "6px" }}>
                {step.title}
              </p>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.section>
  );
}
