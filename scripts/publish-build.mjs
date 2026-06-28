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
