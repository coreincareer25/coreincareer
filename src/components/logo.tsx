import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" aria-label="Core in Career Home">
      <svg
        className="h-8 w-8 text-gray-900"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Core in Career Logo</title>
        <path d="M12 2L1 7.2V16.8L12 22L23 16.8V7.2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M23 7.2L12 12L1 7.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 12V6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M5 14.5V10.5C6.10457 10.5 7 9.60457 7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
