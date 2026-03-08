import { NextRequest, NextResponse } from "next/server";
import { submitUrls } from "@/lib/indexnow";
import sitemap from "@/app/sitemap";

const INDEXNOW_SECRET = process.env.INDEXNOW_SECRET;

function authorize(request: NextRequest): boolean {
  if (!INDEXNOW_SECRET) return false;
  const authHeader = request.headers.get("authorization") ?? "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;
  return token === INDEXNOW_SECRET;
}

export async function POST(request: NextRequest) {
  try {
    if (!authorize(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const urls: string[] = body.urls;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "urls must be a non-empty array" },
        { status: 400 },
      );
    }

    const result = await submitUrls(urls);
    return NextResponse.json(result);
  } catch (err) {
    console.error("IndexNow POST error:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!authorize(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allUrls = sitemap().map((entry) => entry.url);
    const result = await submitUrls(allUrls);
    return NextResponse.json(result);
  } catch (err) {
    console.error("IndexNow GET error:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
