
import type { Metadata } from 'next';
import ScholarshipsPageContent from './scholarships-page-content';
import { getAdminFirestore } from '@/lib/firebase-admin';

export const metadata: Metadata = {
  title: 'Scholarship Database',
  description: 'Find financial aid and scholarship opportunities to support your educational journey. Explore our database for B.Tech, Medical, MBA, and other programs.',
  openGraph: {
    title: 'Scholarship Database | Core in Career',
    description: 'Explore financial aid opportunities to support your education.',
  },
};

export const revalidate = 0; // Don't cache this page

type Scholarship = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  amount: string;
  image: string;
  aiHint?: string;
};

async function getScholarships(): Promise<Scholarship[]> {
  const firestore = getAdminFirestore();
  const snapshot = await firestore.collection('scholarships').get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Scholarship));
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships();
  return <ScholarshipsPageContent scholarships={scholarships} />;
}
