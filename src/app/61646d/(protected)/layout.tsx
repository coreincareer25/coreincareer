
import { AdminSidebar } from './admin-sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-muted/40">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
