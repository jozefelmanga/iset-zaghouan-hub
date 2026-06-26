import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISET Zaghouan Student Hub",
  description: "دليل الطالب في ISET Zaghouan - الترسيم، المبيت، النقل، البورص، الستاجات، وكل ما يخص الحياة الجامعية",
  openGraph: {
    title: "ISET Zaghouan Student Hub",
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
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
