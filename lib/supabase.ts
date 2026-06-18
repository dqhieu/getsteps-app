import { createClient } from "@supabase/supabase-js";

export interface FeatureRequest {
  id: string;
  created_at: string;
  content: string;
  upvotes: number;
  user_email: string | null;
  status: "pending" | "accepted" | "rejected" | "done" | "inprogress";
  response: string | null;
  app_version: string | null;
  is_pro_user: boolean | null;
}

let _client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    }
    _client = createClient(url, key);
  }
  return _client;
}

export interface NotificationOptIn {
  device_token: string;
  is_pro_user: boolean | null;
  plan: string | null;
  updated_at: string | null;
}

let _admin: ReturnType<typeof createClient> | null = null;

// Server-only. Uses the service-role key, which bypasses RLS. NEVER import this
// into a "use client" module — it would leak the secret key into the browser.
export function getSupabaseAdmin() {
  if (!_admin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }
    _admin = createClient(url, key, { auth: { persistSession: false } });
  }
  return _admin;
}
