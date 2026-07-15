"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "@/lib/icons";
import { externalResourceIcons } from "@/lib/iconMaps";
import { hoverLift } from "@/lib/motion";
import type { ExternalLinkResource } from "@/data/resources";

function getDomain(href: string) {
  try {
    return new URL(href).hostname.replace("www.", "");
  } catch {
    return href;
  }
}

export function FeaturedPlatformCard({ resource }: { resource: ExternalLinkResource }) {
  const Icon = externalResourceIcons[resource.icon];
  const domain = getDomain(resource.href);

  return (
    <motion.a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      {...hoverLift}
      className="group flex flex-col overflow-hidden"
      style={{
        height: "100%",
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        border: `1px solid ${resource.color}33`,
        boxShadow: "var(--shadow-hover)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Browser chrome + preview thumbnail */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 14px",
            background: "var(--color-background)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
              <span
                key={c}
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, opacity: 0.85 }}
              />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              fontSize: "11px",
              color: "var(--color-text-muted)",
              overflow: "hidden",
            }}
          >
            <ExternalLink size={11} strokeWidth={2} style={{ flexShrink: 0 }} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{domain}</span>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: "140px",
            background: resource.preview.gradient,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <Icon size={26} strokeWidth={2} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", padding: "0 16px" }}>
            {resource.preview.highlights.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.18)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", top: "54px", left: "12px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
              background: "rgba(0, 0, 0, 0.35)",
              color: "#ffffff",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            ⭐ مهم
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: resource.bg,
              color: resource.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={22} strokeWidth={2} />
          </div>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "2px" }}>
              {resource.title}
            </h3>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{resource.subtitle}</span>
          </div>
        </div>

        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "16px" }}>
          {resource.description}
        </p>

        <div
          className="transition-all duration-200 group-hover:border-[var(--color-secondary)]"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "11px 18px",
            background: resource.bg,
            border: `1px solid ${resource.color}44`,
            borderRadius: "10px",
            color: resource.color,
            fontSize: "13px",
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          {resource.icon === "book-open" ? "زور المنصة" : "تصفح الدليل"} <ArrowLeft size={14} />
        </div>
      </div>
    </motion.a>
  );
}
