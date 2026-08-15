/**
 * Shared branded HTML/text templates for all Resend transactional emails.
 * Visual design only — callers keep existing Resend send() behaviour.
 */

import { SITE } from "@/lib/constants";
import { escapeHtml, hoursListHtml, hoursListText } from "@/lib/resend-mail";

/** Site brand tokens (from globals.css) */
const BRAND = {
  navy: "#0a1f35",
  navyDeep: "#061525",
  primary: "#0d8fa8",
  cream: "#faf8f4",
  creamDark: "#f0ebe3",
  sky: "#e8f4f8",
  border: "#e4ddd3",
  muted: "#5c6570",
  white: "#ffffff",
  text: "#1a2330",
};

type DetailItem = {
  label: string;
  value: string;
  href?: string;
};

function formatTimestamp(date = new Date()): string {
  return date.toLocaleString("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function hasNotes(notes: string | undefined | null): boolean {
  if (!notes) return false;
  const trimmed = notes.trim();
  if (!trimmed) return false;
  if (trimmed.toLowerCase() === "none") return false;
  return true;
}

function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Compact stacked detail rows (label above value) — avoids a bulky two-column table. */
function detailsBlock(items: DetailItem[]): string {
  const rows = items
    .map((item, index) => {
      const safeLabel = escapeHtml(item.label);
      const safeValue = escapeHtml(item.value).replace(/\n/g, "<br />");
      const valueHtml = item.href
        ? `<a href="${escapeHtml(item.href)}" style="color:${BRAND.primary};text-decoration:none;font-weight:600;">${safeValue}</a>`
        : safeValue;
      const border =
        index < items.length - 1
          ? `border-bottom:1px solid ${BRAND.border};`
          : "";

      return `
        <tr>
          <td style="padding:10px 0;${border}font-family:Arial,Helvetica,sans-serif;">
            <p style="margin:0 0 3px;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};font-weight:700;">
              ${safeLabel}
            </p>
            <p style="margin:0;font-size:15px;line-height:1.45;color:${BRAND.text};">
              ${valueHtml}
            </p>
          </td>
        </tr>`;
    })
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${rows}
    </table>`;
}

function sectionCard(title: string, innerHtml: string): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 16px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:8px;">
      <tr>
        <td style="padding:14px 16px 4px;font-family:Arial,Helvetica,sans-serif;">
          <p style="margin:0;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.primary};font-weight:700;">
            ${escapeHtml(title)}
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:4px 16px 14px;">
          ${innerHtml}
        </td>
      </tr>
    </table>`;
}

function highlightCard(lines: { label: string; value: string }[]): string {
  const cells = lines
    .map(
      (line) => `
      <td width="${Math.floor(100 / lines.length)}%" valign="top" style="padding:4px 8px 4px 0;font-family:Arial,Helvetica,sans-serif;">
        <p style="margin:0 0 2px;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};font-weight:700;">
          ${escapeHtml(line.label)}
        </p>
        <p style="margin:0;font-size:16px;line-height:1.35;font-weight:700;color:${BRAND.navy};">
          ${escapeHtml(line.value)}
        </p>
      </td>`
    )
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 16px;background-color:${BRAND.sky};border:1px solid #cfe6ee;border-radius:8px;">
      <tr>
        <td style="padding:14px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              ${cells}
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
}

function ctaButton(href: string, label: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 16px;">
      <tr>
        <td style="border-radius:6px;background-color:${BRAND.primary};">
          <a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${BRAND.white};text-decoration:none;">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>`;
}

function openingHoursCard(): string {
  return sectionCard(
    "Opening hours",
    `<ul style="margin:8px 0 0;padding-left:18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:${BRAND.text};">${hoursListHtml()}</ul>`
  );
}

function brandedEmailShell(options: {
  preheader: string;
  title: string;
  introHtml: string;
  bodyHtml: string;
  footerNote: string;
}): string {
  const phone = SITE.phoneDisplay ?? SITE.phone;
  const tel = SITE.phone.replace(/\s/g, "");
  const timestamp = formatTimestamp();
  const siteUrl = SITE.url.replace(/\/$/, "");

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(options.title)}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${BRAND.cream};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
    ${escapeHtml(options.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.cream};">
    <tr>
      <td align="center" style="padding:20px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:${BRAND.navyDeep};padding:16px 20px;border-bottom:3px solid ${BRAND.primary};">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.3;font-weight:700;color:${BRAND.white};">
                Wootton Optician &amp; Hearing Care
              </p>
              <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#9ad7e4;">
                Northampton · Independent family practice
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:20px 20px 8px;font-family:Arial,Helvetica,sans-serif;">
              <h1 style="margin:0 0 8px;font-size:20px;line-height:1.3;color:${BRAND.navy};font-family:Georgia,'Times New Roman',serif;font-weight:700;">
                ${escapeHtml(options.title)}
              </h1>
              <div style="margin:0 0 16px;font-size:14px;line-height:1.55;color:${BRAND.muted};">
                ${options.introHtml}
              </div>
              ${options.bodyHtml}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.creamDark};padding:16px 20px;border-top:1px solid ${BRAND.border};font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.55;color:${BRAND.muted};">
              <p style="margin:0 0 2px;font-weight:700;color:${BRAND.navy};">${escapeHtml(SITE.name)}</p>
              <p style="margin:0;">${escapeHtml(SITE.address.full)}</p>
              <p style="margin:6px 0 0;">
                <a href="tel:${escapeHtml(tel)}" style="color:${BRAND.primary};text-decoration:none;">${escapeHtml(phone)}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${escapeHtml(SITE.email)}" style="color:${BRAND.primary};text-decoration:none;">${escapeHtml(SITE.email)}</a>
              </p>
              <p style="margin:6px 0 0;">
                <a href="${escapeHtml(siteUrl)}" style="color:${BRAND.primary};text-decoration:none;">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a>
              </p>
              <p style="margin:10px 0 0;font-size:11px;color:#8a939c;">
                ${escapeHtml(options.footerNote)} · ${escapeHtml(timestamp)} (UK)
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* -------------------------------------------------------------------------- */
/* Contact — admin notification                                               */
/* -------------------------------------------------------------------------- */

export function contactNotificationEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}): { html: string; text: string } {
  const phoneLink = telHref(data.phone);

  const bodyHtml = `
    ${highlightCard([
      { label: "Service", value: data.service },
      { label: "From", value: data.fullName },
    ])}
    ${sectionCard(
      "Customer details",
      detailsBlock([
        { label: "Full name", value: data.fullName },
        { label: "Email", value: data.email, href: `mailto:${data.email}` },
        { label: "Phone", value: data.phone, href: phoneLink },
      ])
    )}
    ${sectionCard(
      "Enquiry",
      detailsBlock([
        { label: "Subject", value: data.subject },
        { label: "Message", value: data.message },
      ])
    )}
    ${ctaButton(`mailto:${data.email}?subject=${encodeURIComponent(`Re: ${data.subject}`)}`, "Contact customer")}
  `;

  const html = brandedEmailShell({
    preheader: `New enquiry from ${data.fullName}: ${data.subject}`,
    title: "New website enquiry",
    introHtml: `<p style="margin:0;">A visitor submitted the contact form. Use the button below or reply to this email to respond.</p>`,
    bodyHtml,
    footerNote: "Submitted via Contact form",
  });

  const text = [
    "New website enquiry — Wootton Optician & Hearing Care",
    "",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
    "",
    `${SITE.address.full} · ${SITE.phoneDisplay ?? SITE.phone}`,
  ].join("\n");

  return { html, text };
}

/* -------------------------------------------------------------------------- */
/* Contact — customer confirmation                                            */
/* -------------------------------------------------------------------------- */

export function contactConfirmationEmail(fullName: string): { html: string; text: string } {
  const phone = SITE.phoneDisplay ?? SITE.phone;
  const tel = SITE.phone.replace(/\s/g, "");

  const bodyHtml = `
    ${openingHoursCard()}
    ${ctaButton(`tel:${tel}`, `Call us on ${phone}`)}
  `;

  const html = brandedEmailShell({
    preheader: "We've received your message and will be in touch shortly.",
    title: "We've received your message",
    introHtml: `
      <p style="margin:0 0 8px;">Dear ${escapeHtml(fullName)},</p>
      <p style="margin:0 0 8px;">Thank you for contacting Wootton Optician &amp; Hearing Care. We've received your message and will be in touch shortly.</p>
      <p style="margin:0;">If your enquiry is urgent, please call us on <a href="tel:${escapeHtml(tel)}" style="color:${BRAND.primary};font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a>.</p>
    `,
    bodyHtml,
    footerNote: "Automatic confirmation",
  });

  const text = [
    `Dear ${fullName},`,
    "",
    "We've received your message and will be in touch shortly.",
    "",
    `If your enquiry is urgent, please call us on ${phone}.`,
    "",
    "Opening hours:",
    hoursListText(),
    "",
    SITE.name,
    SITE.address.full,
  ].join("\n");

  return { html, text };
}

/* -------------------------------------------------------------------------- */
/* Appointment — admin notification                                           */
/* -------------------------------------------------------------------------- */

export function appointmentNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}): { html: string; text: string } {
  const phoneLink = telHref(data.phone);
  const showNotes = hasNotes(data.notes);

  const notesSection = showNotes
    ? sectionCard(
        "Notes",
        `<p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${BRAND.text};">${escapeHtml(data.notes).replace(/\n/g, "<br />")}</p>`
      )
    : "";

  const bodyHtml = `
    ${highlightCard([
      { label: "Service", value: data.service },
      { label: "Date", value: data.preferredDate },
      { label: "Time", value: data.preferredTime },
    ])}
    ${sectionCard(
      "Customer details",
      detailsBlock([
        { label: "Full name", value: data.name },
        { label: "Email", value: data.email, href: `mailto:${data.email}` },
        { label: "Phone", value: data.phone, href: phoneLink },
      ])
    )}
    ${notesSection}
    ${ctaButton(`mailto:${data.email}?subject=${encodeURIComponent(`Your appointment request — ${data.service}`)}`, "Contact customer")}
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${BRAND.muted};">
      Or call <a href="${escapeHtml(phoneLink)}" style="color:${BRAND.primary};text-decoration:none;font-weight:600;">${escapeHtml(data.phone)}</a>
    </p>
  `;

  const html = brandedEmailShell({
    preheader: `New appointment request: ${data.service} on ${data.preferredDate}`,
    title: "New appointment request",
    introHtml: `<p style="margin:0;">A visitor requested a booking online. Review the details below and contact them to confirm.</p>`,
    bodyHtml,
    footerNote: "Submitted via Book Appointment form",
  });

  const textLines = [
    "New appointment request — Wootton Optician & Hearing Care",
    "",
    `Full name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Preferred date: ${data.preferredDate}`,
    `Preferred time: ${data.preferredTime}`,
  ];
  if (showNotes) {
    textLines.push(`Notes: ${data.notes}`);
  }
  textLines.push("", `${SITE.address.full} · ${SITE.phoneDisplay ?? SITE.phone}`);

  return { html, text: textLines.join("\n") };
}

/* -------------------------------------------------------------------------- */
/* Appointment — customer confirmation                                        */
/* -------------------------------------------------------------------------- */

export function appointmentConfirmationEmail(data: {
  name: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
}): { html: string; text: string } {
  const phone = SITE.phoneDisplay ?? SITE.phone;
  const tel = SITE.phone.replace(/\s/g, "");

  const bodyHtml = `
    ${highlightCard([
      { label: "Service", value: data.service },
      { label: "Date", value: data.preferredDate },
      { label: "Time", value: data.preferredTime },
    ])}
    ${openingHoursCard()}
    ${ctaButton(`tel:${tel}`, `Call us on ${phone}`)}
  `;

  const html = brandedEmailShell({
    preheader: `We've received your appointment request for ${data.service}.`,
    title: "We've received your appointment request",
    introHtml: `
      <p style="margin:0 0 8px;">Dear ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 8px;">Thank you for requesting an appointment. Our team will confirm your booking shortly by email or phone.</p>
      <p style="margin:0;">If you need to speak to us sooner, call <a href="tel:${escapeHtml(tel)}" style="color:${BRAND.primary};font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a>.</p>
    `,
    bodyHtml,
    footerNote: "Automatic confirmation — we will follow up to confirm your slot",
  });

  const text = [
    `Dear ${data.name},`,
    "",
    `We've received your appointment request for ${data.service} on ${data.preferredDate} (${data.preferredTime}).`,
    "",
    "Our team will confirm your booking shortly by email or phone.",
    "",
    `If you need to speak to us sooner, call ${phone}.`,
    "",
    "Opening hours:",
    hoursListText(),
    "",
    SITE.name,
    SITE.address.full,
  ].join("\n");

  return { html, text };
}

/* -------------------------------------------------------------------------- */
/* Newsletter — admin notification (was inline in API route)                  */
/* -------------------------------------------------------------------------- */

export function newsletterSignupEmail(email: string): { html: string; text: string } {
  const bodyHtml = `
    ${sectionCard(
      "Subscriber",
      detailsBlock([{ label: "Email", value: email, href: `mailto:${email}` }])
    )}
    ${ctaButton(`mailto:${email}`, "Contact subscriber")}
  `;

  const html = brandedEmailShell({
    preheader: `New newsletter signup: ${email}`,
    title: "New newsletter signup",
    introHtml: `<p style="margin:0;">Someone subscribed via the website newsletter form.</p>`,
    bodyHtml,
    footerNote: "Submitted via Newsletter form",
  });

  const text = [
    "New newsletter signup — Wootton Optician & Hearing Care",
    "",
    `Email: ${email}`,
    "",
    `${SITE.address.full} · ${SITE.phoneDisplay ?? SITE.phone}`,
  ].join("\n");

  return { html, text };
}
