import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import {
//   LayoutDashboard,
//   Users,
//   CalendarCheck,
//   CreditCard,
// } from "lucide-react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body>

        <nav className="flex items-center gap-6 bg-white shadow py-6 px-4 text-gray-600">
          <h2 className="text-2xl font-bold">🏥 Modern Multi Speciality Hospital</h2>

          <div className="flex-grow" />

          <div id="nav-tabs" className="flex gap-8 mx-4">
            <Link
              href="/home"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
          <div id="auth-buttons" className="px-2 mx-2">
            <button className="border-1 rounded-2xl mx-1 px-4 py-1">Login</button>
            <button className="border-1 rounded-2xl mx-1 px-4 py-1 bg-blue-900 text-white">Sign Up</button>
          </div>
        </nav>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
