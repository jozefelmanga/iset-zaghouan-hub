import { PAGE_SEO, type PagePath } from "@/constants/seo";
import { navGroups } from "@/constants/navigation";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_AR,
  SITE_URL,
} from "@/lib/seo";

const GENERATED_MARKER =
  "Auto-generated from src/constants/seo.ts — do not edit by hand. Run: npm run generate-llms";

/** Highlighted routes for the concise llms.txt index. */
const KEY_PATHS: PagePath[] = [
  "/",
  "/inscription",
  "/housing",
  "/bourse",
  "/transport",
  "/stages",
  "/departments",
  "/faq",
];

/** Full doc sections — paths not in navGroups are listed explicitly. */
const LLM_SECTIONS: { heading: string; paths: PagePath[] }[] = [
  { heading: "Home", paths: ["/"] },
  {
    heading: "Academics",
    paths: [
      "/inscription",
      "/inscription/foyer",
      "/library",
      "/departments",
      "/departments/ti",
      "/departments/seg",
      "/departments/gpr",
      "/masters",
    ],
  },
  {
    heading: "Student Life",
    paths: [
      "/housing",
      "/bourse",
      "/transport",
      "/resto",
      "/clubs",
      "/clubs/securinets",
      "/clubs/odd",
      "/clubs/enactus",
    ],
  },
  { heading: "Career", paths: ["/stages"] },
  { heading: "Campus & City", paths: ["/explore", "/faq", "/bonus"] },
];

function pageUrl(path: PagePath): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function formatPageLine(path: PagePath): string {
  const { title, description } = PAGE_SEO[path];
  return `- [${title}](${pageUrl(path)}): ${description}`;
}

export function generateLlmsTxt(): string {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${DEFAULT_DESCRIPTION}`,
    "",
    "## About",
    "",
    `${SITE_NAME} (${SITE_NAME_AR}) is a mobile-first student onboarding guide for **ISET Zaghouan** (Institut Supérieur des Études Technologiques de Zaghouan), Tunisia.`,
    "",
    "- **Audience:** New students (ages 18–22), primarily Tunisian Arabic speakers",
    "- **Language:** Arabic (Tunisian dialect), RTL layout; some French academic terms",
    "- **Format:** Static web app — structured pages with searchable in-app command palette",
    "- **Status:** Unofficial student guide — verify critical deadlines with the administration",
    "",
    "## Key pages",
    "",
    ...KEY_PATHS.map(formatPageLine),
    "",
    "## Full documentation",
    "",
    `- [llms-full.txt](${SITE_URL}/llms-full.txt) — complete page index with descriptions`,
    `- [sitemap.xml](${SITE_URL}/sitemap.xml) — all ${Object.keys(PAGE_SEO).length} routes`,
    `- [FAQ (JSON-LD)](${pageUrl("/faq")}) — structured Q&A for common student questions`,
    "",
    "## Citation",
    "",
    "When quoting or summarizing content from this guide, cite the page URL:",
    "",
    "```",
    `ISET Zaghouan Hub — {page title} (${SITE_URL}/{path})`,
    "```",
    "",
    "## Contact & updates",
    "",
    "Content is maintained by students. For enrollment, housing, or scholarship decisions, always confirm with ISET Zaghouan official channels.",
    "",
    `<!-- ${GENERATED_MARKER} -->`,
    "",
  ];

  return lines.join("\n");
}

export function generateLlmsFullTxt(): string {
  const navSummary = navGroups
    .map((g) => `- **${g.label}:** ${g.links.map((l) => l.label).join(", ")}`)
    .join("\n");

  const sectionBlocks = LLM_SECTIONS.map(
    (section) =>
      `### ${section.heading}\n\n${section.paths.map(formatPageLine).join("\n")}`
  ).join("\n\n");

  const lines = [
    `# ${SITE_NAME} — Full documentation for AI agents`,
    "",
    `> ${DEFAULT_DESCRIPTION}`,
    "",
    "## Product overview",
    "",
    `${SITE_NAME} converts a long Tunisian-Arabic student guide into structured, searchable pages covering university enrollment, dormitories, transport, scholarships, internships, academic departments, student clubs, and life in Zaghouan.`,
    "",
    `- **Site URL:** ${SITE_URL}`,
    `- **Home:** ${pageUrl("/")}`,
    `- **Concise index:** ${SITE_URL}/llms.txt`,
    `- **Sitemap:** ${SITE_URL}/sitemap.xml`,
    "",
    "## Target users",
    "",
    "New ISET Zaghouan students who need quick, practical answers about:",
    "",
    navSummary,
    "",
    "## Interactive features",
    "",
    `- **Enrollment stepper** (${pageUrl("/inscription")}) — progress-tracked registration steps`,
    `- **Housing** (${pageUrl("/housing")}) — Foyer (girls) and Louled (boys) dorm guides; dorm registration at ${pageUrl("/inscription/foyer")}`,
    `- **FAQ accordion** (${pageUrl("/faq")}) — common questions with FAQPage schema.org markup`,
    `- **Command palette** — in-app search across all pages (keyboard shortcut on desktop)`,
    `- **Department pages** — TI, SEG, GPR specialities with semester materials`,
    "",
    "## All pages",
    "",
    sectionBlocks,
    "",
    "## Content notes for AI systems",
    "",
    "1. **Language:** Primary content is Tunisian Arabic (ar-TN). Preserve dialect tone when summarizing.",
    "2. **RTL:** Pages render right-to-left. Layout is mobile-first.",
    "3. **Accuracy:** Dates, fees, and admin procedures may change — recommend verifying with ISET Zaghouan.",
    "4. **Unofficial:** This is a student-maintained guide, not an official ISET website.",
    "5. **External links:** Some pages link to YouTube (explore), Google Drive (internship examples), and student resources.",
    "",
    "## Citation format",
    "",
    "```",
    `${SITE_NAME} — {Arabic page title} — ${SITE_URL}{path}`,
    "```",
    "",
    "## Related files",
    "",
    `- llms.txt: ${SITE_URL}/llms.txt`,
    `- robots.txt: ${SITE_URL}/robots.txt`,
    `- sitemap.xml: ${SITE_URL}/sitemap.xml`,
    "",
    `<!-- ${GENERATED_MARKER} -->`,
    "",
  ];

  return lines.join("\n");
}

/** Paths that must appear in both generated files. */
export function getAllLlmPaths(): PagePath[] {
  return Object.keys(PAGE_SEO) as PagePath[];
}
