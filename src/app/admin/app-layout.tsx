'use client';

import { Toaster } from '@/components/ui/toaster';
import { AdminSidebar } from './admin-sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8">
        {children}
        <Toaster />
      </main>
    </div>
  );
}