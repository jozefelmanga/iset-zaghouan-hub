"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Download, CheckCircle2 } from "@/lib/icons";

interface DownloadButtonProps {
  href: string;
  downloadName: string;
  downloadCount?: number;
}

export function DownloadButton({ href, downloadName, downloadCount }: DownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <a
      href={href}
      download={downloadName}
      onClick={() => setDownloaded(true)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        width: "100%",
        padding: "10px 14px",
        borderRadius: "10px",
        background: downloaded ? "rgba(34,197,94,0.10)" : "rgba(18,184,200,0.08)",
        border: downloaded ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(18,184,200,0.2)",
        color: downloaded ? "color-mix(in srgb, #22C55E, #fff var(--text-lift))" : "color-mix(in srgb, var(--color-secondary), #fff var(--text-lift))",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        transition: "all 0.25s ease",
      }}
    >
      <m.span
        key={downloaded ? "check" : "dl"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        {downloaded ? <CheckCircle2 size={14} strokeWidth={2.5} /> : <Download size={14} strokeWidth={2.5} />}
        {downloaded ? "تم التحميل" : "تحميل"}
      </m.span>
      {downloadCount != null && !downloaded && (
        <span style={{ fontSize: "11px", opacity: 0.7, fontWeight: 500 }}>
          ⬇ {downloadCount}
        </span>
      )}
    </a>
  );
}
