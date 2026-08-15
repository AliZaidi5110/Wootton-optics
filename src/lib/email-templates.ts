import { SITE } from "@/lib/constants";
import { escapeHtml, hoursListHtml, hoursListText } from "@/lib/resend-mail";

const BRAND = {
  navy: "#0a1f35",
  navyDeep: "#061525",
  primary: "#0d8fa8",
  cream: "#f4f7f9",
  border: "#d8e0e6",
  muted: "#5b6b7a",
  white: "#ffffff",
  text: "#1f2937",
};

type FieldRow = {
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

function fieldRowsHtml(rows: FieldRow[]): string {
  return rows
    .map((row, index) => {
      const bg = index % 2 === 0 ? BRAND.cream : BRAND.white;
      const safeLabel = escapeHtml(row.label);
      const safeValue = escapeHtml(row.value);
      const valueHtml = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:${BRAND.primary};text-decoration:underline;">${safeValue}</a>`
        : safeValue;

      return `
        <tr>
          <td style="padding:14px 18px;background-color:${bg};border-bottom:1px solid ${BRAND.border};width:34%;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:${BRAND.navy};">
            ${safeLabel}
          </td>
          <td style="padding:14px 18px;background-color:${bg};border-bottom:1px solid ${BRAND.border};vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${BRAND.text};white-space:pre-wrap;">
            ${valueHtml}
          </td>
        </tr>`;
    })
    .join("");
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

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(options.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.cream};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(options.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.cream};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;box-shadow:0 4px 18px rgba(6,21,37,0.08);">
          <tr>
            <td style="background-color:${BRAND.navyDeep};padding:22px 24px;text-align:left;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.3;font-weight:700;color:${BRAND.white};">
                Wootton Optician &amp; Hearing Care
              </p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#9ad7e4;">
                Northampton · Independent family practice
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 8px;font-family:Arial,Helvetica,sans-serif;">
              <h1 style="margin:0 0 12px;font-size:20px;line-height:1.35;color:${BRAND.navy};font-family:Georgia,'Times New Roman',serif;">
                ${escapeHtml(options.title)}
              </h1>
              <div style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${BRAND.muted};">
                ${options.introHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              ${options.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background-color:${BRAND.navy};padding:18px 24px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#d7e3ec;">
              <p style="margin:0 0 6px;color:#ffffff;font-weight:700;">${escapeHtml(SITE.name)}</p>
              <p style="margin:0;">${escapeHtml(SITE.address.full)}</p>
              <p style="margin:4px 0 0;">
                <a href="tel:${escapeHtml(tel)}" style="color:#9ad7e4;text-decoration:none;">${escapeHtml(phone)}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${escapeHtml(SITE.email)}" style="color:#9ad7e4;text-decoration:none;">${escapeHtml(SITE.email)}</a>
              </p>
              <p style="margin:12px 0 0;color:#9fb0bf;">${escapeHtml(options.footerNote)} · ${escapeHtml(timestamp)} (UK)</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function contactNotificationEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}): { html: string; text: string } {
  const phoneHref = `tel:${data.phone.replace(/[^\d+]/g, "")}`;
  const rows: FieldRow[] = [
    { label: "Full name", value: data.fullName },
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "Phone", value: data.phone, href: phoneHref },
    { label: "Service", value: data.service },
    { label: "Subject", value: data.subject },
    { label: "Message", value: data.message },
  ];

  const html = brandedEmailShell({
    preheader: `New enquiry from ${data.fullName}: ${data.subject}`,
    title: "New website enquiry",
    introHtml: `<p style="margin:0;">A visitor submitted the contact form. Reply directly to this email to respond to the customer.</p>`,
    bodyHtml: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;">${fieldRowsHtml(rows)}</table>`,
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

export function contactConfirmationEmail(fullName: string): { html: string; text: string } {
  const phone = SITE.phoneDisplay ?? SITE.phone;
  const tel = SITE.phone.replace(/\s/g, "");

  const html = brandedEmailShell({
    preheader: "We've received your message and will be in touch shortly.",
    title: "We've received your message",
    introHtml: `
      <p style="margin:0 0 10px;">Dear ${escapeHtml(fullName)},</p>
      <p style="margin:0 0 10px;">Thank you for contacting Wootton Optician &amp; Hearing Care. We've received your message and will be in touch shortly.</p>
      <p style="margin:0;">If your enquiry is urgent, please call us on <a href="tel:${escapeHtml(tel)}" style="color:${BRAND.primary};font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a>.</p>
    `,
    bodyHtml: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.border};border-radius:10px;background-color:${BRAND.cream};">
        <tr>
          <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND.navy};">
            <p style="margin:0 0 8px;font-weight:700;">Opening hours</p>
            <ul style="margin:0;padding-left:18px;color:${BRAND.muted};">${hoursListHtml()}</ul>
          </td>
        </tr>
      </table>
    `,
    footerNote: "Automatic confirmation — please do not reply to arrange urgent care by phone",
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

export function appointmentNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}): { html: string; text: string } {
  const phoneHref = `tel:${data.phone.replace(/[^\d+]/g, "")}`;
  const rows: FieldRow[] = [
    { label: "Full name", value: data.name },
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "Phone", value: data.phone, href: phoneHref },
    { label: "Service", value: data.service },
    { label: "Preferred date", value: data.preferredDate },
    { label: "Preferred time", value: data.preferredTime },
    { label: "Notes", value: data.notes },
  ];

  const html = brandedEmailShell({
    preheader: `New appointment request: ${data.service} on ${data.preferredDate}`,
    title: "New appointment request",
    introHtml: `<p style="margin:0;">A visitor requested a booking online. Reply to this email or call the customer to confirm.</p>`,
    bodyHtml: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;">${fieldRowsHtml(rows)}</table>`,
    footerNote: "Submitted via Book Appointment form",
  });

  const text = [
    "New appointment request — Wootton Optician & Hearing Care",
    "",
    `Full name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Preferred date: ${data.preferredDate}`,
    `Preferred time: ${data.preferredTime}`,
    `Notes: ${data.notes}`,
    "",
    `${SITE.address.full} · ${SITE.phoneDisplay ?? SITE.phone}`,
  ].join("\n");

  return { html, text };
}

export function appointmentConfirmationEmail(data: {
  name: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
}): { html: string; text: string } {
  const phone = SITE.phoneDisplay ?? SITE.phone;
  const tel = SITE.phone.replace(/\s/g, "");

  const html = brandedEmailShell({
    preheader: `We've received your appointment request for ${data.service}.`,
    title: "We've received your appointment request",
    introHtml: `
      <p style="margin:0 0 10px;">Dear ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 10px;">Thank you for requesting an appointment for <strong style="color:${BRAND.navy};">${escapeHtml(data.service)}</strong> on <strong style="color:${BRAND.navy};">${escapeHtml(data.preferredDate)}</strong> (${escapeHtml(data.preferredTime)}).</p>
      <p style="margin:0 0 10px;">Our team will confirm your booking shortly by email or phone.</p>
      <p style="margin:0;">If you need to speak to us sooner, call <a href="tel:${escapeHtml(tel)}" style="color:${BRAND.primary};font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a>.</p>
    `,
    bodyHtml: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.border};border-radius:10px;background-color:${BRAND.cream};">
        <tr>
          <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND.navy};">
            <p style="margin:0 0 8px;font-weight:700;">Opening hours</p>
            <ul style="margin:0;padding-left:18px;color:${BRAND.muted};">${hoursListHtml()}</ul>
          </td>
        </tr>
      </table>
    `,
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
