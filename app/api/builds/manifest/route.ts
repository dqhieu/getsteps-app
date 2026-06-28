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
