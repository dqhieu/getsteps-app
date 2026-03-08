import { SITE_CONFIG } from "./constants";

const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY!;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10_000;

interface IndexNowResult {
  success: boolean;
  submitted: number;
  error?: string;
}

export async function submitUrls(urls: string[]): Promise<IndexNowResult> {
  if (!INDEXNOW_API_KEY) {
    return { success: false, submitted: 0, error: "INDEXNOW_API_KEY not set" };
  }

  if (urls.length === 0) {
    return { success: true, submitted: 0 };
  }

  let totalSubmitted = 0;

  for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
    const batch = urls.slice(i, i + MAX_URLS_PER_REQUEST);

    const body = {
      host: new URL(SITE_CONFIG.baseUrl).host,
      key: INDEXNOW_API_KEY,
      keyLocation: `${SITE_CONFIG.baseUrl}/${INDEXNOW_API_KEY}.txt`,
      urlList: batch,
    };

    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    if (!res.ok && res.status !== 202) {
      const text = await res.text();
      return {
        success: false,
        submitted: totalSubmitted,
        error: `IndexNow API ${res.status}: ${text}`,
      };
    }

    totalSubmitted += batch.length;
  }

  return { success: true, submitted: totalSubmitted };
}
