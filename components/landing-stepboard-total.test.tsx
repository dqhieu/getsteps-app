// @vitest-environment jsdom

import { StrictMode } from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LandingStepboardTotal } from "./landing-stepboard-total";

const { rpcMock } = vi.hoisted(() => ({ rpcMock: vi.fn() }));

vi.mock("../lib/supabase", () => ({
  getSupabase: () => ({ rpc: rpcMock }),
}));

afterEach(cleanup);

beforeEach(() => {
  rpcMock.mockReset();
});

describe("LandingStepboardTotal", () => {
  it("fetches once and exposes one readable aggregate", async () => {
    rpcMock.mockResolvedValue({
      data: "84261940",
      error: null,
      count: null,
      status: 200,
      statusText: "OK",
    });

    const { container } = render(
      <StrictMode>
        <LandingStepboardTotal />
      </StrictMode>,
    );

    await waitFor(() => expect(rpcMock).toHaveBeenCalledTimes(1));
    expect(rpcMock).toHaveBeenCalledWith(
      "get_public_stepboard_total_steps",
    );

    const counter = await screen.findByRole("img", {
      name: "84,261,940 steps walked by the Steps community",
    });
    expect(counter.getAttribute("aria-label")).toBe(
      "84,261,940 steps walked by the Steps community",
    );
    expect(
      container
        .querySelector('[data-testid="flip-counter-visual"]')
        ?.getAttribute("aria-hidden"),
    ).toBe("true");
    const characterTiles = container.querySelectorAll(
      ".stepboard-flip-digit",
    );
    expect(characterTiles).toHaveLength(10);
    expect(
      Array.from(characterTiles)
        .map((tile) => tile.textContent)
        .join(""),
    ).toBe("84,261,940");
    expect(
      screen.getByText("Total steps walked by Stepboard members"),
    ).toBeTruthy();
    expect(screen.queryByText("Walking together")).toBeNull();
    expect(
      screen.queryByText("steps walked by the Steps community"),
    ).toBeNull();
    expect(screen.queryByText("and counting")).toBeNull();
  });

  it("renders nothing when the RPC fails", async () => {
    rpcMock.mockResolvedValue({
      data: null,
      error: { code: "42501", details: null, hint: null, message: "denied" },
      count: null,
      status: 403,
      statusText: "Forbidden",
    });

    const { container } = render(<LandingStepboardTotal />);

    await waitFor(() => expect(container.firstElementChild).toBeNull());
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders nothing when the request throws", async () => {
    rpcMock.mockRejectedValue(new Error("network unavailable"));

    const { container } = render(<LandingStepboardTotal />);

    await waitFor(() => expect(container.firstElementChild).toBeNull());
  });

  it("rejects unsafe or malformed totals", async () => {
    rpcMock.mockResolvedValue({
      data: Number.MAX_SAFE_INTEGER + 1,
      error: null,
      count: null,
      status: 200,
      statusText: "OK",
    });

    const { container } = render(<LandingStepboardTotal />);

    await waitFor(() => expect(container.firstElementChild).toBeNull());
  });
});
