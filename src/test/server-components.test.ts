import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/** Files that must remain Server Components (no client hooks or directives). */
const SERVER_COMPONENT_FILES = [
  "src/components/layout/RootShell.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/ui/StaticPageHeader.tsx",
  "src/components/ui/layout.tsx",
  "src/components/ui/Badge.tsx",
  "src/components/ui/Alert.tsx",
  "src/components/ui/StepItem.tsx",
  "src/components/ui/TimelineItem.tsx",
  "src/components/ui/MotionReveal.tsx",
  "src/components/ui/SectionHeader.tsx",
  "src/components/ui/PageContentPlaceholder.tsx",
  "src/components/ui/Skeleton.tsx",
  "src/components/ui/Card.tsx",
  "src/components/ui/ActionCard.tsx",
  "src/components/sections/HeroSection.tsx",
  "src/components/sections/InstitutionInfoSection.tsx",
  "src/components/sections/QuickAccessSection.tsx",
  "src/components/sections/StudentJourneySection.tsx",
  "src/components/sections/ExternalResourcesSection.tsx",
  "src/components/sections/FeaturedPlatformCard.tsx",
  "src/components/sections/Zan9aStickersSection.tsx",
  "src/components/sections/OfficialChannelsSection.tsx",
  "src/components/sections/MotivationalCTASection.tsx",
  "src/components/explore/ExploreSections.tsx",
  "src/components/departments/DepartmentCard.tsx",
  "src/components/clubs/ClubCards.tsx",
  "src/components/library/LibraryFeaturesGrid.tsx",
];

const CLIENT_HOOK_PATTERNS = [
  /\buseState\b/,
  /\buseEffect\b/,
  /\buseContext\b/,
  /\buseRef\b/,
  /\bfrom\s+["']framer-motion["']/,
];

function hasUseClientDirective(source: string): boolean {
  return source.split("\n").some((line) => /^\s*["']use client["']/.test(line));
}

describe("Server Component boundaries", () => {
  for (const relativePath of SERVER_COMPONENT_FILES) {
    it(`${relativePath} has no client-only patterns`, () => {
      const absolutePath = join(process.cwd(), relativePath);
      const source = readFileSync(absolutePath, "utf-8");

      expect(hasUseClientDirective(source), `"use client" directive found in ${relativePath}`).toBe(false);

      for (const pattern of CLIENT_HOOK_PATTERNS) {
        expect(source, `Found forbidden pattern ${pattern} in ${relativePath}`).not.toMatch(pattern);
      }
    });
  }
});
