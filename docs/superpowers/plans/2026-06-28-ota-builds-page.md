# OTA Builds Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an auth-gated `/dashboard/builds` page on getsteps.app that lists recent ad-hoc Steps builds and installs them over-the-air on a registered iPhone, with builds published automatically from the Steps `build-adhoc-ipa.sh` flow.

**Architecture:** IPAs are uploaded to Vercel Blob (public HTTPS, required for OTA) by a Node publish script invoked at the end of the Steps build script. The build list is derived entirely from Blob (`list()`), with version/build/commit encoded in the blob pathname. A server component renders the list behind the existing `/dashboard/*` Basic Auth; a public `/api/builds/manifest` route emits the per-build `manifest.plist` that iOS's `itunesstored` fetches.

**Tech Stack:** Next.js 16 (App Router, RSC), TypeScript, Vercel Blob (`@vercel/blob`), vitest, Tailwind v4. Build side: bash + Node 22 (`--env-file`), `xcodebuild`.

## Global Constraints

- Bundle id is exactly `com.hieudinh.Steps`; app title is exactly `Steps`.
- Blob pathname format is exactly `builds/Steps-<version>-<build>-<sha>.ipa` and MUST be identical in `lib/builds.ts` (`buildPathname`) and `scripts/publish-build.mjs`.
- Retention: keep the 5 most recent builds; prune older blobs on each upload.
- The manifest route and IPA URLs must stay public (under `/api/*`, which middleware excludes from auth); the listing page must stay under `/dashboard/*` (Basic Auth).
- The manifest `software-package` URL and the manifest URL itself must be HTTPS.
- Tests are co-located as `*.test.ts(x)` next to source; import via the `@/` alias.
- The publish step in the Steps build script must be non-fatal: a missing dir/script/token prints a notice and the build still exits 0.
- No em-dashes in any prose (comments, docs, copy).

---

## Manual setup (one-time, done by the human before/after Task 2)

These cannot be scripted and are prerequisites for end-to-end verification:

1. **Create a Vercel Blob store** for the getsteps-app project (Vercel dashboard → Storage → Create → Blob → connect to project). This auto-provisions `BLOB_READ_WRITE_TOKEN` in the Vercel project env.
2. **Pull the token locally:** run `vercel env pull getsteps-app/.env.local` (or paste `BLOB_READ_WRITE_TOKEN=...` into `getsteps-app/.env.local`). Needed by the page locally and by the publish script on the build machine.
3. **Register device UDIDs** at developer.apple.com → Devices before building, or installs will fail regardless of this feature.

---

## Task 1: Build naming + URL helpers (`lib/builds.ts`)

Pure, I/O-free helpers shared by the page, the manifest route, and (by format contract) the publish script. TDD.

**Files:**
- Create: `getsteps-app/lib/builds.ts`
- Test: `getsteps-app/lib/builds.test.ts`

**Interfaces:**
- Produces:
  - `BUNDLE_ID: string` = `"com.hieudinh.Steps"`, `TITLE: string` = `"Steps"`, `BUILD_PREFIX: string` = `"builds/"`
  - `interface BuildInfo { version: string; build: string; sha: string }`
  - `buildPathname(info: BuildInfo): string`
  - `parseBuildPathname(pathname: string): BuildInfo | null`
  - `buildInstallUrl(args: { ipaUrl: string; version: string; siteUrl?: string }): string`

- [ ] **Step 1: Write the failing test**

Create `getsteps-app/lib/builds.test.ts`:

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd getsteps-app && npx vitest run lib/builds.test.ts`
Expected: FAIL — cannot resolve `@/lib/builds`.

- [ ] **Step 3: Write the implementation**

Create `getsteps-app/lib/builds.ts`:

```ts
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd getsteps-app && npx vitest run lib/builds.test.ts`
Expected: PASS (4 assertions across 3 tests).

- [ ] **Step 5: Commit**

```bash
cd getsteps-app
git add lib/builds.ts lib/builds.test.ts
git commit -m "feat: add OTA build naming and install-url helpers"
```

---

## Task 2: Publish script + `@vercel/blob` dependency

A Node CLI that uploads an IPA to Blob and prunes to the 5 most recent. Verified manually (needs a real Blob token).

**Files:**
- Modify: `getsteps-app/package.json` (add dependency)
- Create: `getsteps-app/scripts/publish-build.mjs`

**Interfaces:**
- Consumes: the pathname format from Task 1 (`builds/Steps-<version>-<build>-<sha>.ipa`).
- Produces (CLI): `node scripts/publish-build.mjs <ipaPath> <version> <build> <sha>` — uploads and prints the public blob URL; exits non-zero on missing args or token.

- [ ] **Step 1: Install the dependency**

Run: `cd getsteps-app && npm install @vercel/blob`
Expected: `@vercel/blob` added to `package.json` dependencies; lockfile updated.

- [ ] **Step 2: Write the publish script**

Create `getsteps-app/scripts/publish-build.mjs`:

```js
#!/usr/bin/env node
// Upload an ad-hoc IPA to Vercel Blob and keep only the 5 most recent builds.
// Usage: node scripts/publish-build.mjs <ipaPath> <version> <build> <sha>
// Requires BLOB_READ_WRITE_TOKEN in the environment (the SDK reads it automatically).
//
// Pathname format MUST match buildPathname() in lib/builds.ts:
//   builds/Steps-<version>-<build>-<sha>.ipa

import { readFile } from "node:fs/promises";
import { put, list, del } from "@vercel/blob";

const KEEP = 5;
const PREFIX = "builds/";

const [ipaPath, version, build, sha] = process.argv.slice(2);
if (!ipaPath || !version || !build || !sha) {
  console.error("usage: node scripts/publish-build.mjs <ipaPath> <version> <build> <sha>");
  process.exit(1);
}
if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("error: BLOB_READ_WRITE_TOKEN is not set");
  process.exit(1);
}

const pathname = `${PREFIX}Steps-${version}-${build}-${sha}.ipa`;
const data = await readFile(ipaPath);

const { url } = await put(pathname, data, {
  access: "public",
  contentType: "application/octet-stream",
  addRandomSuffix: false,
  allowOverwrite: true,
});
console.log(`uploaded ${pathname}`);
console.log(`  ${url}`);

// Prune: keep the KEEP most recent by uploadedAt.
const { blobs } = await list({ prefix: PREFIX });
const stale = blobs
  .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt))
  .slice(KEEP);
for (const b of stale) {
  await del(b.url);
  console.log(`pruned ${b.pathname}`);
}
```

- [ ] **Step 3: Verify arg/token guards without a token**

Run: `cd getsteps-app && node scripts/publish-build.mjs`
Expected: prints the usage line, exits 1.

Run: `cd getsteps-app && env -u BLOB_READ_WRITE_TOKEN node scripts/publish-build.mjs /tmp/x.ipa 1.0 1 abc`
Expected: prints `error: BLOB_READ_WRITE_TOKEN is not set`, exits 1.

- [ ] **Step 4: Manual end-to-end upload (requires the token from Manual Setup)**

Run: `cd getsteps-app && node --env-file=.env.local scripts/publish-build.mjs ../Steps/build/adhoc/Steps.ipa 1.28 137 testsha`
Expected: prints `uploaded builds/Steps-1.28-137-testsha.ipa` and a `https://...public.blob.vercel-storage.com/...` URL. Re-running publishes 6+ builds with varied version/build and confirms only 5 remain (older ones print `pruned ...`).

- [ ] **Step 5: Commit**

```bash
cd getsteps-app
git add package.json package-lock.json scripts/publish-build.mjs
git commit -m "feat: add Vercel Blob publish script for ad-hoc builds"
```

---

## Task 3: Manifest route (`/api/builds/manifest`)

Public route emitting the OTA `manifest.plist`. TDD using the repo's route-handler test pattern.

**Files:**
- Create: `getsteps-app/app/api/builds/manifest/route.ts`
- Test: `getsteps-app/app/api/builds/manifest/route.test.ts`

**Interfaces:**
- Consumes: `BUNDLE_ID`, `TITLE` from Task 1.
- Produces: `GET(request: Request): NextResponse` — `text/xml` plist on success, 400 when `url` or `version` is missing.

- [ ] **Step 1: Write the failing test**

Create `getsteps-app/app/api/builds/manifest/route.test.ts`:

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd getsteps-app && npx vitest run app/api/builds/manifest/route.test.ts`
Expected: FAIL — cannot resolve `./route`.

- [ ] **Step 3: Write the route**

Create `getsteps-app/app/api/builds/manifest/route.ts`:

```ts
import { NextResponse } from "next/server";
import { BUNDLE_ID, TITLE } from "@/lib/builds";

// Public (excluded from Basic Auth in middleware): iOS's itunesstored fetches
// this without credentials. The ad-hoc provisioning profile is the real install
// gate, so emitting a manifest for a caller-supplied IPA URL is safe here.
export function GET(request: Request): NextResponse {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const version = searchParams.get("version");

  if (!url || !version) {
    return new NextResponse("missing url or version", { status: 400 });
  }

  return new NextResponse(manifestPlist({ ipaUrl: url, version }), {
    status: 200,
    headers: { "content-type": "text/xml; charset=utf-8" },
  });
}

function manifestPlist({ ipaUrl, version }: { ipaUrl: string; version: string }): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>items</key>
  <array>
    <dict>
      <key>assets</key>
      <array>
        <dict>
          <key>kind</key>
          <string>software-package</string>
          <key>url</key>
          <string>${ipaUrl}</string>
        </dict>
      </array>
      <key>metadata</key>
      <dict>
        <key>bundle-identifier</key>
        <string>${BUNDLE_ID}</string>
        <key>bundle-version</key>
        <string>${version}</string>
        <key>kind</key>
        <string>software</string>
        <key>title</key>
        <string>${TITLE}</string>
      </dict>
    </dict>
  </array>
</dict>
</plist>`;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd getsteps-app && npx vitest run app/api/builds/manifest/route.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
cd getsteps-app
git add app/api/builds/manifest/route.ts app/api/builds/manifest/route.test.ts
git commit -m "feat: add public OTA manifest route"
```

---

## Task 4: Builds listing page (`/dashboard/builds`)

Server component rendering the Blob-derived build list with Install buttons. Behind existing Basic Auth. Verified manually (needs token + blobs).

**Files:**
- Create: `getsteps-app/app/dashboard/builds/page.tsx`

**Interfaces:**
- Consumes: `BUILD_PREFIX`, `parseBuildPathname`, `buildInstallUrl` from Task 1; `list` from `@vercel/blob`.
- Produces: default-exported async React server component.

- [ ] **Step 1: Write the page**

Create `getsteps-app/app/dashboard/builds/page.tsx`:

```tsx
import { list } from "@vercel/blob";
import { BUILD_PREFIX, parseBuildPathname, buildInstallUrl } from "@/lib/builds";

export const dynamic = "force-dynamic";

export default async function BuildsPage() {
  const { blobs } = await list({ prefix: BUILD_PREFIX });

  const builds = blobs
    .map((b) => {
      const info = parseBuildPathname(b.pathname);
      if (!info) return null;
      return {
        ...info,
        uploadedAt: b.uploadedAt,
        size: b.size,
        installUrl: buildInstallUrl({ ipaUrl: b.url, version: info.version }),
      };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null)
    .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt));

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-1 text-2xl font-semibold">Steps builds</h1>
      <p className="mb-6 text-sm text-gray-500">
        Open this page in Safari on a registered iPhone, then tap Install.
      </p>

      {builds.length === 0 ? (
        <p className="text-gray-500">No builds published yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {builds.map((b) => (
            <li
              key={`${b.version}-${b.build}-${b.sha}`}
              className="flex items-center justify-between py-4"
            >
              <div>
                <div className="font-medium">
                  {b.version} <span className="text-gray-400">({b.build})</span>
                </div>
                <div className="text-sm text-gray-500">
                  {b.sha} · {formatDate(b.uploadedAt)} · {formatSize(b.size)}
                </div>
              </div>
              <a
                href={b.installUrl}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                Install
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function formatDate(d: Date | string): string {
  return new Date(d).toLocaleString();
}

function formatSize(bytes: number): string {
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}
```

- [ ] **Step 2: Typecheck + build**

Run: `cd getsteps-app && npx tsc --noEmit`
Expected: no errors.

Run: `cd getsteps-app && npm run build`
Expected: build succeeds; `/dashboard/builds` and `/api/builds/manifest` appear in the route output.

- [ ] **Step 3: Manual verification (requires token + at least one published build from Task 2)**

Run: `cd getsteps-app && npm run dev`
- Visit `http://localhost:3000/dashboard/builds`, authenticate with `DASHBOARD_USER` / `DASHBOARD_PASSWORD`.
- Expected: the published test build(s) listed newest-first with version, build, sha, date, size, and an Install button. With no blobs, the empty state shows instead.

- [ ] **Step 4: Commit**

```bash
cd getsteps-app
git add app/dashboard/builds/page.tsx
git commit -m "feat: add OTA builds listing page"
```

---

## Task 5: Auto-publish from the Steps build script

Append a non-fatal publish step to the Steps ad-hoc build script. Different repo (`/Users/hieudinh/Projects/Steps`).

**Files:**
- Modify: `Steps/scripts/build-adhoc-ipa.sh` (after the final "Done" echo block)

**Interfaces:**
- Consumes: `getsteps-app/scripts/publish-build.mjs` (Task 2) and its `.env.local` token.

- [ ] **Step 1: Create a branch in the Steps repo**

```bash
cd /Users/hieudinh/Projects/Steps
git checkout -b feat/adhoc-ota-publish
```

- [ ] **Step 2: Append the publish step**

Add to the end of `Steps/scripts/build-adhoc-ipa.sh` (after the block that prints the IPA path):

```bash

# --- Optional: publish the IPA to getsteps.app for OTA install ---
GETSTEPS_APP_DIR="${GETSTEPS_APP_DIR:-../getsteps-app}"
PUBLISH_SCRIPT="$GETSTEPS_APP_DIR/scripts/publish-build.mjs"

if [[ -n "${IPA_PATH:-}" && -f "$PUBLISH_SCRIPT" ]]; then
  echo ""
  echo "==> Publishing to getsteps.app (OTA)"
  APP_PLIST="$ARCHIVE_PATH/Products/Applications/Steps.app/Info.plist"
  VERSION="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleShortVersionString' "$APP_PLIST" 2>/dev/null || true)"
  BUILD="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleVersion' "$APP_PLIST" 2>/dev/null || true)"
  SHA="$(git rev-parse --short HEAD 2>/dev/null || echo nogit)"
  ENV_FILE="$GETSTEPS_APP_DIR/.env.local"

  NODE_ARGS=()
  [[ -f "$ENV_FILE" ]] && NODE_ARGS+=(--env-file "$ENV_FILE")

  if [[ -n "$VERSION" && -n "$BUILD" ]]; then
    node ${NODE_ARGS[@]+"${NODE_ARGS[@]}"} "$PUBLISH_SCRIPT" "$IPA_PATH" "$VERSION" "$BUILD" "$SHA" \
      || echo "    publish failed (build still succeeded)"
  else
    echo "    skipped: could not read version/build from $APP_PLIST"
  fi
else
  echo ""
  echo "==> Skipping OTA publish (set GETSTEPS_APP_DIR or add $PUBLISH_SCRIPT)"
fi
```

- [ ] **Step 3: Verify script syntax**

Run: `cd /Users/hieudinh/Projects/Steps && bash -n scripts/build-adhoc-ipa.sh && echo OK`
Expected: `OK`.

- [ ] **Step 4: Sanity-check the publish block in isolation**

Copy just the appended block into a scratch file and run it with the publish target absent, to confirm the skip path is non-fatal under `set -euo pipefail`:

```bash
cd /Users/hieudinh/Projects/Steps
tail -n 25 scripts/build-adhoc-ipa.sh > /tmp/publish-block.sh
GETSTEPS_APP_DIR=/nonexistent IPA_PATH=x ARCHIVE_PATH=y \
  bash -c 'set -euo pipefail; source /tmp/publish-block.sh'
```

Expected: prints the "Skipping OTA publish" notice and exits 0 (no unbound-variable error). Adjust the `tail -n` count if the block is longer.

- [ ] **Step 5: Full end-to-end (manual, requires a registered device + Blob token)**

Run: `cd /Users/hieudinh/Projects/Steps && scripts/build-adhoc-ipa.sh`
Expected: build succeeds, then "Publishing to getsteps.app (OTA)" prints `uploaded builds/Steps-<v>-<build>-<sha>.ipa`. Open `/dashboard/builds` on the phone, tap Install, confirm the app installs and launches.

- [ ] **Step 6: Commit (Steps repo)**

```bash
cd /Users/hieudinh/Projects/Steps
git add scripts/build-adhoc-ipa.sh
git commit -m "feat: auto-publish ad-hoc IPA to getsteps.app for OTA install"
```

If the ad-hoc scaffolding files (`scripts/make-ota-manifest.sh`, `ExportOptions/ExportOptions-AdHoc.plist`, and the initial `scripts/build-adhoc-ipa.sh`) are still untracked, stage them in the same commit.

---

## Final verification

- [ ] `cd getsteps-app && npm test` — all tests pass (existing + new `lib/builds.test.ts`, `app/api/builds/manifest/route.test.ts`).
- [ ] `cd getsteps-app && npm run build` — production build succeeds with both new routes.
- [ ] Manual: a fresh build published from `Steps/scripts/build-adhoc-ipa.sh` appears at `/dashboard/builds` and installs OTA on a registered iPhone; publishing a 6th build prunes the oldest.

## Self-review notes

- Spec coverage: storage (Task 2), Blob-only list source (Task 4), auto-publish trigger (Task 5), keep-last-5 prune (Task 2), `/dashboard/builds` behind auth + public manifest under `/api` (Tasks 3, 4), filename contract + install URL (Task 1). UDID/first-launch-trust are out of scope per spec and noted in Manual Setup.
- Type consistency: `BuildInfo`, `buildPathname`, `parseBuildPathname`, `buildInstallUrl`, `BUILD_PREFIX`, `BUNDLE_ID`, `TITLE` defined in Task 1 and consumed unchanged in Tasks 3 and 4. The manifest route requires `url` + `version` only, matching the params `buildInstallUrl` emits.
