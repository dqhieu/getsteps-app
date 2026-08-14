import { NextResponse } from "next/server";
import {
  ABOUT_SECTION,
  APP_FEATURES_SECTION,
  DOCS_SECTION,
  HEADER,
  LINKS_SECTION,
  MAIN_PAGES_SECTION,
  PLATFORMS_SECTION,
  PRICING_SECTION,
  STEPBOARD_SECTION,
  TEXT_RESPONSE_HEADERS,
  getConversionEntries,
  getLastUpdatedLine,
  getPersonaEntries,
  getPostCount,
  getPostEntries,
  getSitemapsSection,
  getToolEntries,
} from "@/lib/llms";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const body = `${HEADER}

This is the complete index of every page on getsteps.app. For a shorter, curated overview see [llms.txt](${baseUrl}/llms.txt).

${getLastUpdatedLine()}

${MAIN_PAGES_SECTION}

${ABOUT_SECTION}

${APP_FEATURES_SECTION}

${STEPBOARD_SECTION}

${PRICING_SECTION}

## Free fitness calculators

All calculators run in the browser, require no signup, and never send inputs to a server.

${getToolEntries()}

## Use cases

${getPersonaEntries()}
- [All use cases](${baseUrl}/for): Index of audience-specific step tracking guides.

## Conversions

Programmatic conversion tables. Each category page covers the conversion in general; each value page answers one specific number.

- [Conversions home](${baseUrl}/conversions): Index of every conversion category.
${getConversionEntries()}

${DOCS_SECTION}

## Blog posts (${getPostCount()} total)

Fitness explainers, calculators, walking and running guides, comparisons, and app feature posts. Sorted by most recently updated.

${getPostEntries()}

${PLATFORMS_SECTION}

${LINKS_SECTION}

${getSitemapsSection("curated")}
`;

  return new NextResponse(body, {
    status: 200,
    headers: TEXT_RESPONSE_HEADERS,
  });
}
