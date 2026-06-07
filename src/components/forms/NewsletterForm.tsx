"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        aria-label="Email address for newsletter"
        className="w-full px-4 py-3 rounded-lg bg-white text-navy border-0 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary min-h-[48px]"
      />
      <Button type="submit" variant="accent" size="sm" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>
      {status === "success" && (
        <p className="text-sky text-sm" role="status">Thank you for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-accent text-sm" role="alert">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
