
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { LayoutProvider } from '@/components/layout-provider';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Core in Career by JP Educational Service',
    template: '%s | Core in Career',
  },
  description: 'Expert career counseling, college guidance, and scholarship assistance. Discover your potential with Core in Career, powered by JP Educational Service.',
  keywords: ['career counseling', 'college admission', 'scholarship assistance', 'psychometric testing', 'educational guidance', 'JP Educational Service'],
  openGraph: {
    title: 'Core in Career by JP Educational Service',
    description: 'Your guide to educational options and services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.coreincareer.in', // Replace with your actual domain
    siteName: 'Core in Career',
    images: [
      {
        url: 'https://www.coreincareer.in/og-image.jpg', // 
        width: 1200,
        height: 630,
        alt: 'Core in Career Logo',
      },
    ],
  },
  verification: {
    google: 'Wnb_tKsJv1PGnwtOeykkDSrKXCyiw_3al5PFikBIX_s',
  },
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
        <FirebaseClientProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </FirebaseClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
