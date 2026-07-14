"use client";

import { PhotoGallery } from "@/components/ui/Lightbox";



interface Props {
  galleryImages: string[];
}

export function RestoGallery({ galleryImages }: Props) {
  return (
    <div style={{ marginTop: "40px" }}>
      <PhotoGallery images={galleryImages} />
    </div>
  );
}
