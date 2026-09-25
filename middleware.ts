import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { trackAICrawlerRequest } from "@datafast/ai-crawl";
import { resolveLocaleRoute } from "@/lib/i18n/routing";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // Track AI assistants, search crawlers, and model-training bots server-side.
  // Best-effort and non-blocking: it schedules work via event.waitUntil and we
  // never await it, so it must not delay the response.
  trackAICrawlerRequest(request, event, {
    websiteId: "dfid_GHemojUg7quBdpkgDlIXS",
  });

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

  const route = resolveLocaleRoute(pathname);
  if (route.type === "rewrite" || route.type === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = route.pathname;
    return route.type === "rewrite"
      ? NextResponse.rewrite(url)
      : NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
