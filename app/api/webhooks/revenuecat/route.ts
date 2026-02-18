import { NextRequest, NextResponse } from "next/server";

const REVENUECAT_WEBHOOK_SECRET = process.env.REVENUECAT_WEBHOOK_SECRET;
const DATAFAST_API_KEY = process.env.DATAFAST_API_KEY;
const DATAFAST_PAYMENTS_URL = "https://datafa.st/api/v1/payments";

const TRACKABLE_EVENTS = new Set([
  "INITIAL_PURCHASE",
  "RENEWAL",
  "NON_RENEWING_PURCHASE",
]);

interface RevenueCatEvent {
  type: string;
  id: string;
  app_user_id: string;
  original_app_user_id?: string;
  transaction_id?: string;
  price?: number;
  price_in_purchased_currency?: number;
  currency?: string;
  environment?: string;
  event_timestamp_ms?: number;
}

export async function POST(request: NextRequest) {
  try {
    if (!REVENUECAT_WEBHOOK_SECRET || !DATAFAST_API_KEY) {
      console.error("Missing REVENUECAT_WEBHOOK_SECRET or DATAFAST_API_KEY");
      return NextResponse.json({ ok: true });
    }

    const authHeader = request.headers.get("authorization") ?? "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;
    if (!token || token !== REVENUECAT_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const event: RevenueCatEvent = body.event;

    if (!event) {
      return NextResponse.json({ error: "Missing event" }, { status: 400 });
    }

    if (!TRACKABLE_EVENTS.has(event.type)) {
      return NextResponse.json({ ok: true });
    }

    if (event.environment && event.environment !== "PRODUCTION") {
      return NextResponse.json({ ok: true });
    }

    const timestamp = event.event_timestamp_ms
      ? new Date(event.event_timestamp_ms).toISOString()
      : new Date().toISOString();

    const payload = {
      amount: event.price_in_purchased_currency ?? event.price ?? 0,
      currency: event.currency ?? "USD",
      transaction_id: event.transaction_id ?? event.id,
      customer_id: event.original_app_user_id ?? event.app_user_id,
      renewal: event.type === "RENEWAL",
      timestamp,
    };

    const res = await fetch(DATAFAST_PAYMENTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DATAFAST_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Datafast API error: ${res.status} ${text}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RevenueCat webhook error:", err);
    return NextResponse.json({ ok: true });
  }
}
