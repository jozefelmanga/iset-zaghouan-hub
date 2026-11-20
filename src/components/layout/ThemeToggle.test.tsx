import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

afterEach(() => {
  delete document.documentElement.dataset.theme;
  localStorage.clear();
});

describe("ThemeToggle", () => {
  it("cycles auto → light → dark → auto and remembers the choice", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    const root = document.documentElement;

    expect(button.getAttribute("title")).toContain("تلقائي");
    expect(root.dataset.theme).toBeUndefined();

    fireEvent.click(button);
    expect(root.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(button.getAttribute("title")).toContain("فاتح");

    fireEvent.click(button);
    expect(root.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(button);
    expect(root.dataset.theme).toBeUndefined();
    expect(localStorage.getItem("theme")).toBeNull();
  });

  it("starts from a theme set before hydration", () => {
    document.documentElement.dataset.theme = "dark";
    render(<ThemeToggle />);
    expect(screen.getByRole("button").getAttribute("title")).toContain("داكن");
  });
});
