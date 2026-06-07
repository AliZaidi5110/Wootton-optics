import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = rateLimit(`newsletter-${ip}`);
  if (!success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);
    console.log("[Newsletter]", data);
    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
}
