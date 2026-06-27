import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { allNavLinks, footerLinks } from "@/constants/navigation";
import {
  announcements,
  campusServices,
  homeFaqPreview,
  quickActions,
  studentJourney,
} from "@/data/content";
import { clubBenefitCards, clubDirectory } from "@/data/clubs";
import { departmentList, masterPrograms } from "@/data/departments";
import { exploreZaghouan, zaghouanGallery } from "@/data/explore";
import { faqItems, emergencyContacts } from "@/data/faq";
import { externalResources } from "@/data/resources";
import { generalTips, restoTips, foyerTips, contributors } from "@/data/bonus";
import {
  assertAssetPath,
  assertExternalHref,
  assertInternalHref,
  assertNonEmpty,
  assertUniqueValues,
  assertYouTubeEmbed,
} from "@/test/validators";

const APP_DIR = join(process.cwd(), "src", "app");

function collectAppRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (!statSync(fullPath).isDirectory()) continue;

    const nextSegments = [...segments, entry];
    const pageFile = join(fullPath, "page.tsx");
    try {
      statSync(pageFile);
      routes.push("/" + nextSegments.join("/"));
    } catch {
      /* no page.tsx in this folder */
    }
    routes.push(...collectAppRoutes(fullPath, nextSegments));
  }
  return routes;
}

function getAppRoutes(): string[] {
  const routes: string[] = [];

  try {
    statSync(join(APP_DIR, "page.tsx"));
    routes.push("/");
  } catch {
    /* no root page */
  }

  routes.push(...collectAppRoutes(APP_DIR));
  return [...new Set(routes)].sort();
}

describe("navigation", () => {
  const appRoutes = getAppRoutes();

  it("every nav link href resolves to an app route", () => {
    for (const link of allNavLinks) {
      assertInternalHref(link.href, `nav: ${link.label}`);
      expect(appRoutes, `missing route for ${link.href}`).toContain(link.href);
    }
  });

  it("footer links resolve to app routes", () => {
    for (const link of footerLinks) {
      assertInternalHref(link.href, `footer: ${link.label}`);
      expect(appRoutes, `missing route for ${link.href}`).toContain(link.href);
    }
  });

  it("quick actions and campus services link to valid routes", () => {
    for (const action of quickActions) {
      assertInternalHref(action.href, `quickAction: ${action.id}`);
      expect(appRoutes).toContain(action.href);
    }
    for (const service of campusServices) {
      assertInternalHref(service.href, `campusService: ${service.id}`);
      expect(appRoutes).toContain(service.href);
    }
  });
});

describe("faq", () => {
  it("every item has a non-empty question and answer", () => {
    for (const item of faqItems) {
      assertNonEmpty(item.question, "faq.question");
      assertNonEmpty(item.answer, "faq.answer");
    }
  });

  it("home FAQ preview questions exist in full FAQ list", () => {
    const questions = new Set(faqItems.map((item) => item.question));
    for (const preview of homeFaqPreview) {
      expect(questions, `preview not in faqItems: ${preview}`).toContain(preview);
    }
  });

  it("emergency contacts have names", () => {
    for (const contact of emergencyContacts) {
      assertNonEmpty(contact.name, "contact.name");
    }
  });
});

describe("clubs", () => {
  it("directory entries have unique ids and valid internal hrefs", () => {
    assertUniqueValues(clubDirectory.map((c) => c.id), "clubDirectory.id");
    for (const club of clubDirectory) {
      assertNonEmpty(club.name, "club.name");
      assertInternalHref(club.href, `club: ${club.id}`);
      assertAssetPath(club.logo, `club.logo: ${club.id}`);
    }
  });

  it("benefit cards have unique ids", () => {
    assertUniqueValues(clubBenefitCards.map((c) => c.id), "clubBenefitCards.id");
  });
});

describe("departments", () => {
  it("department list has unique codes and valid hrefs", () => {
    assertUniqueValues(departmentList.map((d) => d.code), "departmentList.code");
    for (const dept of departmentList) {
      assertNonEmpty(dept.arabicName, `dept.arabicName: ${dept.code}`);
      assertInternalHref(dept.href, `dept: ${dept.code}`);
      expect(dept.specialties.length).toBeGreaterThan(0);
    }
  });

  it("master programs have unique ids and asset images", () => {
    assertUniqueValues(masterPrograms.map((m) => m.id), "masterPrograms.id");
    for (const program of masterPrograms) {
      assertNonEmpty(program.name, `master: ${program.id}`);
      assertAssetPath(program.image, `master.image: ${program.id}`);
    }
  });
});

describe("explore", () => {
  it("has required content fields", () => {
    assertNonEmpty(exploreZaghouan.description, "explore.description");
    expect(exploreZaghouan.studySpots.length).toBeGreaterThan(0);
    expect(exploreZaghouan.cafes.length).toBeGreaterThan(0);
    expect(exploreZaghouan.nearbyServices.length).toBeGreaterThan(0);
  });

  it("mountain guide has contact info", () => {
    const { mountainGuide } = exploreZaghouan;
    assertNonEmpty(mountainGuide.name, "mountainGuide.name");
    assertNonEmpty(mountainGuide.phone, "mountainGuide.phone");
    assertExternalHref(mountainGuide.instagram, "mountainGuide.instagram");
  });

  it("youtube embed uses valid format", () => {
    assertYouTubeEmbed(exploreZaghouan.youtubeVideo.embedUrl, "explore.youtube");
  });

  it("gallery paths are valid asset paths", () => {
    expect(zaghouanGallery.length).toBeGreaterThan(0);
    for (const src of zaghouanGallery) {
      assertAssetPath(src, "zaghouanGallery");
    }
  });
});

describe("resources", () => {
  it("external resources have valid urls", () => {
    for (const resource of externalResources) {
      if (resource.type === "video") {
        assertYouTubeEmbed(resource.embedUrl, resource.title);
        assertNonEmpty(resource.title, "video.title");
      } else {
        assertExternalHref(resource.href, resource.title);
        assertNonEmpty(resource.title, "link.title");
      }
    }
  });
});

describe("home content", () => {
  it("student journey steps are numbered uniquely", () => {
    const ids = studentJourney.map((s) => String(s.id));
    assertUniqueValues(ids, "studentJourney.id");
    expect(studentJourney.some((s) => s.active)).toBe(true);
  });

  it("announcements have titles and descriptions", () => {
    for (const item of announcements) {
      assertNonEmpty(item.title, "announcement.title");
      assertNonEmpty(item.description, "announcement.description");
    }
  });
});

describe("bonus", () => {
  it("tip arrays are non-empty", () => {
    expect(generalTips.length).toBeGreaterThan(0);
    expect(restoTips.length).toBeGreaterThan(0);
    expect(foyerTips.length).toBeGreaterThan(0);
    for (const tip of [...generalTips, ...restoTips, ...foyerTips]) {
      assertNonEmpty(tip, "tip");
    }
  });

  it("contributors list is non-empty", () => {
    expect(contributors.length).toBeGreaterThan(0);
    for (const name of contributors) {
      assertNonEmpty(name, "contributor");
    }
  });
});

describe("app routes sanity", () => {
  it("discovers all expected top-level pages", () => {
    const routes = getAppRoutes();
    expect(routes).toContain("/");
    expect(routes).toContain("/explore");
    expect(routes).toContain("/faq");
    expect(routes.length).toBeGreaterThanOrEqual(20);
  });
});
