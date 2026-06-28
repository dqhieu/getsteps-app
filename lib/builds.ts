// Single source of truth for the OTA build naming + install-URL contract,
// shared by app/dashboard/builds/page.tsx, app/api/builds/manifest/route.ts,
// and (by format) scripts/publish-build.mjs.

export const BUNDLE_ID = "com.hieudinh.Steps";
export const TITLE = "Steps";
export const BUILD_PREFIX = "builds/";

const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getsteps.app";

export interface BuildInfo {
  version: string; // marketing version, e.g. "1.28"
  build: string; // build number, e.g. "137"
  sha: string; // short git sha, e.g. "14ac9f5a"
}

// builds/Steps-<version>-<build>-<sha>.ipa  (must match scripts/publish-build.mjs)
export function buildPathname({ version, build, sha }: BuildInfo): string {
  return `${BUILD_PREFIX}Steps-${version}-${build}-${sha}.ipa`;
}

const PATHNAME_RE = /^builds\/Steps-(.+)-(\d+)-([0-9a-f]+)\.ipa$/;

export function parseBuildPathname(pathname: string): BuildInfo | null {
  const m = pathname.match(PATHNAME_RE);
  if (!m) return null;
  return { version: m[1], build: m[2], sha: m[3] };
}

export function buildInstallUrl({
  ipaUrl,
  version,
  siteUrl = DEFAULT_SITE_URL,
}: {
  ipaUrl: string;
  version: string;
  siteUrl?: string;
}): string {
  const manifestUrl =
    `${siteUrl}/api/builds/manifest` +
    `?url=${encodeURIComponent(ipaUrl)}` +
    `&version=${encodeURIComponent(version)}`;
  return `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestUrl)}`;
}
