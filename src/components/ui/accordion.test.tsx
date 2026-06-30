import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

const items = [
  { question: "سؤال 1؟", answer: "جواب 1" },
  { question: "سؤال 2؟", answer: "جواب 2" },
];

describe("Accordion", () => {
  it("renders collapsed by default with answers in DOM for SEO", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByRole("button", { name: /سؤال 1؟/ });
    const panel = document.getElementById(trigger.getAttribute("aria-controls")!);

    expect(screen.getByText("سؤال 1؟")).toBeInTheDocument();
    expect(screen.getByText("جواب 1")).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");
  });

  it("expands on click and collapses on second click", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const trigger = screen.getByRole("button", { name: /سؤال 1؟/ });
    const panel = document.getElementById(trigger.getAttribute("aria-controls")!);

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(panel).toHaveAttribute("aria-hidden", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");
  });
});
