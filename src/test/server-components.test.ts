import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/** Files that must remain Server Components (no client hooks or directives). */
const SERVER_COMPONENT_FILES = [
  "src/components/ui/StaticPageHeader.tsx",
  "src/components/ui/layout.tsx",
  "src/components/ui/Badge.tsx",
  "src/components/ui/Alert.tsx",
  "src/components/ui/StepItem.tsx",
  "src/components/ui/TimelineItem.tsx",
  "src/components/ui/Skeleton.tsx",
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
