
import type { Metadata } from 'next';
import ScholarshipsPageContent from './scholarships-page-content';

export const metadata: Metadata = {
  title: 'Scholarship Database',
  description: 'Find financial aid and scholarship opportunities to support your educational journey. Explore our database for B.Tech, Medical, MBA, and other programs.',
  openGraph: {
    title: 'Scholarship Database | Core in Career',
    description: 'Explore financial aid opportunities to support your education.',
  },
};

export default function ScholarshipsPage() {
  return <ScholarshipsPageContent />;
}
