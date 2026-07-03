"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Map, X } from "lucide-react";

interface FABProps {
  onSearchOpen: () => void;
}

export function FloatingActionButton({ onSearchOpen }: FABProps) {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: Search,
      label: "بحث",
      action: () => {
        setOpen(false);
        onSearchOpen();
      },
      color: "var(--color-secondary)",
    },
    {
      icon: Map,
      label: "خريطة الحرم",
      action: () => {
        setOpen(false);
        window.location.href = "/explore";
      },
      color: "#F97316",
    },
  ];

  return (
    <div
      className="mobile-only"
      style={{
        position: "fixed",
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Sub-actions */}
      <AnimatePresence>
        {open &&
          actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={i}
                type="button"
                aria-label={action.label}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 20 }}
                transition={{ duration: 0.22, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={action.action}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 18px 10px 14px",
                  borderRadius: "999px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-fab)",
                  cursor: "pointer",
                  color: "var(--color-text)",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: `${action.color}18`,
                    color: action.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </div>
                {action.label}
              </motion.button>
            );
          })}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        type="button"
        aria-label={open ? "إغلاق القائمة السريعة" : "فتح القائمة السريعة"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.22 }}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--color-primary), #1a3a5c)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-fab)",
          color: "#fff",
        }}
      >
        {open ? <X size={22} strokeWidth={2.5} aria-hidden="true" /> : <Plus size={22} strokeWidth={2.5} aria-hidden="true" />}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background: "rgba(11,31,58,0.2)",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
