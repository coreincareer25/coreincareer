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
    { href: '/services', label: 'Our Services' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/recommendations', label: 'Recommendations' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">
              Guiding you on your educational journey with expert advice and personalized recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-headline">Quick Links</h3>
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
            <h3 className="font-semibold font-headline">Support</h3>
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
            <h3 className="font-semibold font-headline">Stay Updated</h3>
            <p className="mt-4 text-sm">
              Subscribe to our newsletter for the latest updates on courses, scholarships, and more.
            </p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EduPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
