"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowLeft } from "@/lib/icons";
import { PageHeader, Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { departmentList } from "@/data/departments";
import { departmentIcons } from "@/lib/iconMaps";

export function DepartmentsPageContent() {
  return (
    <PageWrapper narrow>
      <PageHeader
        icon={GraduationCap}
        label="الأكاديمي"
        title="الأقسام العلمية"
        subtitle="اكتشف الأقسام والشعب المتوفرة بالمعهد العالي للعلوم التطبيقية والتكنولوجيا بزغوان"
        category="academic"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "36px" }}>
        {departmentList.map((dept, idx) => {
          const Icon = departmentIcons[dept.icon];
          return (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card elevation="raised" padding="30px">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: dept.bg,
                      border: `1px solid ${dept.border}`,
                      color: dept.color,
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
                          color: dept.color,
                          background: dept.bg,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          border: `1px solid ${dept.border}`,
                        }}
                      >
                        {dept.code}
                      </span>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)" }}>
                        {dept.arabicName}
                      </h3>
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
                            background: "rgba(11,31,58,0.04)",
                            color: "var(--color-text-secondary)",
                            border: "1px solid var(--color-border)",
                            fontWeight: 500,
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link href={dept.href} style={{ textDecoration: "none" }}>
                      <motion.div
                        whileHover={{ x: -4 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: dept.color,
                          cursor: "pointer",
                        }}
                      >
                        <span>عرض تفاصيل القسم والمواد</span>
                        <ArrowLeft size={14} />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Alert title="توجيه جامعي" variant="info">
        يقع اختيار الشعب والتخصصات في نهاية السنة الأولى جذع مشترك بالنسبة للأقسام العلمية (باستثناء المحاسبة والمالية التي تبدأ مباشرة من السنة الأولى).
      </Alert>
    </PageWrapper>
  );
}
