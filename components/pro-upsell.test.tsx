// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProUpsell } from "./pro-upsell";

afterEach(cleanup);

describe("ProUpsell", () => {
  it("links to /get-pro and fires the get-pro conversion goal", () => {
    render(<ProUpsell />);
    const link = screen.getByRole("link", { name: /get pro/i });
    expect(link.getAttribute("href")).toBe("/get-pro");
    expect(link.getAttribute("data-fast-goal")).toBe("get-pro");
  });

  it("shows the warm lead-in and discount copy", () => {
    render(<ProUpsell />);
    expect(screen.getByText("Already using Steps?")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /20% off the App Store/i }),
    ).toBeTruthy();
  });
});
