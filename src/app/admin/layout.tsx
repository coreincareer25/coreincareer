import type { Metadata } from 'next';
import { AppLayout } from './app-layout';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage your website content.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}