"use client";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  type?: "info" | "warning" | "success";
  isLast?: boolean;
}

export function TimelineItem({ time, title, description, type = "info", isLast }: TimelineItemProps) {
  const colors: Record<string, string> = {
    info:    "var(--color-secondary)",
    warning: "var(--color-accent)",
    success: "#22C55E",
  };
  const color = colors[type];

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1.5"
          style={{ background: color, boxShadow: `0 0 0 3px ${color}22`, flexShrink: 0 }}
        />
        {!isLast && (
          <div className="w-px flex-1 my-1" style={{ background: "var(--color-border)", minHeight: "32px" }} />
        )}
      </div>
      <div className="pb-6 flex-1">
        <p style={{ fontSize: "11px", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: "3px" }}>{time}</p>
        <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "3px" }}>{title}</h4>
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}
