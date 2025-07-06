import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Core in Career Home">
      <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-gray-900" />
      <span className="text-xl md:text-2xl font-black text-gray-900 font-headline">Core in Career</span>
    </Link>
  );
}
