import { FullBleed } from "@/components/ui/layout";
import { ZoomableImage } from "@/components/ui/Lightbox";

export interface ClubHeroBannerProps {
  bannerSrc: string;
  bannerAlt: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle?: string;
  label?: string;
  objectPosition?: string;
  logoBackground?: string;
  logoObjectFit?: "cover" | "contain";
  gradientTop?: number;
  gradientBottom?: number;
}

/** Facebook / LinkedIn–style club profile header — cover photo + overlapping logo + title. */
export function ClubHeroBanner({
  bannerSrc,
  bannerAlt,
  logoSrc,
  logoAlt,
  title,
  subtitle,
  label = "النوادي و الجمعيات",
  objectPosition = "center center",
  logoBackground = "#fff",
  logoObjectFit = "cover",
  gradientTop = 0.1,
  gradientBottom = 0.55,
}: ClubHeroBannerProps) {
  return (
    <header className="club-profile-hero mb-8">
      <FullBleed
        className="club-hero-banner"
        style={{
          aspectRatio: "4 / 1",
          minHeight: "140px",
          maxHeight: "340px",
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
          imgHeight={300}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `linear-gradient(to bottom, rgba(11,31,58,${gradientTop}), rgba(11,31,58,${gradientBottom}))`,
          }}
        />
      </FullBleed>

      <div className="mx-auto w-full max-w-[860px] border-b border-[var(--color-border)] px-4 pb-5 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-6">
          <div className="-mt-10 shrink-0 self-start md:-mt-16">
            <ZoomableImage
              src={logoSrc}
              alt={logoAlt}
              hideHint
              objectFit={logoObjectFit}
              style={{
                width: "clamp(80px, 22vw, 140px)",
                height: "clamp(80px, 22vw, 140px)",
                borderRadius: "16px",
                border: "4px solid #fff",
                background: logoBackground,
                padding: logoObjectFit === "contain" ? "6px" : undefined,
                boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
              }}
            />
          </div>

          <div className="min-w-0 flex-1 md:pb-1">
            {label && (
              <span className="section-label mb-1 block">
                {label}
              </span>
            )}
            <h1
              style={{
                fontSize: "clamp(20px, 3.5vw, 28px)",
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1.25,
                marginBottom: subtitle ? "6px" : 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
