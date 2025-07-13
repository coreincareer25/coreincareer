
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <Link href="/" aria-label="Core in Career Home" className="flex items-center gap-2 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Core in Career Logo"
        width={160}
        height={160}
        className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40"
        priority
      />
      {showSubtitle && (
        <div className="hidden sm:block">
          <p className="text-xs text-muted-foreground leading-tight">by JP Educational Service</p>
        </div>
      )}
    </Link>
  );
}

    