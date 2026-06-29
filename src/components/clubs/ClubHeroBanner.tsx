import { FullBleed } from "@/components/ui/layout";
import { ZoomableImage } from "@/components/ui/Lightbox";

export interface ClubHeroBannerProps {
  bannerSrc: string;
  bannerAlt: string;
  logoSrc: string;
  logoAlt: string;
  objectPosition?: string;
  logoBackground?: string;
  logoObjectFit?: "cover" | "contain";
  gradientTop?: number;
  gradientBottom?: number;
}

/** Stable-aspect club hero — reserves space before the banner image loads. */
export function ClubHeroBanner({
  bannerSrc,
  bannerAlt,
  logoSrc,
  logoAlt,
  objectPosition = "center center",
  logoBackground = "#fff",
  logoObjectFit = "cover",
  gradientTop = 0.25,
  gradientBottom = 0.85,
}: ClubHeroBannerProps) {
  return (
    <FullBleed
      className="club-hero-banner"
      style={{
        aspectRatio: "3 / 1",
        minHeight: "180px",
        maxHeight: "320px",
        marginBottom: "32px",
        backgroundColor: "var(--color-primary)",
      }}
    >
      <ZoomableImage
        fill
        src={bannerSrc}
        alt={bannerAlt}
        objectPosition={objectPosition}
        priority
        imgWidth={1200}
        imgHeight={400}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(to bottom, rgba(11,31,58,${gradientTop}), rgba(11,31,58,${gradientBottom}))`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          right: "32px",
          left: "32px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          pointerEvents: "none",
        }}
      >
        <ZoomableImage
          src={logoSrc}
          alt={logoAlt}
          hideHint
          objectFit={logoObjectFit}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            border: "2px solid #fff",
            background: logoBackground,
            padding: logoObjectFit === "contain" ? "4px" : undefined,
            pointerEvents: "auto",
          }}
        />
      </div>
    </FullBleed>
  );
}
