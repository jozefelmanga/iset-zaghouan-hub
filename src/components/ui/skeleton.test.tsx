import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageSkeleton, SkeletonBox } from "./Skeleton";

describe("SkeletonBox", () => {
  it("renders with aria-hidden", () => {
    const { container } = render(<SkeletonBox />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});

describe("PageSkeleton", () => {
  it("renders with loading aria-label", () => {
    render(<PageSkeleton />);
    expect(screen.getByLabelText("تحميل...")).toBeInTheDocument();
  });
});
