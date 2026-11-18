import type { ReactNode } from "react";
import { CheckCircle2 } from "@/lib/icons";
import { Card } from "@/components/ui/shared";

interface DocumentChecklistProps {
  /** Rendered as an <h2> so search engines see the section topic. */
  title: string;
  icon: ReactNode;
  items: readonly string[];
  /** Numbered steps instead of check marks. */
  ordered?: boolean;
  intro?: ReactNode;
  footer?: ReactNode;
  accent?: string;
}

/** A titled list of documents or steps, written out as text (not only images). */
export function DocumentChecklist({ title, icon, items, ordered = false, intro, footer, accent = "#22C55E" }: DocumentChecklistProps) {
  const List = ordered ? "ol" : "ul";

  return (
    <section style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: `color-mix(in srgb, ${accent} 12%, transparent)`,
            color: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>{title}</h2>
      </div>
      <Card elevation="flat" padding="20px">
        {intro && (
          <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "14px" }}>{intro}</p>
        )}
        <List style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((item, i) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--color-text)", lineHeight: 1.6 }}>
              {ordered ? (
                <span
                  aria-hidden="true"
                  style={{
                    minWidth: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: `color-mix(in srgb, ${accent} 14%, transparent)`,
                    color: accent,
                    fontSize: "12px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1px",
                  }}
                >
                  {i + 1}
                </span>
              ) : (
                <CheckCircle2 size={18} strokeWidth={2} style={{ color: accent, flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </List>
        {footer && (
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6, marginTop: "14px" }}>{footer}</p>
        )}
      </Card>
    </section>
  );
}
