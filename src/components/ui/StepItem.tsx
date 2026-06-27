interface StepItemProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  active?: boolean;
}

export function StepItem({ number, title, description, isLast, active }: StepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all"
          style={{
            background: active ? "var(--color-secondary)" : "rgba(18,184,200,0.12)",
            color: active ? "#fff" : "var(--color-secondary)",
            boxShadow: active ? "0 0 0 4px rgba(18,184,200,0.15)" : "none",
          }}
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 my-2"
            style={{ background: "var(--color-border)", minHeight: "24px" }}
          />
        )}
      </div>
      <div className="pb-6 flex-1">
        <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "15px" }}>
          {title}
        </h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
