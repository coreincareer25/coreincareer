'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  School,
  Award,
  LayoutDashboard,
  LogOut,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { logout } from '@/app/admin/login/actions';

export function AdminSidebar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/courses', icon: BookOpen, label: 'Courses' },
    { href: '/admin/colleges', icon: School, label: 'Colleges' },
    { href: '/admin/scholarships', icon: Award, label: 'Scholarships' },
    { href: '/admin/seed', icon: Database, label: 'Seed Data' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-card text-card-foreground p-4 flex flex-col border-r">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname.startsWith(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
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
          className="w-full justify-start gap-3 text-left font-medium hover:bg-muted"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </form>
    </aside>
  );
}
