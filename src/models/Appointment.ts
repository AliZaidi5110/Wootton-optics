import mongoose, { Schema, models } from "mongoose";

const AppointmentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: {
      type: String,
      enum: ["hearing-test", "ear-wax-removal", "hearing-aid", "eye-test", "optical"],
      required: true,
    },
    preferredDate: { type: Date, required: true },
    preferredTime: {
      type: String,
      enum: ["morning", "afternoon", "evening"],
      required: true,
    },
    notes: String,
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    confirmationSent: { type: Boolean, default: false },
    reminderSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Appointment =
  models.Appointment || mongoose.model("Appointment", AppointmentSchema);
