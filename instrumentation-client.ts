import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/ingest",
  disable_session_recording: true,  
  ui_host: "https://us.posthog.com",
  capture_exceptions: true,
  person_profiles: "identified_only",
});
