import type { NextConfig } from "next";
import path from "node:path";
import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs/config";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default withSentryConfig(withBundleAnalyzer(nextConfig), {
  org: "elmanga",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  // Strip code the site doesn't use from the browser bundle.
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
    excludeTracing: true,
    excludeReplayIframe: true,
    excludeReplayShadowDom: true,
    excludeReplayWorker: true,
  },
});


