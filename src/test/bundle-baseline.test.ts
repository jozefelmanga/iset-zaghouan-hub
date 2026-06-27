import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const BASELINE_PATH = join(process.cwd(), "scripts", "bundle-baseline.json");

describe("Bundle baseline", () => {
  it("bundle-baseline.json exists with required fields", () => {
    expect(existsSync(BASELINE_PATH), "scripts/bundle-baseline.json is missing").toBe(true);

    const baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf-8")) as {
      homepageInitialJsGzipBytes: number;
      maxHomepageInitialJsGzipBytes: number;
    };

    expect(baseline.homepageInitialJsGzipBytes).toBeGreaterThan(50_000);
    expect(baseline.maxHomepageInitialJsGzipBytes).toBeGreaterThanOrEqual(
      baseline.homepageInitialJsGzipBytes
    );
  });
});
