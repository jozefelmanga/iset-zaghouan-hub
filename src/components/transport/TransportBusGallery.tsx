"use client";

import { PhotoGallery } from "@/components/ui/Lightbox";

const busScheduleImages = [
  "/images/BUS (1).webp",
  "/images/BUS (2).webp",
  "/images/BUS (3).webp",
  "/images/BUS (4).webp",
];

export function TransportBusGallery() {
  return (
    <div style={{ marginBottom: "36px" }}>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "18px" }}>اضغط على الصورة باش تكبّرها</p>
      <PhotoGallery images={busScheduleImages} thumbHeight={280} minColWidth={220} />
    </div>
  );
}
