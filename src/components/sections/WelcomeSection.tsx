"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Sparkles, ChevronDown, ChevronUp } from "@/lib/icons";

export function WelcomeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8 mt-4"
      dir="rtl"
    >
      <Card
        elevation="flat"
        style={{
          border: "1px solid var(--color-border)",
          background: "linear-gradient(135deg, rgba(18, 184, 200, 0.03) 0%, rgba(246, 180, 27, 0.02) 100%)",
          borderRadius: "20px",
          padding: "20px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effects */}
        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "120px", height: "120px", background: "rgba(18,184,200,0.08)", filter: "blur(30px)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "120px", height: "120px", background: "rgba(246,180,27,0.04)", filter: "blur(30px)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(18, 184, 200, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={14} className="text-[#12B8C8]" />
            </div>
            <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--color-text)", margin: 0 }}>مرحباً بكم في فضاءكم الجديد</h2>
          </div>

          {/* Paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Always visible paragraph */}
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
              🤍 أولًا مرحبًا بيكم في <strong>ISET Zaghouan</strong>، وإن شاء الله نتمنّاو لكم النجاح والتألّق في مشواركم الجامعي.
            </p>

            {/* Collapsible paragraphs */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0, paddingTop: "4px" }}>
                    ✋ نحبّو نرحّبوا بيكم في الدليل هذا، اللي حضّرناه باش يعاونكم في الترسيم الجامعي 📝 وكل ما يخصّ حياتكم كطلبة في ISET Zaghouan.
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
                    📚 الفكرة من الدليل هذا هي إنّنا نوفّرولكم كل المعلومات اللي تحتاجوها بطريقة سهلة وواضحة، باش نسهّلوا عليكم أول خطواتكم في الحياة الجامعية ونعاونكم تبداوها بثقة وراحة. 🚀
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "4px" }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#12B8C8",
                  fontSize: "13px",
                  fontWeight: 750,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 0",
                  outline: "none",
                }}
              >
                {isExpanded ? (
                  <>
                    <span>عرض أقل</span>
                    <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    <span>اقرأ المزيد</span>
                    <ChevronDown size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
