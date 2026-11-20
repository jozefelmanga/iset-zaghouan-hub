"use client";

import Link from "next/link";
import { ArrowLeft, GraduationCap, Users } from "@/lib/icons";
import { departmentList } from "@/data/departments";
import { clubDirectory } from "@/data/clubs";

import { textTint } from "@/lib/utils";
interface RelatedDepartmentsNavProps {
  currentDept?: "TI" | "SEG" | "GPR" | string;
}

export function RelatedDepartmentsNav({ currentDept }: RelatedDepartmentsNavProps) {
  const otherDepts = departmentList.filter(
    (dept) => dept.code.toUpperCase() !== currentDept?.toUpperCase()
  );

  return (
    <nav
      aria-label="أقسام علمية أخرى"
      style={{
        marginTop: "48px",
        marginBottom: "24px",
        padding: "24px",
        borderRadius: "20px",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: textTint("#3B82F6"),
            }}
          >
            <GraduationCap size={20} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              اكتشف أقسام ISET Zaghouan
            </h3>
            <p
              style={{
                fontSize: "12.5px",
                color: "var(--color-text-muted)",
                margin: "3px 0 0 0",
              }}
            >
              تصفح التخصصات والمسارات الأكاديمية الأخرى بالمعهد
            </p>
          </div>
        </div>

        <Link
          href="/departments"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-secondary-text)",
            textDecoration: "none",
          }}
        >
          <span>كل الأقسام</span>
          <ArrowLeft size={14} />
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
        }}
      >
        {otherDepts.map((dept) => (
          <Link
            key={dept.code}
            href={dept.href}
            style={{
              textDecoration: "none",
              display: "block",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                borderRadius: "12px",
                background: dept.bg,
                border: `1px solid ${dept.border}`,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: textTint(dept.color),
                    marginBottom: "2px",
                  }}
                >
                  قسم {dept.code}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {dept.arabicName}
                </div>
              </div>
              <span
                style={{
                  color: textTint(dept.color),
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowLeft size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

interface RelatedClubsNavProps {
  currentClubId?: string;
}

export function RelatedClubsNav({ currentClubId }: RelatedClubsNavProps) {
  const otherClubs = clubDirectory.filter(
    (club) => club.id !== currentClubId
  );

  return (
    <nav
      aria-label="نوادي طلابية أخرى"
      style={{
        marginTop: "48px",
        marginBottom: "24px",
        padding: "24px",
        borderRadius: "20px",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(18, 184, 200, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: textTint("#12B8C8"),
            }}
          >
            <Users size={20} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              اكتشف نوادي ISET Zaghouan
            </h3>
            <p
              style={{
                fontSize: "12.5px",
                color: "var(--color-text-muted)",
                margin: "3px 0 0 0",
              }}
            >
              طوّر مهاراتك وانضم للمجتمعات والأنشطة الطلابية الأخرى
            </p>
          </div>
        </div>

        <Link
          href="/clubs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-secondary-text)",
            textDecoration: "none",
          }}
        >
          <span>دليل النوادي الكامل</span>
          <ArrowLeft size={14} />
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
        }}
      >
        {otherClubs.map((club) => (
          <Link
            key={club.id}
            href={club.href}
            style={{
              textDecoration: "none",
              display: "block",
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                background: "color-mix(in srgb, var(--color-primary) 3%, transparent)",
                border: "1px solid var(--color-border)",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = club.color;
                e.currentTarget.style.background = "var(--color-surface)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.background = "color-mix(in srgb, var(--color-primary) 3%, transparent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {club.name}
              </div>
              <span
                style={{
                  color: textTint(club.color),
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowLeft size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
