"use client";

import { cn } from "@/lib/utils";

interface PageLoaderProps {
  visible: boolean;
}

export function PageLoader({ visible }: PageLoaderProps) {
  return (
    <div
      className={cn("page-loader", !visible && "page-loader-hide")}
      role="status"
      aria-live="polite"
      aria-busy={visible}
      aria-label="Loading page content"
    >
      <div className="loader-container" aria-hidden="true">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}
