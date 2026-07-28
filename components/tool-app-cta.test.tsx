// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ToolAppCta, ToolStickyCta } from "./tool-app-cta";
import { SITE_CONFIG } from "@/lib/constants";

afterEach(cleanup);

describe("ToolAppCta", () => {
  it("points the App Store CTA at the free download", () => {
    render(<ToolAppCta headline="Track your steps" description="Get the app." />);

    const appStore = screen.getByRole("link", {
      name: /download on the app store/i,
    });
    expect(appStore.getAttribute("href")).toBe(SITE_CONFIG.appStoreUrl);
    expect(appStore.getAttribute("data-fast-goal")).toBe("open-app-store");
  });

  it("keeps the mobile sticky bar on the free download", () => {
    render(<ToolStickyCta label="Track your steps with Steps" />);

    const sticky = screen.getByRole("link", {
      name: /download on the app store/i,
    });
    expect(sticky.getAttribute("href")).toBe(SITE_CONFIG.appStoreUrl);
    expect(sticky.getAttribute("data-fast-goal")).toBe("open-app-store");
  });
});
