
import type { Metadata } from 'next';
import CollegesPageContent from './colleges-page-content';

export const metadata: Metadata = {
  title: 'College Profiles',
  description: 'Explore detailed profiles of top colleges and universities for Engineering, Medical, Management, and more. Find your ideal institution with Core in Career.',
  openGraph: {
    title: 'College Profiles | Core in Career',
    description: 'Find your ideal institution for Engineering, Medical, Management, and more.',
  },
};

export default function CollegesPage() {
  return <CollegesPageContent />;
}
