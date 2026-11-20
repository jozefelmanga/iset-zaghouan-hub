import type { Metadata, Viewport } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { Analytics } from "@/components/layout/Analytics";
import { ServiceWorkerRegister } from "@/components/layout/ServiceWorkerRegister";
import { INSTALL_CAPTURE_SCRIPT, THEME_INIT_SCRIPT } from "@/lib/head-scripts";
import { tajawal } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  viewportFit: "cover",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className={`scroll-smooth ${tajawal.variable}`} suppressHydrationWarning>
      <head>
        {/* Saved light/dark choice before first paint; keep the install prompt for our button. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT + INSTALL_CAPTURE_SCRIPT }} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ISETZG Hub" />
        <link rel="alternate" type="text/markdown" title="LLMs" href="/llms.txt" />
      </head>
      <body className={`${tajawal.className} antialiased min-h-[100dvh]`}>
        <RootShell>{children}</RootShell>
        <Analytics />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
