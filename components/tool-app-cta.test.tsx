// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ToolAppCta } from "./tool-app-cta";
import { SITE_CONFIG } from "@/lib/constants";

afterEach(cleanup);

describe("ToolAppCta", () => {
  it("keeps the App Store CTA primary and adds the secondary Pro upsell", () => {
    render(<ToolAppCta headline="Track your steps" description="Get the app." />);

    const appStore = screen.getByRole("link", {
      name: /download on the app store/i,
    });
    expect(appStore.getAttribute("href")).toBe(SITE_CONFIG.appStoreUrl);
    expect(appStore.getAttribute("data-fast-goal")).toBe("open-app-store");

    const pro = screen.getByRole("link", { name: /get pro/i });
    expect(pro.getAttribute("href")).toBe("/get-pro");
    expect(pro.getAttribute("data-fast-goal")).toBe("get-pro");
  });
});
