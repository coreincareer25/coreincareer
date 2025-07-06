import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="EduPath Home">
      <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-primary" />
      <span className="text-xl md:text-2xl font-bold text-foreground font-headline">EduPath</span>
    </Link>
  );
}
