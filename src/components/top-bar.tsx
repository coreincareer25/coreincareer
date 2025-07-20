
"use client";

import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export function TopBar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className={cn(
        "bg-primary text-primary-foreground transition-transform duration-300 ease-in-out",
        isScrolled ? "-translate-y-full" : "translate-y-0"
    )}>
      <div className="container mx-auto flex h-10 max-w-7xl items-center justify-center px-4 sm:justify-end">
        <div className="flex items-center gap-4 text-xs font-medium sm:gap-6 sm:text-sm">
          <a
            href="tel:+919123307383"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+91 9123783438</span>
          </a>
          <div className="h-4 w-px bg-primary-foreground/50" />
          <a
            href="mailto:coreincareer2025@gmail.com"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">coreincareer2025@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
