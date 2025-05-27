import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CreditCard,
} from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hospital Dashboard",
  description: "Manage patients, appointments and billing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100 text-gray-900">
        <aside className="w-64 bg-gray-900 text-white shadow-md p-4">
          <h2 className="text-2xl font-bold mb-6">🏥 Hospital</h2>
          <nav className="space-y-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link
              href="/patients"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Users
                size={20}
                className="text-gray-600 group-hover:text-blue-600 transition"
              />
              Patients
            </Link>
            <Link
              href="/appointments"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <CalendarCheck size={18} /> Appointments
            </Link>
            <Link
              href="/billing"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <CreditCard size={18} /> Billing
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
