"use client";

import { motion } from "framer-motion";
import { ActionCard } from "@/components/ui/ActionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { quickActions } from "@/data/content";
import { quickActionIcons } from "@/lib/iconMaps";
import { sectionReveal, itemReveal } from "@/lib/motion";
import { Grid } from "@/components/ui/layout";

export function QuickAccessSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20 mt-20">
      <SectionHeader
        label="الوصول السريع"
        title="كل ما تحتاجه في مكان واحد"
        subtitle="الخدمات الأساسية للحياة الجامعية"
      />
      <Grid gap="md" minColWidth="280px">
        {quickActions.map((action, i) => (
          <motion.div key={action.href} {...itemReveal(i * 0.06)} style={{ height: "100%" }}>
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
      </Grid>
    </motion.section>
  );
}
