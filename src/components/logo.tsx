import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" aria-label="Core in Career Home">
      <Image
        src="/logo.jpg"
        alt="Core in Career Logo"
        width={32}
        height={32}
        className="h-8 w-8"
        priority
      />
    </Link>
  );
}
