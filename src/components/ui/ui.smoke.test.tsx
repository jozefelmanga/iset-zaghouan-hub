import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert } from "./Alert";
import { Badge } from "./Badge";
import { StaticPageHeader } from "./StaticPageHeader";
import { StepItem } from "./StepItem";
import { TimelineItem } from "./TimelineItem";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>نشط</Badge>);
    expect(screen.getByText("نشط")).toBeInTheDocument();
  });

  it("applies variant styling", () => {
    render(<Badge variant="success">OK</Badge>);
    const badge = screen.getByText("OK");
    expect(badge).toHaveStyle({ color: "#16A34A" });
  });
});

describe("Alert", () => {
  it("renders title and children", () => {
    render(
      <Alert title="تنبيه">
        <p>محتوى التنبيه</p>
      </Alert>
    );
    expect(screen.getByText("تنبيه")).toBeInTheDocument();
    expect(screen.getByText("محتوى التنبيه")).toBeInTheDocument();
  });
});

describe("StepItem", () => {
  it("renders number, title, and description", () => {
    render(
      <StepItem number={1} title="الخطوة الأولى" description="وصف الخطوة" />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("الخطوة الأولى")).toBeInTheDocument();
    expect(screen.getByText("وصف الخطوة")).toBeInTheDocument();
  });
});

describe("TimelineItem", () => {
  it("renders time, title, and description", () => {
    render(
      <TimelineItem
        time="10:00"
        title="إعلان"
        description="تفاصيل الإعلان"
      />
    );
    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("إعلان")).toBeInTheDocument();
    expect(screen.getByText("تفاصيل الإعلان")).toBeInTheDocument();
  });
});

describe("StaticPageHeader", () => {
  it("renders title and subtitle", () => {
    render(
      <StaticPageHeader
        icon="help-circle"
        title="الأسئلة الشائعة"
        subtitle="مساعدة للطلبة الجدد"
      />
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("الأسئلة الشائعة");
    expect(screen.getByText("مساعدة للطلبة الجدد")).toBeInTheDocument();
  });
});
