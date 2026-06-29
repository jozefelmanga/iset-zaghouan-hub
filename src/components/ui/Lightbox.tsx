"use client";

import { useState, useEffect, useCallback, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "@/lib/icons";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

const navButtonStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "rgba(0,0,0,0.55)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(8px)",
  zIndex: 2,
};

function LightboxOverlay({
  open,
  images,
  currentIndex,
  onIndexChange,
  onClose,
  getAlt,
}: {
  open: boolean;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  getAlt: (index: number) => string;
}) {
  const mounted = useMounted();
  const canNavigate = images.length > 1;
  const src = images[currentIndex] ?? "";
  const alt = getAlt(currentIndex);
  const hasPrev = canNavigate && currentIndex > 0;
  const hasNext = canNavigate && currentIndex < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(currentIndex - 1);
  }, [hasPrev, currentIndex, onIndexChange]);

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(currentIndex + 1);
  }, [hasNext, currentIndex, onIndexChange]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!canNavigate) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, canNavigate, goPrev, goNext, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
            willChange: "opacity",
          }}
        >
          {hasPrev && (
            <button
              type="button"
              aria-label="الصورة السابقة"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              style={{ ...navButtonStyle, left: "16px" }}
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              aria-label="الصورة التالية"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              style={{ ...navButtonStyle, right: "16px" }}
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          )}

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
            <AnimatePresence mode="wait">
              <motion.img
                key={src}
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  width: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: "16px",
                  display: "block",
                }}
              />
            </AnimatePresence>

            {canNavigate && (
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFeatureSettings: '"tnum"',
                  pointerEvents: "none",
                }}
              >
                {currentIndex + 1} / {images.length}
              </div>
            )}

            <button
              type="button"
              aria-label="إغلاق"
              onClick={onClose}
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
  );
}

const zoomHintStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(11,31,58,0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "inherit",
};

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
  /** When set, only this many images show until the user expands the gallery. */
  initialVisibleCount?: number;
  /** Label for the expand button. */
  showMoreLabel?: string;
}

export function PhotoGallery({
  images,
  thumbHeight = 140,
  minColWidth = 180,
  altPrefix = "",
  initialVisibleCount,
  showMoreLabel = "عرض المزيد",
}: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const hasMore =
    initialVisibleCount != null && images.length > initialVisibleCount;
  const visibleImages =
    hasMore && !expanded ? images.slice(0, initialVisibleCount) : images;

  const getAlt = (idx: number) =>
    altPrefix ? `${altPrefix} ${idx + 1}` : `photo-${idx + 1}`;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}px, 1fr))`,
          gap: "12px",
        }}
      >
        {visibleImages.map((src, idx) => {
          const alt = getAlt(idx);
          return (
            <motion.div
              key={src}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              onClick={() => setLightboxIndex(idx)}
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
                alt={alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} style={zoomHintStyle}>
                <ZoomIn size={22} style={{ color: "#fff" }} strokeWidth={2} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {hasMore && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          style={{
            display: "block",
            margin: "16px auto 0",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
            color: "var(--color-text-secondary)",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all var(--transition-fast)",
          }}
        >
          {showMoreLabel} ({images.length - initialVisibleCount!})
        </button>
      )}

      <LightboxOverlay
        open={lightboxIndex !== null}
        images={visibleImages}
        currentIndex={lightboxIndex ?? 0}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        getAlt={getAlt}
      />
    </>
  );
}

interface ZoomableImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  /** Fill the parent (absolute inset 0). Use inside a relative container. */
  fill?: boolean;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: string;
  /** Hide zoom icon overlay (e.g. tiny logos). Lightbox still opens on tap. */
  hideHint?: boolean;
  /** When set, arrow keys cycle through this list while the lightbox is open. */
  galleryImages?: string[];
  galleryAlts?: string[];
}

export function ZoomableImage({
  src,
  alt,
  style,
  className,
  fill = false,
  objectFit = "cover",
  objectPosition,
  hideHint = false,
  galleryImages,
  galleryAlts,
}: ZoomableImageProps) {
  const images = galleryImages?.length ? galleryImages : [src];
  const getAlt = (idx: number) => {
    if (galleryAlts?.[idx]) return galleryAlts[idx];
    if (images[idx] === src) return alt;
    return alt;
  };
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const wrapperStyle: CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        cursor: "zoom-in",
        borderRadius: "inherit",
        ...style,
      }
    : {
        position: "relative",
        cursor: "zoom-in",
        display: "inline-block",
        width: "100%",
        borderRadius: "inherit",
        ...style,
      };

  const openAt = () => {
    const idx = images.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <>
      <div className={className} onClick={openAt} style={wrapperStyle}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            borderRadius: "inherit",
            objectFit,
            objectPosition,
          }}
        />
        {!hideHint && (
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} style={zoomHintStyle}>
            <ZoomIn size={24} style={{ color: "#fff" }} strokeWidth={2} />
          </motion.div>
        )}
      </div>

      <LightboxOverlay
        open={lightboxIndex !== null}
        images={images}
        currentIndex={lightboxIndex ?? 0}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        getAlt={getAlt}
      />
    </>
  );
}
