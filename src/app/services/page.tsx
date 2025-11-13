
import type { Metadata } from 'next';
import ServicesPageContent from './services-page-content';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive services offered by Core in Career, including career counseling, college admission support, scholarship assistance, and entrance exam preparation.',
  openGraph: {
    title: 'Our Services | Core in Career',
    description: 'Personalized guidance for every step of your educational journey.',
  },
};


export default function ServicesPage() {
  return <ServicesPageContent />;
}
