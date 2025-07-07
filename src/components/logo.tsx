import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" aria-label="Core in Career Home" className="flex items-center gap-2">
      <Image
        src="/logo.jpg"
        alt="Core in Career Logo"
        width={32}
        height={32}
        className="h-8 w-8"
        priority
      />
      <div>
        <p className="font-bold text-lg leading-tight">Core in Career</p>
        <p className="text-xs text-muted-foreground leading-tight">by JP Educational Service</p>
      </div>
    </Link>
  );
}
