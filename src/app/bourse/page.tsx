"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote, Calculator, AlertCircle, CheckCircle2, FileText,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Badge, Alert, ImageGallery } from "@/components/ui/shared";
import { scholarshipTypes, scholarshipRules, scholarshipDocs } from "@/data/scholarships";

export default function BoursePage() {
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
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={Banknote}
          label="الحياة الجامعية"
          title="البورصة الجامعية"
          subtitle="منحة الإدماج و البورصة الكاملة — شنية تحتاج تعرفو"
          category="life"
        />

        {/* Scholarship Types */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {scholarshipTypes.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card elevation="feature" padding="24px">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <Badge variant={i === 0 ? "info" : "success"}>{s.name}</Badge>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-primary)", fontFeatureSettings: '"tnum"' }}>
                    {s.amount}
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-muted)", marginRight: "3px" }}>د</span>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.condition}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Calculator */}
        <Card elevation="raised" padding="28px" className="mb-8">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Calculator size={20} strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>حاسبة الأهلية</p>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>أدخل الدخل السنوي لمعرفة الحق في البورص</p>
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
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "var(--radius-input)",
                border: "1px solid var(--color-border)",
                background: "var(--color-background)",
                color: "var(--color-text)",
                fontSize: "14px",
                fontFamily: "var(--font-sans)",
                outline: "none",
                transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--color-secondary)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(18,184,200,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <motion.div
            animate={{ opacity: 1 }}
            key={result}
          >
            <Alert title={resultIcon + " " + result} variant={resultVariant}>
              {incomeNum > 0 && incomeNum <= 5153000 && "الدخل مناسب للبورص الكاملة — ابدأ تجمع الأوراق!"}
              {incomeNum > 5153000 && incomeNum <= 30000000 && "تقدر تطلب منحة الإدماج 500 دينار."}
              {incomeNum > 30000000 && "الدخل السنوي عالي جداً للاستفادة من أي منحة."}
              {incomeNum === 0 && "أدخل دخل العائلة السنوي بالمليم للحصول على نتيجة فورية."}
            </Alert>
          </motion.div>
        </Card>

        {/* Rules */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.12)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AlertCircle size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>قواعد البورص</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {scholarshipRules.map((rule, i) => (
              <Alert key={i} title="" variant="warning">{rule}</Alert>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الأوراق المطلوبة</span>
          </div>
          <Card elevation="flat" padding="20px">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
              {scholarshipDocs.map((doc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", background: "var(--color-background)" }}>
                  <CheckCircle2 size={14} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2.5} />
                  <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{doc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Alert title="ملاحظة مهمة" variant="info">
          أوراق البورص هي نفسها أوراق 500 دينار. عند تقديم البورص، نفس الأوراق — إذا لم يكن الحق في البورص الكاملة تأخذ منحة الإدماج.
        </Alert>

        {/* Gallery */}
        <ImageGallery 
          title="دليل المنحة الجامعية" 
          images={[
            "/images/bourse (1).webp",
            "/images/bourse (2).webp",
            "/images/bourse (3).webp",
            "/images/bourse (4).webp",
            "/images/bourse (5).webp",
          ]} 
        />
      </div>
    </AppLayout>
  );
}
