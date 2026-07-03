"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Layers } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { masterPrograms, masterFilterTabs } from "@/data/departments";

export function MastersProgramGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMasters = activeFilter === "all"
    ? masterPrograms
    : masterPrograms.filter((m) => m.dept === activeFilter);

  const masterGalleryImages = filteredMasters.map((m) => m.image);
  const masterGalleryAlts = filteredMasters.map((m) => m.name);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
          background: "rgba(11,31,58,0.04)",
          padding: "6px",
          borderRadius: "16px",
          marginBottom: "32px",
          flexWrap: "wrap",
          width: "max-content",
          maxWidth: "100%",
        }}
      >
        {masterFilterTabs.map((tab) => (
          <motion.button
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: "none",
              padding: "10px 18px",
              borderRadius: "12px",
              fontSize: "13.5px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-base)",
              fontFamily: "var(--font-sans)",
              background: activeFilter === tab.id ? "var(--color-primary)" : "transparent",
              color: activeFilter === tab.id ? "#fff" : "var(--color-text-secondary)",
              boxShadow: activeFilter === tab.id ? "var(--shadow-hover)" : "none",
            }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "24px", marginBottom: "40px" }}>
        <AnimatePresence mode="popLayout">
          {filteredMasters.map((master, idx) => (
            <motion.div
              key={master.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
            >
              <Card elevation="raised" padding="24px" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "11px",
                        fontWeight: 700,
                        background: master.bg,
                        color: master.color,
                        border: `1px solid ${master.border}`,
                      }}
                    >
                      {master.deptFullName}
                    </span>
                    <GraduationCap size={18} style={{ color: master.color }} />
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.5, marginBottom: "10px" }}>
                    {master.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
                    {master.description}
                  </p>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                    <Layers size={14} style={{ color: "var(--color-text-muted)" }} />
                    <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>منشور الإعلان والبرنامج 🔗</span>
                  </div>
                  <ZoomableImage
                    src={master.image}
                    alt={master.name}
                    galleryImages={masterGalleryImages}
                    galleryAlts={masterGalleryAlts}
                    style={{
                      height: "220px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
