// Lightweight analytics event dispatch. No third-party script is loaded at
// launch. `track` pushes onto window.dataLayer when present (GTM-compatible)
// and always logs to the console in development so events are verifiable
// before a real analytics destination is wired up.

export type AnalyticsEvent =
  | "quote_cta_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "file_upload"
  | "faq_open";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug(`[analytics] ${event}`, payload);
  }
}
