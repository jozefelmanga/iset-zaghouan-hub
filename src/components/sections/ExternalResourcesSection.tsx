"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Divider, Grid } from "@/components/ui/layout";
import { FeaturedPlatformCard } from "@/components/sections/FeaturedPlatformCard";
import { externalResources, externalResourcesMeta } from "@/data/resources";
import { sectionReveal, itemReveal } from "@/lib/motion";
import { YoutubeEmbed } from "@/components/ui/YoutubeEmbed";

const featuredPlatforms = externalResources.filter(
  (r): r is Extract<typeof r, { type: "link" }> => r.type === "link"
);
const videos = externalResources.filter(
  (r): r is Extract<typeof r, { type: "video" }> => r.type === "video"
);

export function ExternalResourcesSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <SectionHeader
        label={externalResourcesMeta.label}
        title={externalResourcesMeta.title}
        subtitle={externalResourcesMeta.subtitle}
      />

      <div style={{ marginBottom: "32px" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "var(--color-text-muted)",
            marginBottom: "16px",
            letterSpacing: "0.04em",
          }}
        >
          منصات أساسية — لا تفوّتها
        </p>
        <Grid gap="lg" minColWidth="320px">
          {featuredPlatforms.map((resource, i) => (
            <motion.div key={resource.href} {...itemReveal(i * 0.08)} style={{ height: "100%" }}>
              <FeaturedPlatformCard resource={resource} />
            </motion.div>
          ))}
        </Grid>
      </div>

      <Divider label="فيديوهات" className="mb-8" />

      <Grid gap="md" minColWidth="300px">
        {videos.map((resource, i) => (
          <motion.div key={resource.embedUrl} {...itemReveal(i * 0.06)}>
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
          </motion.div>
        ))}
      </Grid>
    </motion.section>
  );
}
