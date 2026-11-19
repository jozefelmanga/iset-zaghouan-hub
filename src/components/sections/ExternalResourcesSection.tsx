import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Divider, Grid } from "@/components/ui/layout";
import { FeaturedPlatformCard } from "@/components/sections/FeaturedPlatformCard";
import { externalResources, externalResourcesMeta } from "@/data/resources";
import { YoutubeEmbed } from "@/components/ui/YoutubeEmbed";

const featuredPlatforms = externalResources.filter(
  (r): r is Extract<typeof r, { type: "link" }> => r.type === "link"
);
const videos = externalResources.filter(
  (r): r is Extract<typeof r, { type: "video" }> => r.type === "video"
);

export function ExternalResourcesSection() {
  return (
    <section className="section-reveal mb-20">
      <SectionHeader
        label={externalResourcesMeta.label}
        title={externalResourcesMeta.title}
        subtitle={externalResourcesMeta.subtitle}
      />

      <div className="mb-8">
        <p className="mb-4 text-[13px] font-bold tracking-[0.04em] text-[var(--color-text-muted)]">
          منصات أساسية — لا تفوّتها
        </p>
        <Grid gap="lg" minColWidth="320px">
          {featuredPlatforms.map((resource, i) => (
            <div key={resource.href} className="motion-reveal h-full" style={{ animationDelay: `${i * 0.08}s` }}>
              <FeaturedPlatformCard resource={resource} />
            </div>
          ))}
        </Grid>
      </div>

      <Divider label="فيديوهات" className="mb-8" />

      <Grid gap="md" minColWidth="300px">
        {videos.map((resource, i) => (
          <div key={resource.embedUrl} className="motion-reveal" style={{ animationDelay: `${i * 0.06}s` }}>
            <Card elevation="raised" padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <YoutubeEmbed embedUrl={resource.embedUrl} title={resource.title} />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--color-text)", lineHeight: 1.4 }}>
                  {resource.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  {resource.description}
                  {resource.credit && (
                    <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "var(--color-text-muted)" }}>
                      {resource.credit}
                    </span>
                  )}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </Grid>
    </section>
  );
}
