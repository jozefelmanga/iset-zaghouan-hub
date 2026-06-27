import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

const items = [
  { question: "سؤال 1؟", answer: "جواب 1" },
  { question: "سؤال 2؟", answer: "جواب 2" },
];

describe("Accordion", () => {
  it("renders collapsed by default", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("سؤال 1؟")).toBeInTheDocument();
    expect(screen.queryByText("جواب 1")).not.toBeInTheDocument();
  });

  it("expands on click and collapses on second click", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const trigger = screen.getByRole("button", { name: /سؤال 1؟/ });
    await user.click(trigger);
    expect(screen.getByText("جواب 1")).toBeInTheDocument();

    await user.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText("جواب 1")).not.toBeInTheDocument();
    });
  });
});
