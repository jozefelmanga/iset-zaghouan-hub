import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { Analytics } from "@/components/layout/Analytics";
import { tajawal } from "@/lib/fonts";
import { OG_IMAGE_PATH, rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className={tajawal.variable}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="alternate" type="text/markdown" title="LLMs" href="/llms.txt" />
        <link rel="preload" as="image" href={OG_IMAGE_PATH} fetchPriority="high" />
      </head>
      <body className={`${tajawal.className} antialiased min-h-[100dvh]`}>
        <RootShell>{children}</RootShell>
        <Analytics />
      </body>
    </html>
  );
}
