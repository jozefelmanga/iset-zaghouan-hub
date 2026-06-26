import type { Metadata } from "next";
import { AppLayout } from "@/components/layout/AppLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISET Zaghouan Hub — دليل الطالب",
  description: "دليل الطالب في ISET Zaghouan - الترسيم، المبيت، النقل، البورص، الستاجات، وكل ما يخص الحياة الجامعية",
  keywords: ["ISET Zaghouan", "دليل الطالب", "ترسيم", "مبيت", "بورص", "نقل"],
  openGraph: {
    title: "ISET Zaghouan Hub — دليل الطالب",
    description: "دليلك الشامل للحياة الجامعية في ISET Zaghouan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-[100dvh]">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
