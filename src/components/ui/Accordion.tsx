"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "@/lib/icons";
import type { FAQItem } from "@/types";

function AccordionItem({ question, answer, links, index }: FAQItem & { index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

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
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
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
          aria-hidden="true"
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
          <ChevronDown size={16} strokeWidth={2.5} aria-hidden="true" />
        </motion.div>
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        style={{ overflow: "hidden" }}
      >
        <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--color-border)" }}>
          <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, paddingTop: "14px" }}>
            {answer}
          </p>
          {links && links.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "14px",
                paddingTop: "14px",
                borderTop: "1px dashed var(--color-border)",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    background: "rgba(18,184,200,0.08)",
                    border: "1px solid rgba(18,184,200,0.22)",
                    color: "var(--color-secondary)",
                    fontSize: "12px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background var(--transition-fast), border-color var(--transition-fast)",
                  }}
                >
                  {link.label}
                  <ArrowLeft size={13} strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>
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
