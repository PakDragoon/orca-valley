export const EMAIL = "h.ali@orcavalley.com";
export const PHONE_DISPLAY = "+92 331 0400668";
export const PHONE_TEL = "+923310400668";
export const LINKEDIN = "https://www.linkedin.com/company/orca-valley/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61554669862402";

// Paste your Calendly (or Cal.com) discovery-call link here,
// e.g. "https://calendly.com/orcavalley/discovery-call".
// While it's empty, every "Book a discovery call" button opens an email instead.
export const BOOKING_URL = "https://calendly.com/h-ali-orcavalley/30min";

// Props for any "book a call" link: opens the booking page in a new tab,
// or falls back to a prefilled email when no booking link is set.
export function bookingLinkProps() {
  if (BOOKING_URL) {
    return { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" };
  }
  return { href: `mailto:${EMAIL}?subject=Discovery%20call%20with%20Orca%20Valley` };
}
