"use client";

import { ZoomableImage } from "@/components/ui/Lightbox";

interface LibraryShowcaseImageProps {
  src: string;
  alt: string;
}

export function LibraryShowcaseImage({ src, alt }: LibraryShowcaseImageProps) {
  return (
    <div className="mb-7">
      <div
        className="relative overflow-hidden rounded-[20px] border border-border shadow-[var(--shadow-card)]"
        style={{ aspectRatio: "16 / 9", maxHeight: "420px" }}
      >
        <ZoomableImage
          fill
          src={src}
          alt={alt}
          priority
          objectPosition="center center"
        />
      </div>
    </div>
  );
}
