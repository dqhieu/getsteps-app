// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("../../lib/supabase", () => ({
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

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound");
  },
}));

afterEach(cleanup);

describe("landing page composition", () => {
  it("places the Stepboard total after the final CTA and before the footer", async () => {
    render(await Home({ params: Promise.resolve({ lang: "en" }) }));

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

  it("renders the landing copy in the requested locale", async () => {
    render(await Home({ params: Promise.resolve({ lang: "de" }) }));

    expect(
      screen.getByRole("heading", { name: "Bereit, jeden Schritt zu zählen?" }),
    ).toBeTruthy();
    expect(
      await screen.findByRole("img", {
        name: "84.261.940 Schritte, gegangen von der Steps-Community",
      }),
    ).toBeTruthy();
  });
});
