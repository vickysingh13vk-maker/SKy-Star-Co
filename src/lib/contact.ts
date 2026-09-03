import { siteConfig } from "@/content/site";

export function whatsappHref(prefillMessage?: string): string {
  if (!siteConfig.whatsappNumber) return "#contact";
  const digits = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = prefillMessage ? `?text=${encodeURIComponent(prefillMessage)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function telHref(): string {
  if (!siteConfig.phone) return "#contact";
  return `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`;
}

export function mailHref(): string {
  if (!siteConfig.email) return "#contact";
  return `mailto:${siteConfig.email}`;
}

export const isWhatsAppConfigured = Boolean(siteConfig.whatsappNumber);
export const isPhoneConfigured = Boolean(siteConfig.phone);
export const isEmailConfigured = Boolean(siteConfig.email);
