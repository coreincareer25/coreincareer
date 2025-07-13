"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Logo />
        
        <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none">
                  COURSE INFORMATION <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild><Link href="/courses">OUR COURSES</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="/colleges">COLLEGES WE OFFER</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="/scholarships">SCHOLARSHIPS</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <Button asChild className="bg-[#D000F7] hover:bg-[#D000F7]/90 text-white rounded-md px-5 py-2">
                <Link href="/contact">
                    CONTACT US
                </Link>
            </Button>
        </div>

        <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8 flex flex-col gap-y-6">
                    <Logo />
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                    ))}
                    <div className="space-y-2">
                        <p className="text-lg font-medium text-foreground">COURSE INFORMATION</p>
                        <div className="flex flex-col gap-y-2 pl-4">
                            <Link href="/courses" onClick={() => setMenuOpen(false)} className="text-md text-muted-foreground hover:text-primary">Courses</Link>
                            <Link href="/colleges" onClick={() => setMenuOpen(false)} className="text-md text-muted-foreground hover:text-primary">Colleges</Link>
                            <Link href="/scholarships" onClick={() => setMenuOpen(false)} className="text-md text-muted-foreground hover:text-primary">Scholarships</Link>
                        </div>
                    </div>
                    <Button asChild className="mt-4 bg-[#D000F7] hover:bg-[#D000F7]/90 text-white">
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                            CONTACT US
                        </Link>
                    </Button>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
