import { NextResponse } from "next/server";
import {
  ABOUT_SECTION,
  APP_FEATURES_SECTION,
  DOCS_SECTION,
  HEADER,
  LINKS_SECTION,
  MAIN_PAGES_SECTION,
  PRICING_SECTION,
  TEXT_RESPONSE_HEADERS,
  getConversionHubEntries,
  getLastUpdatedLine,
  getPersonaEntries,
  getPostEntries,
  getSitemapsSection,
  getToolEntries,
} from "@/lib/llms";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

const RECENT_POST_COUNT = 50;

export async function GET() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const body = `${HEADER}

${getLastUpdatedLine()}

${MAIN_PAGES_SECTION}

${APP_FEATURES_SECTION}

## Free fitness calculators

All calculators run in the browser, require no signup, and never send inputs to a server.

${getToolEntries()}

## Use cases

${getPersonaEntries()}
- [All use cases](${baseUrl}/for): Index of audience-specific step tracking guides.

## Conversions

${getConversionHubEntries()}
- [All conversions](${baseUrl}/conversions): Hub for every steps, distance, calorie, and walking-time conversion.
- [Full index](${baseUrl}/llms-full.txt): Every individual conversion page and blog post, listed one by one.

${DOCS_SECTION}

## Recent guides

Sorted by most recently updated.

${getPostEntries(RECENT_POST_COUNT)}
- [All guides](${baseUrl}/blog): Full blog archive.

${ABOUT_SECTION}

${PRICING_SECTION}

${LINKS_SECTION}

${getSitemapsSection("full")}
`;

  return new NextResponse(body, {
    status: 200,
    headers: TEXT_RESPONSE_HEADERS,
  });
}
