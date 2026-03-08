import { NextRequest, NextResponse } from "next/server";
import { submitUrls } from "@/lib/indexnow";
import sitemap from "@/app/sitemap";

export async function GET(request: NextRequest) {
  // Vercel cron auth: https://vercel.com/docs/cron-jobs/manage-cron-jobs#securing-cron-jobs
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const allUrls = sitemap().map((entry) => entry.url);
  const result = await submitUrls(allUrls);

  console.log(`IndexNow cron: submitted ${result.submitted} URLs`);
  return NextResponse.json(result);
}
