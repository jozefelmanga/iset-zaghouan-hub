import { Badge } from "@/components/ui/shared";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { internships } from "@/data/internships";

const yearColors = [
  { bg: "rgba(18,184,200,0.08)", border: "rgba(18,184,200,0.2)", text: "#12B8C8", badge: "info" as const },
  { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)", text: "#22C55E", badge: "success" as const },
  { bg: "rgba(246,180,27,0.08)", border: "rgba(246,180,27,0.2)", text: "#B45309", badge: "warning" as const },
];

export function InternshipTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {internships.map((internship, i) => {
        const colors = yearColors[i] || yearColors[0];
        const nextColors = yearColors[i + 1];
        const isLast = i === internships.length - 1;

        return (
          <MotionReveal key={internship.year} delay={i * 0.12}>
            <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "52px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: colors.text,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: `0 0 0 4px ${colors.bg}, 0 0 0 6px ${colors.border}`,
                    zIndex: 1,
                  }}
                >
                  {internship.year}
                </div>
                {!isLast && (
                  <div
                    style={{
                      width: "2px",
                      flex: 1,
                      minHeight: "32px",
                      margin: "6px 0",
                      background: nextColors
                        ? `linear-gradient(to bottom, ${colors.text}, ${nextColors.text})`
                        : colors.border,
                      borderRadius: "999px",
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  flex: 1,
                  paddingBottom: isLast ? 0 : "28px",
                }}
              >
                <div
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "20px",
                    padding: "24px",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <Badge variant={colors.badge}>السنة {internship.year}</Badge>
                    <h4 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{internship.name}</h4>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                      gap: "10px",
                      marginBottom: "14px",
                    }}
                  >
                    {[
                      { label: "المدة", value: internship.duration },
                      { label: "التوقيت", value: internship.timing },
                      { label: "الوزن", value: internship.weight },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "10px",
                          background: "rgba(255,255,255,0.6)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "var(--color-text-muted)",
                            marginBottom: "3px",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {label}
                        </p>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{value}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>
                      المتطلبات:
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {internship.requirements.map((r) => (
                        <span
                          key={r}
                          style={{
                            padding: "4px 12px",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 500,
                            background: "rgba(255,255,255,0.7)",
                            color: colors.text,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        );
      })}
    </div>
  );
}
