"use client";

import Link from "next/link";

/** Last-resort screen if the root layout itself crashes. Plain styles: the site CSS may not be loaded. */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#F7F9FC", color: "#10213A" }}>
        <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
          <h1 style={{ fontSize: "20px", margin: "0 0 8px" }}>صار مشكل في الموقع</h1>
          <p style={{ fontSize: "15px", color: "#5F708A", margin: "0 0 20px" }}>عاود جرّب بعد شوية.</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              onClick={reset}
              style={{ padding: "10px 18px", borderRadius: "10px", border: "none", background: "#0B1F3A", color: "#fff", fontSize: "15px", cursor: "pointer" }}
            >
              عاود جرّب
            </button>
            <Link href="/" style={{ padding: "10px 18px", borderRadius: "10px", border: "1px solid #E8EDF4", color: "#077A86", textDecoration: "none", fontSize: "15px" }}>
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
