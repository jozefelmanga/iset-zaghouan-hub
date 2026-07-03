"use client";

import { m as motion } from "framer-motion";
import { ActionCard } from "@/components/ui/ActionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { quickActions } from "@/data/content";
import { quickActionIcons } from "@/lib/iconMaps";
import { sectionReveal, itemReveal } from "@/lib/motion";

export function QuickAccessSection() {
  return (
    <motion.section {...sectionReveal} className="mb-14 mt-10 sm:mb-20 sm:mt-20">
      <SectionHeader
        className="mb-5 sm:mb-10"
        label="الوصول السريع"
        title="كل ما تحتاجه في مكان واحد"
        subtitle="الخدمات الأساسية للحياة الجامعية"
      />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {quickActions.map((action, i) => (
          <motion.div key={action.href} {...itemReveal(i * 0.06)} className="h-full">
            <ActionCard
              icon={quickActionIcons[action.icon]}
              title={action.title}
              description={action.description}
              href={action.href}
              category={action.category as "academic" | "life" | "career" | "campus"}
              featured={action.featured}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
