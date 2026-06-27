"use client";

import { motion } from "framer-motion";
import { itemReveal } from "@/lib/motion";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images, title = "الصور" }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;
  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)" }}>{title}</span>
      </div>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
        gap: "16px",
        width: "100%",
        boxSizing: "border-box"
      }}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            {...itemReveal(i * 0.1)}
            style={{ 
              position: "relative", 
              paddingBottom: "65%", 
              borderRadius: "16px", 
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)"
            }}
          >
            <img 
              src={src} 
              alt={`Gallery image ${i + 1}`} 
              style={{ 
                position: "absolute", 
                inset: 0, 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transition: "transform var(--transition-slow)"
              }} 
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
