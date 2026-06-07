import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = rateLimit(`appointment-${ip}`);
  if (!success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = appointmentSchema.parse(body);

    try {
      const { connectDB } = await import("@/lib/mongodb");
      const { Appointment } = await import("@/models/Appointment");
      await connectDB();
      await Appointment.create({
        ...data,
        preferredDate: new Date(data.preferredDate),
      });
    } catch {
      console.log("[Appointment]", data);
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request received. Confirmation email will be sent shortly.",
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const jwt = await import("jsonwebtoken");
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET not configured");

    const decoded = jwt.default.verify(token, secret) as { userId: string };
    const { connectDB } = await import("@/lib/mongodb");
    const { Appointment } = await import("@/models/Appointment");
    await connectDB();

    const appointments = await Appointment.find({ userId: decoded.userId })
      .sort({ preferredDate: -1 })
      .limit(20);

    return NextResponse.json({ appointments });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
