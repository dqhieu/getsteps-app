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
  it("places the Stepboard total after the final CTA and before the footer", async () => {
    render(<Home />);

    const cta = screen
      .getByRole("heading", { name: "Ready to track every step?" })
      .closest("section");
    const counter = (
      await screen.findByRole("img", {
        name: "84,261,940 steps walked by the Steps community",
      })
    ).closest("section");
    const footer = screen.getByRole("contentinfo");

    expect(cta).not.toBeNull();
    expect(counter).not.toBeNull();
    expect(
      cta!.compareDocumentPosition(counter!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      counter!.compareDocumentPosition(footer) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
