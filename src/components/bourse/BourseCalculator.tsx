"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";

export function BourseCalculator() {
  const [income, setIncome] = useState<number | "">("");

  const incomeNum = typeof income === "number" ? income : 0;

  let result = "";
  let resultVariant: "info" | "success" | "warning" | "danger" = "info";
  let resultIcon = "💰";

  if (incomeNum === 0) {
    result = "أدخل الدخل السنوي باش تشوف حقك";
    resultVariant = "info";
    resultIcon = "🔢";
  } else if (incomeNum > 30000000) {
    result = "لا بورص ولا منحة إدماج (الدخل > 30 مليون)";
    resultVariant = "danger";
    resultIcon = "❌";
  } else if (incomeNum > 5153000) {
    result = "منحة الإدماج فقط — 500 دينار";
    resultVariant = "warning";
    resultIcon = "⚠️";
  } else {
    result = "مبروك! حقك في البورصة الكاملة 🎉";
    resultVariant = "success";
    resultIcon = "✅";
  }

  return (
    <Card elevation="raised" padding="28px" className="mb-8">
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Calculator size={20} strokeWidth={2} />
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>حاسبة الأهلية</p>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>أدخل الدخل السنوي باش تعرف حقك في البورص</p>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "8px" }}>
          الدخل السنوي للعائلة (بالمليم)
        </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="مثلا: 4000000"
          className="w-full rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--color-secondary)] focus:shadow-[0_0_0_3px_rgba(18,184,200,0.15)]"
          style={{ fontFamily: "var(--font-sans)" }}
        />
      </div>

      <motion.div animate={{ opacity: 1 }} key={result}>
        <Alert title={resultIcon + " " + result} variant={resultVariant}>
          {incomeNum > 0 && incomeNum <= 5153000 && "الدخل مناسب للبورص الكاملة — ابدأ تجمع الأوراق!"}
          {incomeNum > 5153000 && incomeNum <= 30000000 && "تنجم تطلب منحة الإدماج 500 دينار."}
          {incomeNum > 30000000 && "الدخل السنوي عالي برشا — ما عندكش حق في أي منحة."}
          {incomeNum === 0 && "أدخل دخل العائلة السنوي بالمليم باش تشوف النتيجة."}
        </Alert>
      </motion.div>
    </Card>
  );
}
