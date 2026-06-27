import Link from "next/link";
import { ArrowLeft, Building2, FileText } from "@/lib/icons";
import { Card } from "@/components/ui/shared";

type HousingCrossLinkProps = {
  variant: "to-inscription" | "to-foyers";
};

const copy = {
  "to-inscription": {
    href: "/inscription/foyer",
    icon: FileText,
    text: "مازلت ما تعرفش كيفاش تترسّم في المبيت؟",
    cta: "شوف خطوات التسجيل",
    color: "var(--color-secondary)",
    bg: "rgba(18,184,200,0.08)",
    border: "rgba(18,184,200,0.22)",
  },
  "to-foyers": {
    href: "/housing",
    icon: Building2,
    text: "تحب تاخذ فكرة على الفواي وين باش تسكن؟",
    cta: "اكتشف فواي البنات و الأولاد",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.22)",
  },
} as const;

export function HousingCrossLink({ variant }: HousingCrossLinkProps) {
  const { href, icon: Icon, text, cta, color, bg, border } = copy[variant];

  return (
    <Link href={href} style={{ textDecoration: "none", display: "block", marginBottom: "28px" }}>
      <Card
        elevation="raised"
        padding="18px 20px"
        style={{
          border: `1px solid ${border}`,
          background: bg,
          transition: "transform var(--transition-base), box-shadow var(--transition-base)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1, minWidth: "200px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%", background: `${color}18`, color,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon size={17} strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "4px" }}>
                {text}
              </p>
              <span style={{ fontSize: "14px", fontWeight: 700, color }}>{cta}</span>
            </div>
          </div>
          <ArrowLeft size={18} style={{ color, flexShrink: 0 }} strokeWidth={2.5} />
        </div>
      </Card>
    </Link>
  );
}
