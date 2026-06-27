"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/lib/icons";
import type { FAQItem } from "@/types";

function AccordionItem({ question, answer, index }: FAQItem & { index: number }) {
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
        type="button"
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

export function Accordion({ items }: { items: FAQItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
      {items.map((item, i) => (
        <AccordionItem key={item.question} {...item} index={i} />
      ))}
    </div>
  );
}
