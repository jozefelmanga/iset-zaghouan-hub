"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Building2 } from "@/lib/icons";
import { departmentList } from "@/data/departments";

export function InstitutionInfoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mb-8"
      dir="rtl"
    >
      <Card
        elevation="flat"
        style={{
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          borderRadius: "20px",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }} className="flex-col sm:flex-row">
          <div style={{ flexShrink: 0, width: "48px", height: "48px", borderRadius: "14px", background: "rgba(18, 184, 200, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Building2 size={24} className="text-[#12B8C8]" />
          </div>
          <div>
            <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              عن المعهد العالي للدراسات التكنولوجية بزغوان
            </h2>
            <p style={{ fontSize: "14.5px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0, marginBottom: "8px" }}>
              تأسّست إيزات زغوان (ISET Zaghouan) <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>عام 2002</span>، وهي فاك عمومية تابعة لـ <span style={{ color: "var(--color-text)", fontWeight: 600 }}>وزارة التعليم العالي والبحث العلمي</span> وتحت إشراف الإدارة العامة للدراسات التكنولوجية (<span style={{ color: "var(--color-text)", fontWeight: 600 }} dir="ltr">DGET</span>).
            </p>
            <p style={{ fontSize: "14.5px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
              عندها توّا <span style={{ color: "var(--color-secondary)", fontWeight: 700 }}>أكثر من 20 سنة</span> وهي تعطي في تكوين تطبيقي يجمع بين القراية النظري وتطبيقات سوق الشغل (الستاجات)، وفيها حالياً <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>{departmentList.length} أقسام رئيسية</span>.
            </p>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
