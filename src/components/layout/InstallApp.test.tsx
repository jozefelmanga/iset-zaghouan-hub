import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getInstallMode, INSTALL_HINTS } from "@/lib/install";
import { InstallCard, InstallMenuItem } from "./InstallApp";

const realUA = navigator.userAgent;
function setUA(ua: string) {
  Object.defineProperty(navigator, "userAgent", { value: ua, configurable: true });
}
function setStandalone(on: boolean) {
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: on && q.includes("standalone"),
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}
function fakePrompt() {
  const prompt = vi.fn().mockResolvedValue(undefined);
  window.__installPrompt = { prompt, userChoice: Promise.resolve({ outcome: "accepted" }) } as never;
  return prompt;
}

const ANDROID = "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/131 Mobile Safari/537.36";
const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
const FACEBOOK = `${ANDROID} [FBAN/FB4A;FBAV/450.0]`;

beforeEach(() => setStandalone(false));
afterEach(() => {
  setUA(realUA);
  window.__installPrompt = null;
  localStorage.clear();
});

describe("getInstallMode", () => {
  it("is hidden on Android until Chrome offers the prompt", () => {
    setUA(ANDROID);
    expect(getInstallMode()).toBe("hidden");
    fakePrompt();
    expect(getInstallMode()).toBe("prompt");
  });

  it("gives the Share hint on iPhone and the open-in-browser hint in Facebook", () => {
    setUA(IPHONE);
    expect(getInstallMode()).toBe("ios");
    setUA(FACEBOOK);
    expect(getInstallMode()).toBe("inapp");
  });

  it("is hidden once installed", () => {
    setUA(IPHONE);
    setStandalone(true);
    expect(getInstallMode()).toBe("hidden");
  });
});

describe("InstallMenuItem", () => {
  it("renders nothing when install isn't possible", () => {
    setUA(ANDROID);
    const { container } = render(<InstallMenuItem />);
    expect(container).toBeEmptyDOMElement();
  });

  it("opens the browser prompt on Android", async () => {
    setUA(ANDROID);
    const prompt = fakePrompt();
    render(<InstallMenuItem />);
    await act(async () => fireEvent.click(screen.getByRole("button")));
    expect(prompt).toHaveBeenCalledOnce();
  });

  it("shows the how-to on iPhone", () => {
    setUA(IPHONE);
    render(<InstallMenuItem />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(INSTALL_HINTS.ios)).toBeInTheDocument();
  });
});

describe("InstallCard", () => {
  it("closes for good", () => {
    setUA(IPHONE);
    const { unmount } = render(<InstallCard />);
    fireEvent.click(screen.getByRole("button", { name: /سكّر/ }));
    expect(screen.queryByRole("complementary")).toBeNull();
    expect(localStorage.getItem("install-card-dismissed")).toBe("1");
    unmount();
    render(<InstallCard />);
    expect(screen.queryByRole("complementary")).toBeNull();
  });
});
