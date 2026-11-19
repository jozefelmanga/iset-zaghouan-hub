"use client";

import { PhotoGallery } from "@/components/ui/Lightbox";



interface Props {
  galleryImages: string[];
}

export function TransportBusGallery({ galleryImages }: Props) {
  return (
    <div>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "18px" }}>صور جدول سبتمبر 2023 (قديم، للمرجع برك) — للمواعيد المحيّنة استعمل الجداول اللي فوق و الموقع الرسمي</p>
      <PhotoGallery images={galleryImages} thumbHeight={280} minColWidth={220} />
    </div>
  );
}
