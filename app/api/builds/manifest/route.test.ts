import { describe, it, expect } from "vitest";
import { GET } from "./route";
import { BUNDLE_ID } from "@/lib/builds";

function req(params: Record<string, string>) {
  const qs = new URLSearchParams(params).toString();
  return new Request(`https://getsteps.app/api/builds/manifest?${qs}`);
}

describe("/api/builds/manifest", () => {
  it("returns a plist manifest with bundle id, version, and ipa url", async () => {
    const res = GET(req({ url: "https://blob.example.com/x.ipa", version: "1.28" }));
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/xml");

    const body = await res.text();
    expect(body).toContain(BUNDLE_ID);
    expect(body).toContain("<string>1.28</string>");
    expect(body).toContain("https://blob.example.com/x.ipa");
    expect(body).toContain("software-package");
  });

  it("400s when version is missing", async () => {
    const res = GET(req({ url: "https://blob.example.com/x.ipa" }));
    expect(res.status).toBe(400);
  });
});
