import { describe, it, expect } from "vitest";
import { buildPathname, parseBuildPathname, buildInstallUrl } from "@/lib/builds";

describe("buildPathname / parseBuildPathname", () => {
  it("round-trips version, build, sha", () => {
    const info = { version: "1.28", build: "137", sha: "14ac9f5a" };
    expect(parseBuildPathname(buildPathname(info))).toEqual(info);
  });

  it("returns null for non-matching pathnames", () => {
    expect(parseBuildPathname("builds/notes.txt")).toBeNull();
    expect(parseBuildPathname("other/Steps-1.0-1-abc.ipa")).toBeNull();
  });
});

describe("buildInstallUrl", () => {
  const PREFIX = "itms-services://?action=download-manifest&url=";

  it("wraps an https manifest URL in an itms-services link", () => {
    const ipaUrl = "https://blob.example.com/builds/Steps-1.28-137-abc.ipa";
    const url = buildInstallUrl({ ipaUrl, version: "1.28", siteUrl: "https://getsteps.app" });
    expect(url.startsWith(PREFIX)).toBe(true);

    const manifestUrl = decodeURIComponent(url.slice(PREFIX.length));
    expect(manifestUrl.startsWith("https://getsteps.app/api/builds/manifest?")).toBe(true);
    expect(manifestUrl).toContain("version=1.28");
    expect(manifestUrl).toContain(`url=${encodeURIComponent(ipaUrl)}`);
  });
});
