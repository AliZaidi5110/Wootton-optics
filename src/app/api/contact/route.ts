import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = rateLimit(`contact-${ip}`);
  if (!success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    try {
      const { connectDB } = await import("@/lib/mongodb");
      const { Contact } = await import("@/models/Contact");
      await connectDB();
      await Contact.create(data);
    } catch {
      console.log("[Contact Form]", data);
    }

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
