"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("auth-token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
      } else {
        setError(data.error || "Login failed");
        setStatus("error");
      }
    } catch {
      setError("Connection error");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary min-h-[48px]";

  return (
    <>
      <PageHeader title="Login" subtitle="Access your account to view appointments and manage your profile." />
      <section className="py-20">
        <div className="container max-w-md">
          <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <input id="password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputClass} />
            </div>
            {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Signing in..." : "Sign In"}
            </Button>
            <p className="text-center text-sm text-neutral-500">
              No account? <Link href="/register" className="text-primary hover:underline">Register</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
