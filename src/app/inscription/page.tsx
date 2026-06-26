"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  BookOpen,
  Stethoscope,
  IdCard,
  CheckCircle2,
  Circle,
  Printer,
  Globe,
  Copy,
  ArrowLeft,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, StepItem, Alert, Badge, Button, ImageGallery } from "@/components/ui/shared";
import { enrollmentSteps, enrollmentPhases, enrollmentDocs } from "@/data/enrollment";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  CreditCard,
  BookOpen,
  Stethoscope,
  IdCard,
};

export default function InscriptionPage() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (id: number) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / enrollmentSteps.length) * 100);

  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 32px" }}>

        {/* Page Header */}
        <PageHeader
          icon={FileText}
          label="الأكاديمي"
          title="الترسيم الجامعي"
          subtitle="خطوة بخطوة باش تسجل في ISET Zaghouan"
          category="academic"
        />

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: "32px" }}
        >
          <Card elevation="feature" padding="28px">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <p style={{ fontWeight: 600, fontSize: "15px", color: "var(--color-text)" }}>تقدم التحضير</p>
              <Badge variant={progress === 100 ? "success" : "info"}>{progress}%</Badge>
            </div>
            {/* Progress bar */}
            <div
              style={{
                height: "8px",
                background: "var(--color-border)",
                borderRadius: "999px",
                overflow: "hidden",
                marginBottom: "12px",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: progress === 100
                    ? "linear-gradient(90deg, #22C55E, #16A34A)"
                    : "linear-gradient(90deg, var(--color-secondary), #0FA8B8)",
                  borderRadius: "999px",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
              {completed} من {enrollmentSteps.length} أوراق جاهزة
            </p>
          </Card>
        </motion.div>

        {/* Steps Checklist */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="section-label">قائمة التحقق</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {enrollmentSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || FileText;
              const isChecked = checked[step.id];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <motion.div
                    onClick={() => toggle(step.id)}
                    whileHover={{ scale: 1.005 }}
                    style={{
                      background: isChecked ? "rgba(34,197,94,0.04)" : "var(--color-surface)",
                      border: isChecked ? "1px solid rgba(34,197,94,0.2)" : "1px solid var(--color-border)",
                      borderRadius: "16px",
                      padding: "18px 20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      boxShadow: "var(--shadow-card)",
                      transition: "all var(--transition-base)",
                    }}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggle(step.id); }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        marginTop: "2px",
                        flexShrink: 0,
                        color: isChecked ? "#22C55E" : "var(--color-border)",
                        transition: "color var(--transition-fast)",
                      }}
                    >
                      {isChecked
                        ? <CheckCircle2 size={22} strokeWidth={2.5} style={{ color: "#22C55E" }} />
                        : <Circle size={22} strokeWidth={2} style={{ color: "var(--color-border)" }} />
                      }
                    </button>

                    {/* Icon circle */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: isChecked ? "rgba(34,197,94,0.10)" : "rgba(59,130,246,0.08)",
                        color: isChecked ? "#22C55E" : "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          color: isChecked ? "var(--color-text-muted)" : "var(--color-text)",
                          textDecoration: isChecked ? "line-through" : "none",
                          marginBottom: "4px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Phases */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Globe size={18} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)" }}>مراحل الترسيم</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {enrollmentPhases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card elevation="raised" padding="24px">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: i === 0 ? "rgba(18,184,200,0.1)" : "rgba(34,197,94,0.1)",
                        color: i === 0 ? "var(--color-secondary)" : "#22C55E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "13px",
                      }}
                    >
                      {i + 1}
                    </div>
                    <h4 style={{ fontWeight: 600, fontSize: "15px", color: "var(--color-text)" }}>{phase.title}</h4>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {phase.steps.map((step, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <ArrowLeft size={14} style={{ color: "var(--color-secondary)", marginTop: "4px", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{step}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Document list */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Printer size={18} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)" }}>قائمة الأوراق</span>
          </div>
          <Card elevation="flat" padding="24px">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
              {enrollmentDocs.map((doc, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "var(--color-background)",
                  }}
                >
                  <Copy size={14} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2} />
                  <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{doc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Alert */}
        <Alert title="تنبيه مهم" variant="warning">
          شهادة الترسيم لازمك تستحفظ عليها و تخبيها. اعمل برشا نسخ و تخبيهم في بلاصات مختلفة.
        </Alert>

        {/* Gallery */}
        <ImageGallery 
          title="صور من الترسيم" 
          images={[
            "/images/inscription (1).webp",
            "/images/inscription (2).webp",
            "/images/inscription (3).webp",
            "/images/inscription (4).webp",
          ]} 
        />
      </div>
    </AppLayout>
  );
}
