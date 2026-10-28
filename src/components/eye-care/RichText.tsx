import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders text containing [label](/path) markers as inline internal links. */
export function RichText({ text, linkClassName }: { text: string; linkClassName?: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [full, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(
      <Link
        key={`${href}-${index}`}
        href={href}
        className={
          linkClassName ??
          "font-semibold text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
        }
      >
        {label}
      </Link>
    );
    last = index + full.length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}

/** Plain-text version of a RichText string, for structured data. */
export function stripLinks(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}
