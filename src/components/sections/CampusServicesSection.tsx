"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { campusServices } from "@/data/content";
import { sectionReveal } from "@/lib/motion";
import { UtensilsCrossed, BookOpen, Users, Award } from "@/lib/icons";

const iconMap: Record<string, any> = {
  resto: UtensilsCrossed,
  library: BookOpen,
  clubs: Users,
  masters: Award,
};

export function CampusServicesSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <SectionHeader
        label="خدمات الحرم"
        title="خدمات الحرم الجامعي"
        subtitle="كل ما تحتاجه داخل ISET Zaghouan"
      />
      <div className="grid-2-campus">
        {campusServices.map((item) => {
          const Icon = iconMap[item.id];
          return (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "28px 20px",
                background: "var(--color-surface)",
                borderRadius: "20px",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
                textDecoration: "none",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.borderColor = `${item.color}40`;
                a.style.boxShadow = `0 12px 32px ${item.color}15`;
              }}
              onMouseLeave={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.borderColor = "var(--color-border)";
                a.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: item.bg,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                  transition: "transform var(--transition-base)",
                }}
              >
                <Icon size={26} strokeWidth={2} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
