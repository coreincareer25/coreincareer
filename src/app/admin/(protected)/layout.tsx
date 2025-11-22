'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  School,
  Award,
  LayoutDashboard,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { logout } from '@/app/admin/login/actions';

function AdminSidebar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/courses', icon: BookOpen, label: 'Courses' },
    { href: '/admin/colleges', icon: School, label: 'Colleges' },
    { href: '/admin/scholarships', icon: Award, label: 'Scholarships' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white p-4 flex flex-col">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname.startsWith(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-gray-700'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <form action={logout}>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-left font-medium hover:bg-gray-700"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </form>
    </aside>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
