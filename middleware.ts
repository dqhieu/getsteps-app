import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, localeCookie, resolveLocalePreference } from "@/lib/i18n/preference";
import { resolveLocaleRoute } from "@/lib/i18n/routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const preference = resolveLocalePreference({
    pathname,
    searchHl: request.nextUrl.searchParams.get("hl"),
    cookie: request.cookies.get(LOCALE_COOKIE)?.value ?? null,
    acceptLanguage: request.headers.get("accept-language"),
  });

  if (
    preference.action === "redirect" ||
    (preference.action === "persist" && request.nextUrl.searchParams.has("hl"))
  ) {
    const url = request.nextUrl.clone();
    if (preference.action === "redirect") url.pathname = preference.pathname;
    url.searchParams.delete("hl");
    const response = NextResponse.redirect(url, 302);
    response.headers.append("Set-Cookie", localeCookie(preference.locale));
    return response;
  }

  const route = resolveLocaleRoute(pathname);
  if (route.type === "rewrite" || route.type === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = route.pathname;
    const response =
      route.type === "rewrite" ? NextResponse.rewrite(url) : NextResponse.redirect(url, 308);
    if (preference.action === "persist") {
      response.headers.append("Set-Cookie", localeCookie(preference.locale));
    }
    return response;
  }

  const response = NextResponse.next();
  if (preference.action === "persist") {
    response.headers.append("Set-Cookie", localeCookie(preference.locale));
  }
  return response;
}

// vinext never edge-caches a path this matcher covers, so match only what the
// locale logic handles: the localized sections (see LOCALIZED_SECTIONS) and
// locale-prefixed paths (see LOCALES).
export const config = {
  matcher: [
    "/",
    "/tools/:path*",
    "/conversions/:path*",
    "/:locale(en|zh|fr|de|it|pt-BR|es|ru|ja|ko)/:path*",
  ],
};
