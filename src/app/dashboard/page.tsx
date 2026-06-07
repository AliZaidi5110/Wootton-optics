"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Calendar, User, LogOut } from "lucide-react";

interface UserData {
  name: string;
  email: string;
}

interface Appointment {
  _id: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  status: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    const userData = localStorage.getItem("user");
    if (!token || !userData) {
      window.location.href = "/login";
      return;
    }
    setUser(JSON.parse(userData));

    fetch("/api/appointments", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : { appointments: [] }))
      .then((data) => setAppointments(data.appointments || []))
      .catch(() => setAppointments([]));
  }, []);

  function logout() {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  if (!user) return null;

  return (
    <>
      <PageHeader title="My Dashboard" subtitle={`Welcome back, ${user.name}`} />
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
              <User className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-navy">Profile</h3>
              <p className="text-sm text-neutral-500 mt-1">{user.email}</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
              <Calendar className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-bold text-navy">Appointments</h3>
              <p className="text-sm text-neutral-500 mt-1">{appointments.length} booked</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-navy">Quick Actions</h3>
              </div>
              <Button href="/appointments" size="sm" className="mt-4">
                Book New Appointment
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-xl font-bold text-navy">Appointment History</h2>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
            {appointments.length === 0 ? (
              <p className="text-neutral-500 text-center py-8">
                No appointments yet.{" "}
                <Link href="/appointments" className="text-primary hover:underline">
                  Book your first appointment
                </Link>
              </p>
            ) : (
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div
                    key={apt._id}
                    className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl"
                  >
                    <div>
                      <p className="font-medium capitalize">{apt.service.replace("-", " ")}</p>
                      <p className="text-sm text-neutral-500">
                        {new Date(apt.preferredDate).toLocaleDateString("en-GB")} · {apt.preferredTime}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary capitalize">
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
