"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {studentJourney.map((step, i) => {
            const Icon = journeyStepIcons[step.icon];
            return (
              <motion.a
                key={step.id}
                href={step.href}
                {...itemReveal(i * 0.08)}
                {...hoverLift}
                className="group relative flex flex-col h-full no-underline rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 sm:p-5 md:p-6 transition-all hover:border-[rgba(18,184,200,0.35)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(18,184,200,0.1)] text-[var(--color-secondary)] font-bold flex items-center justify-center text-[11px] sm:text-sm transition-all group-hover:scale-110 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                  {i + 1}
                </div>

                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-5 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: "rgba(18,184,200,0.10)",
                    color: "var(--color-secondary)",
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>

                <h3 className="text-[13px] sm:text-[15px] md:text-[16px] font-bold text-[var(--color-text)] mb-1 sm:mb-2 group-hover:text-[var(--color-secondary)] transition-colors pr-0.5 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-[12px] md:text-[13.5px] text-[var(--color-text-secondary)] leading-snug sm:leading-relaxed flex-1 pr-0.5 opacity-90">
                  {step.description}
                </p>

                <span className="inline-flex items-center gap-1 mt-3 sm:mt-5 text-[11px] sm:text-[13px] font-semibold text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity pr-0.5">
                  عرض التفاصيل
                  <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </Card>
    </motion.section>
  );
}
