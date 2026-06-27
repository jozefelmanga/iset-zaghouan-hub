"use client";

import { PhotoGallery } from "@/components/ui/Lightbox";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

/** Titled gallery — uses the same zoom/lightbox behavior as PhotoGallery everywhere else. */
export function ImageGallery({ images, title = "الصور" }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)" }}>{title}</span>
      </div>
      <PhotoGallery images={images} minColWidth={150} altPrefix={title} />
    </div>
  );
}
