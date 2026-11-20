import Link from "next/link";
import { ArrowLeft } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { departmentIcons } from "@/lib/iconMaps";

import { textTint } from "@/lib/utils";
type Department = (typeof import("@/data/departments").departmentList)[number];

export function DepartmentCard({ dept, index }: { dept: Department; index: number }) {
  const Icon = departmentIcons[dept.icon];

  return (
    <div className="motion-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
      <Card elevation="raised" padding="30px">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: dept.bg,
              border: `1px solid ${dept.border}`,
              color: textTint(dept.color),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={28} strokeWidth={2} />
          </div>

          <div style={{ flex: "1 1 300px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: textTint(dept.color),
                  background: dept.bg,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  border: `1px solid ${dept.border}`,
                }}
              >
                {dept.code}
              </span>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)" }}>
                {dept.arabicName}
              </h2>
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
              {dept.name}
            </p>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              {dept.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {dept.specialties.map((spec) => (
                <span
                  key={spec}
                  style={{
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "color-mix(in srgb, var(--color-primary) 4%, transparent)",
                    color: "var(--color-text-secondary)",
                    border: "1px solid var(--color-border)",
                    fontWeight: 500,
                  }}
                >
                  {spec}
                </span>
              ))}
            </div>

            <Link href={dept.href} className="no-underline">
              <div
                className="inline-flex cursor-pointer items-center gap-2 text-[13px] font-semibold transition-[translate] duration-200 hover:-translate-x-1"
                style={{ color: textTint(dept.color) }}
              >
                <span>عرض تفاصيل القسم والمواد</span>
                <ArrowLeft size={14} />
              </div>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
