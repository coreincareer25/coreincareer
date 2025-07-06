import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/courses', label: 'Courses' },
    { href: '/colleges', label: 'Colleges' },
    { href: '/scholarships', label: 'Scholarships' },
  ];
  const supportLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/recommendations', label: 'AI Recommendations' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Core in Career Home">
                <div className="bg-white p-1 rounded-md">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
                        <path d="M12 2L1 7.2V16.8L12 22L23 16.8V7.2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M23 7.2L12 12L1 7.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12 12V6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M5 14.5V10.5C6.10457 10.5 7 9.60457 7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="text-xl md:text-2xl font-black text-white font-headline">Core in Career</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Guiding you on your educational journey with expert advice and personalized recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates on courses, scholarships, and more.
            </p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
              <Button type="submit" size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Core in Career. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
