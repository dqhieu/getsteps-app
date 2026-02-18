import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Strip cookies from PostHog proxy requests to avoid HTTP 431 errors
  // (Request Header Fields Too Large)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete("cookie");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/ingest/:path*",
};
