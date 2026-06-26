import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { trackAICrawlerRequest } from "@datafast/ai-crawl";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // Track AI assistants, search crawlers, and model-training bots server-side.
  // Best-effort and non-blocking: it schedules work via event.waitUntil and we
  // never await it, so it must not delay the response.
  trackAICrawlerRequest(request, event, {
    websiteId: "dfid_GHemojUg7quBdpkgDlIXS",
  });

  // Gate the internal dashboard with HTTP Basic Auth.
  if (pathname.startsWith("/dashboard")) {
    const expectedUser = process.env.DASHBOARD_USER;
    const expectedPass = process.env.DASHBOARD_PASSWORD;

    // Fail closed if credentials aren't configured.
    if (!expectedUser || !expectedPass) {
      return new NextResponse("Dashboard not configured", { status: 503 });
    }

    const auth = request.headers.get("authorization");
    if (auth?.startsWith("Basic ")) {
      const decoded = atob(auth.slice(6));
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }

    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Dashboard"' },
    });
  }

  // Strip cookies from PostHog proxy requests to avoid HTTP 431 errors
  // (Request Header Fields Too Large).
  if (pathname.startsWith("/ingest")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.delete("cookie");
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
