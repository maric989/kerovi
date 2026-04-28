import { SITE_PHONE_RAW } from "@/lib/site";

export const WHATSAPP_NUMBER = SITE_PHONE_RAW;

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function puppyInquiryLink(puppyName: string): string {
  return whatsappLink(
    `Zdravo! Zainteresovan/a sam za štene: ${puppyName}. Molim Vas da mi pošaljete više informacija.`
  );
}

export function waitlistLink(litterName: string): string {
  return whatsappLink(
    `Zdravo! Zainteresovan/a sam za listu čekanja za: ${litterName}. Molim Vas za više informacija.`
  );
}

