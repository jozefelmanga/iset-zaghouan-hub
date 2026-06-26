"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle, ChevronDown, Phone, MessageCircle,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Alert } from "@/components/ui/shared";
import { faqItems, emergencyContacts } from "@/data/content";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      style={{
        background: "var(--color-surface)",
        border: `1px solid ${open ? "rgba(18,184,200,0.3)" : "var(--color-border)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: open ? "0 4px 20px rgba(18,184,200,0.08)" : "var(--shadow-card)",
        transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "right",
          gap: "12px",
          fontFamily: "var(--font-sans)",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", flex: 1, textAlign: "right" }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "rgba(18,184,200,0.10)" : "var(--color-background)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "var(--color-secondary)" : "var(--color-text-muted)",
          }}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, paddingTop: "14px" }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <AppLayout>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 32px" }}>
        <PageHeader
          icon={HelpCircle}
          label="مساعدة"
          title="الأسئلة الشائعة"
          subtitle="أكثر الأسئلة اللي يسألوها الطلبة الجداد"
          category="campus"
        />

        {/* FAQ Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>

        {/* Emergency contacts */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Phone size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>أرقام مهمة</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {emergencyContacts.map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  gap: "12px",
                }}
              >
                <div>
                  <p style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "3px" }}>{contact.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{contact.note}</p>
                </div>
                {contact.phone !== "-" && (
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "var(--radius-button)",
                      background: "var(--color-primary)",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      flexShrink: 0,
                      transition: "opacity var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    {contact.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <Alert title="عندك سؤال؟" variant="info">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <MessageCircle size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
            <p>اسأل الطلبة الكبار ولا ممثلين الطلبة. هم يعاونوك و يفضوا مشكلتك.</p>
          </div>
        </Alert>
      </div>
    </AppLayout>
  );
}
