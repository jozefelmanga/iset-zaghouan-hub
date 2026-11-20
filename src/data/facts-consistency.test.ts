import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { faqItems, inscriptionFaqItems } from "./faq";
import { enrollmentDocs } from "./enrollment";
import { scholarshipDeadlineDays, scholarshipDocumentsSummary } from "./scholarships";
import { plainTimes, transportRoutes, zaghouanToTunisTimes } from "./transport";

/**
 * The same facts used to be typed in several places and drifted apart
 * (bourse papers, bus times, enrollment papers). Answers are now built from
 * the data arrays; these tests catch a copy being typed by hand again.
 */
const answer = (question: string, items = faqItems) => {
  const item = items.find((f) => f.question.includes(question));
  if (!item) throw new Error(`FAQ question not found: ${question}`);
  return item.answer;
};

describe("FAQ answers match the data they summarise", () => {
  it("bourse papers come from the scholarship list", () => {
    expect(answer("أوراق البورص")).toContain(scholarshipDocumentsSummary);
  });

  it("bus return times are the SRTGN timetable", () => {
    const text = answer("لتونس من زغوان");
    for (const t of plainTimes(zaghouanToTunisTimes)) expect(text).toContain(t);
    for (const id of ["louage", "bus_confort", "bus_normal"]) {
      const fare = transportRoutes.find((r) => r.id === id)?.fare;
      expect(text).toContain(fare!.toFixed(3));
    }
  });

  it("enrollment papers are the visible enrollment list", () => {
    const text = answer("الأوراق المطلوبة للترسيم", inscriptionFaqItems);
    for (const doc of enrollmentDocs) expect(text).toContain(doc);
  });

  it("the bus route card shows the timetable", () => {
    const card = transportRoutes.find((r) => r.id === "bus_return");
    expect(card?.schedule).toBe(zaghouanToTunisTimes.join(" / "));
  });
});

describe("no hand-typed copies of shared facts", () => {
  const read = (file: string) => readFileSync(join(process.cwd(), "src/data", file), "utf-8");

  it(`the ${scholarshipDeadlineDays}-day bourse deadline is only written once`, () => {
    for (const file of ["faq.ts", "scholarships.ts"]) {
      expect(read(file), file).not.toMatch(new RegExp(`${scholarshipDeadlineDays} يوم`));
    }
  });

  it("no times (bus, resto) are typed into the FAQ", () => {
    expect(read("faq.ts")).not.toMatch(/\d{1,2}[:h]\d{2}/);
  });
});
