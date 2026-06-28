"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Grid } from "@/components/ui/layout";
import { studentJourney } from "@/data/content";
import { journeyStepIcons } from "@/lib/iconMaps";
import { ArrowLeft } from "@/lib/icons";
import { hoverLift, itemReveal, sectionReveal } from "@/lib/motion";

export function StudentJourneySection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <Card elevation="feature" padding="32px">
        <SectionHeader
          label="رحلتك الجامعية"
          title="خطوة بخطوة"
          subtitle="دليل مبسط للطالب الجديد"
        />

        <Grid gap="md" minColWidth="220px">
          {studentJourney.map((step, i) => {
            const Icon = journeyStepIcons[step.icon];
            return (
              <motion.a
                key={step.id}
                href={step.href}
                {...itemReveal(i * 0.08)}
                {...hoverLift}
                className="group flex flex-col h-full no-underline rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[rgba(18,184,200,0.35)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: "rgba(18,184,200,0.10)",
                    color: "var(--color-secondary)",
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="text-[15px] font-bold text-[var(--color-text)] mb-1.5 group-hover:text-[var(--color-secondary)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed flex-1">
                  {step.description}
                </p>

                <span className="inline-flex items-center gap-1 mt-4 text-[12px] font-semibold text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  عرض التفاصيل
                  <ArrowLeft size={13} />
                </span>
              </motion.a>
            );
          })}
        </Grid>
      </Card>
    </motion.section>
  );
}
