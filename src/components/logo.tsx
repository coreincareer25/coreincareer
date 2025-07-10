import Link from 'next/link';
import Image from 'next/image';

export function Logo({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <Link href="/" aria-label="Core in Career Home" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Core in Career Logo"
        width={160}
        height={160}
        className="h-40 w-40"
        priority
      />
      {showSubtitle && (
        <div>
          <p className="text-xs text-muted-foreground leading-tight">by JP Educational Service</p>
        </div>
      )}
    </Link>
  );
}
