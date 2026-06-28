// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { BlogProCta } from "./blog-pro-cta";

afterEach(cleanup);

describe("BlogProCta", () => {
  it("renders a heading and the Pro upsell, with no App Store link", () => {
    render(<BlogProCta />);

    expect(
      screen.getByRole("heading", { name: /get more from every walk/i }),
    ).toBeTruthy();

    const pro = screen.getByRole("link", { name: /get pro/i });
    expect(pro.getAttribute("href")).toBe("/get-pro");
    expect(pro.getAttribute("data-fast-goal")).toBe("get-pro");

    expect(
      screen.queryByRole("link", { name: /download on the app store/i }),
    ).toBeNull();
  });
});
