"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLeft } from "@/lib/icons";
import { externalResources, externalResourcesMeta } from "@/data/resources";
import { externalResourceIcons } from "@/lib/iconMaps";
import { sectionReveal } from "@/lib/motion";

export function ExternalResourcesSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <SectionHeader
        label={externalResourcesMeta.label}
        title={externalResourcesMeta.title}
        subtitle={externalResourcesMeta.subtitle}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {externalResources.map((resource) => {
          if (resource.type === "video") {
            return (
              <Card key={resource.embedUrl} elevation="raised" padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={resource.embedUrl}
                    title={resource.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--color-text)", lineHeight: 1.4 }}>
                    {resource.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                    {resource.description}
                    {resource.credit && (
                      <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "var(--color-text-muted)" }}>
                        {resource.credit}
                      </span>
                    )}
                  </p>
                </div>
              </Card>
            );
          }

          const Icon = externalResourceIcons[resource.icon];
          return (
            <Card key={resource.href} elevation="raised" padding="24px" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: resource.bg, color: resource.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>{resource.title}</h3>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{resource.subtitle}</span>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "20px" }}>
                {resource.description}
              </p>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-200 hover:border-[var(--color-secondary)]"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  color: "var(--color-text)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {resource.icon === "book-open" ? "زور المنصة" : "تصفح الدليل"} <ArrowLeft size={14} />
              </a>
            </Card>
          );
        })}
      </div>
    </motion.section>
  );
}
