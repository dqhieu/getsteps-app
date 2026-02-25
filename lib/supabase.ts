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
