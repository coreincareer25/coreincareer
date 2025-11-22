'use client';

import {
  LayoutDashboard,
  LogOut,
  BookCopy,
  Building,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { logout } from './login/actions';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const menuItems = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Courses',
    href: '/admin/courses',
    icon: BookCopy,
  },
  {
    label: 'Colleges',
    href: '/admin/colleges',
    icon: Building,
  },
  {
    label: 'Scholarships',
    href: '/admin/scholarships',
    icon: Award,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col bg-white p-4 shadow-md md:flex">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900',
              pathname === item.href && 'bg-gray-100 font-semibold text-gray-900'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <form action={logout}>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </div>
    </aside>
  );
}