
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { LayoutProvider } from '@/components/layout-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Core in Career by JP Educational Service',
  description: 'Your guide to educational options and services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} !scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
