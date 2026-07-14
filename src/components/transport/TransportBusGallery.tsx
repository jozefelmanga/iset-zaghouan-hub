"use client";

import { PhotoGallery } from "@/components/ui/Lightbox";



interface Props {
  galleryImages: string[];
}

export function TransportBusGallery({ galleryImages }: Props) {
  return (
    <div>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "18px" }}>اضغط على الصورة باش تكبّرها</p>
      <PhotoGallery images={galleryImages} thumbHeight={280} minColWidth={220} />
    </div>
  );
}
