import Link from "next/link";
import { HelpCircle, Home } from "@/lib/icons";
import { PageWrapper } from "@/components/ui/layout";

export default function NotFound() {
  return (
    <PageWrapper narrow>
      <div className="flex flex-col items-center text-center py-16 gap-6">
        <div
          className="icon-circle"
          style={{
            width: "72px",
            height: "72px",
            background: "rgba(18,184,200,0.12)",
            color: "var(--color-secondary)",
          }}
        >
          <HelpCircle size={32} strokeWidth={2} />
        </div>
        <div>
          <p
            className="section-label mb-2"
            style={{ color: "var(--color-text-muted)" }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: "8px",
            }}
          >
            الصفحة ما لقيناهاش
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "15px", lineHeight: 1.6 }}>
            الرابط غلط ولا الصفحة تبدّلت. ارجع للرئيسية ولا دور في الأسئلة الشائعة.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{ background: "var(--color-secondary)", color: "#fff" }}
          >
            <Home size={16} />
            الرئيسية
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm card-flat"
            style={{ color: "var(--color-text)" }}
          >
            <HelpCircle size={16} />
            الأسئلة الشائعة
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
