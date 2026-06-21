// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("../lib/supabase", () => ({
  getSupabase: () => ({
    rpc: vi.fn().mockResolvedValue({
      data: "84261940",
      error: null,
      count: null,
      status: 200,
      statusText: "OK",
    }),
  }),
}));

afterEach(cleanup);

describe("landing page composition", () => {
  it("places the Stepboard total after screenshots and before trust", () => {
    render(<Home />);

    const screenshots = screen
      .getByAltText("Steps app showing daily step count dashboard")
      .closest("section");
    const counter = screen
      .getByRole("heading", { name: "Stepboard community step total" })
      .closest("section");
    const trust = screen.getByText("FEATURED IN").closest("section");

    expect(screenshots).not.toBeNull();
    expect(counter).not.toBeNull();
    expect(trust).not.toBeNull();
    expect(
      screenshots!.compareDocumentPosition(counter!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      counter!.compareDocumentPosition(trust!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
