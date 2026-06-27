import { expect } from "vitest";

export function assertNonEmpty(value: unknown, label: string): asserts value is string {
  expect(typeof value, `${label} should be a string`).toBe("string");
  expect((value as string).trim().length, `${label} should not be empty`).toBeGreaterThan(0);
}

export function assertInternalHref(href: string, label: string) {
  expect(href, `${label}: ${href}`).toMatch(/^\/[^\s]*$/);
}

export function assertExternalHref(href: string, label: string) {
  expect(href, `${label}: ${href}`).toMatch(/^https?:\/\//);
}

export function assertUniqueValues(values: string[], label: string) {
  expect(new Set(values).size, `${label} should have unique values`).toBe(values.length);
}

export function assertYouTubeEmbed(url: string, label: string) {
  expect(url, `${label}: ${url}`).toMatch(/^https:\/\/www\.youtube\.com\/embed\//);
}

export function assertAssetPath(path: string, label: string) {
  expect(path, `${label}: ${path}`).toMatch(/^(\/images\/|https?:\/\/)/);
}
