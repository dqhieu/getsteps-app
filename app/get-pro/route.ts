import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

// Stable, brandable entry URL for the web2app funnel. Redirects to the
// RevenueCat-hosted checkout so the destination can change without re-editing
// links/CTAs that point at getsteps.app/get-pro.
export function GET() {
  return NextResponse.redirect(SITE_CONFIG.proWebCheckoutUrl, 307);
}
