import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    subject: { type: String, required: true },
    message: { type: String, required: true },
    service: { type: String, enum: ["hearing", "optics", "general"] },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const Contact = models.Contact || mongoose.model("Contact", ContactSchema);
