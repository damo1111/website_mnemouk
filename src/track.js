// PostHog for mnemolabs.co: page views, referrers and campaign tags, in the same
// EU project as the eend and Mnemo Labs app sites (each event carries `site`, here
// "mnemo"). No autocapture, no session recording, no advertising cookies. Only the
// production hosts report, so previews and local builds never do.
const KEY = (import.meta.env.VITE_POSTHOG_KEY || "phc_qpvadsTgNsQqjSEr6j2bCp2kzb5TLUNfShH2R3YEMJBS").trim();
const HOST = (import.meta.env.VITE_POSTHOG_HOST || "https://eu.i.posthog.com").trim();
const REPORTS = /^(www\.)?mnemolabs\.(co|app)$/;

function campaign() {
  const q = new URLSearchParams(window.location.search);
  const out = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"]) {
    const v = q.get(k);
    if (v) out[k] = v.slice(0, 80);
  }
  return out;
}

export function startAnalytics() {
  if (typeof window === "undefined" || !KEY || !REPORTS.test(window.location.hostname)) return;
  import("posthog-js").then(({ default: posthog }) => {
    posthog.init(KEY, {
      api_host: HOST,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
    });
    posthog.register({ ...campaign(), site: "mnemo" });
  });
}
