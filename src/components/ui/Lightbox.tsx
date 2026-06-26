"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

/* ─────────────────────────────────────────────
   Reusable photo grid + lightbox component.
   Usage:
     <PhotoGallery images={["url1", "url2"]} />
───────────────────────────────────────────── */

interface PhotoGalleryProps {
  images: string[];
  /** Height of each thumbnail cell. Default 140px */
  thumbHeight?: number;
  /** Min column width for the auto grid. Default 180px */
  minColWidth?: number;
  /** Alt text prefix (appended with index). Default empty. */
  altPrefix?: string;
}

export function PhotoGallery({
  images,
  thumbHeight = 140,
  minColWidth = 180,
  altPrefix = "",
}: PhotoGalleryProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Thumbnail grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}px, 1fr))`,
          gap: "12px",
        }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightbox(src)}
            style={{
              position: "relative",
              height: `${thumbHeight}px`,
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              cursor: "zoom-in",
            }}
          >
            <img
              src={src}
              alt={altPrefix ? `${altPrefix} ${idx + 1}` : `photo-${idx + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Hover zoom hint overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(11,31,58,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ZoomIn size={22} style={{ color: "#fff" }} strokeWidth={2} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox rendered in document body via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightbox(null)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999, // Render above everything, including navbars
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                cursor: "zoom-out",
                willChange: "opacity",
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  maxWidth: "960px",
                  width: "100%",
                  maxHeight: "90vh",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={lightbox}
                  alt="full size"
                  style={{
                    width: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

interface ZoomableImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export function ZoomableImage({
  src,
  alt,
  style,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={className}
        onClick={() => setIsOpen(true)}
        style={{
          position: "relative",
          cursor: "zoom-in",
          display: "inline-block",
          width: "100%",
          borderRadius: "inherit",
          ...style,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", display: "block", borderRadius: "inherit", objectFit: "cover" }}
        />
        {/* Zoom hint on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11,31,58,0.25)",
            borderRadius: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ZoomIn size={24} style={{ color: "#fff" }} strokeWidth={2} />
        </motion.div>
      </div>

      {/* Lightbox rendered in document body via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999, // Render above all other components, including headers and sidebars
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                cursor: "zoom-out",
                willChange: "opacity",
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  maxWidth: "960px",
                  width: "100%",
                  maxHeight: "90vh",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

