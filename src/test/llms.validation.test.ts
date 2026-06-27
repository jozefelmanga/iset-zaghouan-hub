import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PAGE_SEO } from "@/constants/seo";
import { SITE_URL } from "@/lib/seo";
import {
  generateLlmsFullTxt,
  generateLlmsTxt,
  getAllLlmPaths,
} from "@/lib/llms-content";

const PUBLIC_DIR = join(process.cwd(), "public");

describe("LLM documentation files", () => {
  it("generateLlmsTxt includes site name and key routes", () => {
    const content = generateLlmsTxt();
    expect(content).toContain("# ISET Zaghouan Hub");
    expect(content).toContain(SITE_URL);
    expect(content).toContain("/llms-full.txt");
    expect(content).toContain("/faq");
  });

  it("generateLlmsFullTxt covers every PAGE_SEO route", () => {
    const content = generateLlmsFullTxt();
    for (const path of getAllLlmPaths()) {
      const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
      expect(content, `missing ${path} in llms-full`).toContain(url);
      expect(content, `missing title for ${path}`).toContain(PAGE_SEO[path].title);
    }
  });

  it("committed public/llms.txt matches generator output", () => {
    const onDisk = readFileSync(join(PUBLIC_DIR, "llms.txt"), "utf-8");
    expect(onDisk).toBe(generateLlmsTxt());
  });

  it("committed public/llms-full.txt matches generator output", () => {
    const onDisk = readFileSync(join(PUBLIC_DIR, "llms-full.txt"), "utf-8");
    expect(onDisk).toBe(generateLlmsFullTxt());
  });
});
