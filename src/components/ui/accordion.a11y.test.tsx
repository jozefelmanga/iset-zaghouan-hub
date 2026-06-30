import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

const items = [
  { question: "سؤال تجريبي؟", answer: "إجابة تجريبية." },
];

describe("Accordion accessibility", () => {
  it("toggles aria-expanded on click", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const trigger = screen.getByRole("button", { name: /سؤال تجريبي/ });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("إجابة تجريبية.")).toBeInTheDocument();
  });
});
