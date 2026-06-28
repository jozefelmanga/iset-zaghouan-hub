"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { internships } from "@/data/internships";
import styles from "./stages.module.css";

function clampGrade(value: number) {
  return Math.min(20, Math.max(0, value));
}

export function InternshipGradeCalculator() {
  const [grades, setGrades] = useState({ initiation: 0, perfectionnement: 0, pfe: 0 });

  const update = (key: keyof typeof grades, raw: string) => {
    const num = raw === "" ? 0 : clampGrade(parseFloat(raw) || 0);
    setGrades((prev) => ({ ...prev, [key]: num }));
  };

  const average =
    (grades.pfe * 10 + grades.perfectionnement * 2.5 + grades.initiation * 2.5) / 15;

  const fields = [
    { key: "initiation" as const, label: internships[0].name, weight: 2.5 },
    { key: "perfectionnement" as const, label: internships[1].name, weight: 2.5 },
    { key: "pfe" as const, label: "PFE", weight: 10 },
  ];

  return (
    <div id="calculator">
    <Card elevation="raised" padding="24px" className={styles.mobileCard}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Calculator size={16} strokeWidth={2} />
        </div>
        <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>حاسبة معدل الستاجات</span>
      </div>

      <div className={styles.calcGrid}>
        {fields.map(({ key, label, weight }) => (
          <div key={key}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "6px" }}>
              {label} <span style={{ opacity: 0.7 }}>(×{weight})</span>
            </label>
            <input
              type="number"
              min={0}
              max={20}
              step={0.25}
              value={grades[key] || ""}
              onChange={(e) => update(key, e.target.value)}
              placeholder="0"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                background: "var(--color-background)",
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--color-text)",
                fontFamily: "var(--font-sans)",
                textAlign: "center",
              }}
            />
          </div>
        ))}
      </div>

      <motion.div
        key={average}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: "20px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(18,184,200,0.08))",
          border: "1px solid rgba(139,92,246,0.2)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "6px" }}>
          معدل الستاجات الإجمالي
        </p>
        <p style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-secondary)", fontFeatureSettings: '"tnum"' }}>
          {average > 0 ? average.toFixed(2) : "—"}
          <span style={{ fontSize: "18px", fontWeight: 600, opacity: 0.6 }}>/20</span>
        </p>
      </motion.div>

      <div className={styles.formulaBox}>
        (PFE × 10 + Perfectionnement × 2.5 + Initiation × 2.5) ÷ 15
      </div>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "10px" }}>
        الستاجات تدخل في معدل السداسي الثاني من السنة الثالثة.
      </p>
    </Card>
    </div>
  );
}
