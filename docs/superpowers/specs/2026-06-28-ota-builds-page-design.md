# OTA Builds Page — Design

Date: 2026-06-28
Status: Approved (pending spec review)

## Goal

Add an internal page on getsteps.app that lists recent ad-hoc Steps builds with their
uploaded date, so a build can be installed over-the-air by tapping it in Safari on a
registered iPhone. Builds are published automatically as part of the existing
`build-adhoc-ipa.sh` flow in the Steps repo.

## Decisions (locked)

- **IPA hosting:** Vercel Blob (public, valid-HTTPS URLs required for OTA).
- **Build list source of truth:** Vercel Blob only — no database. Metadata is encoded in
  the blob pathname; the upload date is Blob's `uploadedAt`.
- **Upload trigger:** automatic, appended to `Steps/scripts/build-adhoc-ipa.sh`.
- **Retention:** keep the 5 most recent builds; prune older ones (blob + nothing else) on
  each upload.
- **Page location:** `/dashboard/builds`, behind the existing HTTP Basic Auth.

## Architecture

```
Steps/scripts/build-adhoc-ipa.sh
   └─ after a successful export, reads version / build / git-sha, then calls →
      getsteps-app/scripts/publish-build.mjs <ipa> <version> <build> <sha>
            └─ uploads to Vercel Blob at  builds/Steps-<version>-<build>-<sha>.ipa
            └─ prunes to the 5 most recent builds

getsteps.app
   ├─ /dashboard/builds        page, behind Basic Auth (middleware /dashboard/* gate)
   │      server component → Blob list({prefix:'builds/'}) → table + Install buttons
   └─ /api/builds/manifest     route, PUBLIC (middleware excludes /api/*)
          GET ?url=&version=&build=  → returns manifest.plist (text/xml)
```

### Why the auth split

The listing page sits behind the existing `/dashboard/*` Basic Auth, keeping the build
inventory private. The manifest route lives under `/api/*`, which `middleware.ts`
deliberately excludes from auth — this is required because iOS's `itunesstored` daemon
fetches the manifest and the IPA itself and will not send Basic Auth credentials. The real
install gate remains the ad-hoc provisioning profile: only UDIDs registered at build time
can install, so a public manifest/IPA URL is acceptable for an internal tool.

## Components

### `getsteps-app/lib/builds.ts`
Pure, unit-testable helpers and constants. No I/O.
- `BUNDLE_ID = "com.hieudinh.Steps"`, `TITLE = "Steps"`.
- `BUILD_PREFIX = "builds/"`, filename pattern `Steps-<version>-<build>-<sha>.ipa`.
- `parseBuildPathname(pathname) -> { version, build, sha } | null` — returns null on a
  pathname that doesn't match (caller skips it).
- `buildInstallUrl({ siteUrl, ipaUrl, version, build }) -> string` — constructs the
  `itms-services://?action=download-manifest&url=<encoded manifest URL>` string, with the
  manifest URL pointing at `/api/builds/manifest` and its params correctly encoded.
- `siteUrl` source: `process.env.NEXT_PUBLIC_SITE_URL ?? "https://getsteps.app"`.

### `getsteps-app/scripts/publish-build.mjs`
Node script, run from the build machine. Usage:
`node scripts/publish-build.mjs <ipaPath> <version> <build> <sha>`
- Reads `BLOB_READ_WRITE_TOKEN` from the environment.
- `put("builds/Steps-<version>-<build>-<sha>.ipa", fileStream, { access: "public",
  contentType: "application/octet-stream", addRandomSuffix: false })`.
- After upload: `list({ prefix: "builds/" })`, sort by `uploadedAt` desc, `del(url)` for
  everything past index 4 (keep 5).
- Prints the resulting public blob URL.
- Idempotency: re-publishing the same version/build/sha overwrites the same pathname
  (`addRandomSuffix: false`), so it does not create duplicates.

### `getsteps-app/app/dashboard/builds/page.tsx`
Async server component.
- Calls Blob `list({ prefix: "builds/" })` (server-side, uses the token).
- Maps each blob through `parseBuildPathname`; skips unparseable entries.
- Sorts by `uploadedAt` desc.
- Renders a mobile-friendly table: version · build · commit (short sha) · uploaded date ·
  size, each row with an **Install** button: `<a href={buildInstallUrl(...)}>`.
- Empty state when there are no builds.
- `export const dynamic = "force-dynamic"` so the list is always fresh.

### `getsteps-app/app/api/builds/manifest/route.ts`
- `GET` handler reading `url`, `version`, `build` from `searchParams`.
- Returns the OTA manifest plist as `text/xml; charset=utf-8`.
- Validates the three params are present; returns 400 if not.
- The plist `software-package` asset URL is the `url` param (the public blob IPA URL);
  `bundle-identifier` = `BUNDLE_ID`, `bundle-version` = `version`, `title` = `TITLE`.

### `Steps/scripts/build-adhoc-ipa.sh` (modify)
After the existing export step:
- Resolve the getsteps-app dir from `GETSTEPS_APP_DIR` (default `../getsteps-app`).
- If that dir and `scripts/publish-build.mjs` exist, extract version/build via PlistBuddy
  from the IPA's `Info.plist` and the short git sha (`git rev-parse --short HEAD`), then
  `node "$GETSTEPS_APP_DIR/scripts/publish-build.mjs" <ipa> <version> <build> <sha>`.
- The publish step is best-effort: if the dir/script/token is missing it prints a notice
  and exits 0, so plain local builds still succeed without publishing.

## Data flow (install)

Build IPA → `publish-build.mjs` uploads to Blob + prunes → open `/dashboard/builds` in
Safari **on the phone** (Basic Auth prompts once) → tap **Install** →
`itms-services://?action=download-manifest&url=https://getsteps.app/api/builds/manifest?…`
→ `itunesstored` fetches the manifest (public) → fetches the IPA from Blob (public) →
installs, if the phone's UDID is in the embedded ad-hoc profile.

## Out of scope / unchanged

- **UDID registration is still required.** A build only installs on UDIDs registered when
  `build-adhoc-ipa.sh` ran. New device → register UDID → rebuild → republish.
- **First-launch trust** of the dev certificate (Settings → General → VPN & Device
  Management), once per device.
- No QR code, no tester management, no per-build release notes in this iteration.

## Environment / config

- `BLOB_READ_WRITE_TOKEN` — added to getsteps-app `.env.local` and the Vercel project
  (auto-provisioned when a Blob store is linked). Needed by the page, the manifest route is
  param-only and does not need it, and the publish script needs it on the build machine.
- `NEXT_PUBLIC_SITE_URL` — optional; defaults to `https://getsteps.app`.
- `GETSTEPS_APP_DIR` — optional override in the Steps build script; defaults to
  `../getsteps-app`.

## Error handling / edge cases

- No builds → page renders an empty state.
- A blob whose pathname doesn't match the pattern → skipped (defensive against manual
  uploads or future naming changes).
- Manifest route missing params → 400.
- Publish step with no token/dir → notice + exit 0 (non-fatal).
- Re-publishing identical version/build/sha → overwrites the same pathname, no duplicate.

## Security

- Listing page private via Basic Auth; manifest + IPA public by necessity (`itunesstored`).
- The manifest route accepts an arbitrary `url` param; a crafted request only changes what
  the requesting device tries to install, and ad-hoc UDID gating still applies — no
  meaningful risk for an internal tool.

## Testing

- **Unit (vitest, already configured):** `lib/builds.ts` — `parseBuildPathname` for valid
  and invalid pathnames, and `buildInstallUrl` encoding (manifest URL params and the outer
  `itms-services` encoding).
- **Manual smoke test:** run a build with publish enabled, confirm the blob appears and old
  builds beyond 5 are pruned, open `/dashboard/builds` on the phone, tap Install, verify the
  app installs and launches.
