import { instituteOfficial } from "@/data/official";

const linkStyle: React.CSSProperties = {
  color: "var(--color-secondary)",
  fontWeight: 600,
  textDecoration: "none",
};

export function DepartmentScheduleDisclaimer({ intro }: { intro: string }) {
  const { links } = instituteOfficial;

  return (
    <p style={{ fontSize: "14px", color: "var(--color-text-muted)", marginBottom: "20px", lineHeight: 1.7 }}>
      {intro}{" "}
      الجداول المعروضة هنا مجرد exemples d&apos;emploi du temps باش تاخذ فكرة عامة — ماهيش الجداول الرسمية. تابع{" "}
      <a href={links.facebook.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        صفحة ISET Zaghouan على Facebook
      </a>{" "}
      و{" "}
      <a href={links.website.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        الموقع الرسمي
      </a>{" "}
      باش تلقى emploi du temps متاعك.
    </p>
  );
}
