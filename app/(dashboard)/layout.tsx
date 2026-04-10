"use client";

import { SessionProvider } from "next-auth/react";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-[#fafaf8]">
        <Sidebar />
        <main className="pl-64">
          <div className="mx-auto max-w-5xl px-8 py-10">
            {children}
          </div>
        </main>
      </div>
    </SessionProvider>
  );
}
