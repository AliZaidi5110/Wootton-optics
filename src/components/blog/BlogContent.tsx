/** Lightweight markdown renderer for blog posts (## headings, **bold**, paragraphs). */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineFormat(text: string): string {
  return escapeHtml(text).replace(
    /\*\*(.+?)\*\*/g,
    "<strong>$1</strong>"
  );
}

export function BlogContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  const html = blocks
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2>${inlineFormat(trimmed.slice(3))}</h2>`;
      }
      const withBreaks = trimmed
        .split("\n")
        .map((line) => inlineFormat(line))
        .join("<br />");
      return `<p>${withBreaks}</p>`;
    })
    .join("");

  return (
    <div
      className="blog-content prose-wootton space-y-4 text-navy/90 leading-relaxed [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-navy"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
