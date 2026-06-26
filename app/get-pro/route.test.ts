import { describe, it, expect } from "vitest";
import { GET } from "./route";
import { SITE_CONFIG } from "@/lib/constants";

describe("/get-pro", () => {
  it("redirects to the RevenueCat web checkout link", () => {
    const res = GET();
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(SITE_CONFIG.proWebCheckoutUrl);
  });
});
