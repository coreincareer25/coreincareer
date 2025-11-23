
import type { Metadata } from 'next';
import CollegesPageContent from './colleges-page-content';
import { getAdminFirestore } from '@/lib/firebase-admin';

export const metadata: Metadata = {
  title: 'College Profiles',
  description: 'Explore detailed profiles of top colleges and universities for Engineering, Medical, Management, and more. Find your ideal institution with Core in Career.',
  openGraph: {
    title: 'College Profiles | Core in Career',
    description: 'Find your ideal institution for Engineering, Medical, Management, and more.',
  },
};

export const revalidate = 0; // Don't cache this page

type College = {
  name: string;
  image: string;
};

type SubCategory = {
  title: string;
  colleges: College[];
};

type CollegeCategory = {
  id: string;
  title: string;
  description?: string;
  colleges?: College[];
  subCategories?: { [key: string]: SubCategory };
};

type CollegeData = {
    [id: string]: CollegeCategory;
}

async function getColleges() {
  const firestore = getAdminFirestore();
  const snapshot = await firestore.collection('colleges').get();
  if (snapshot.empty) {
    return {};
  }
  const colleges = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CollegeCategory));

  const collegeData = colleges.reduce((acc, college) => {
    acc[college.id] = college;
    return acc;
  }, {} as CollegeData);

  return collegeData;
}


export default async function CollegesPage() {
  const collegeData = await getColleges();
  return <CollegesPageContent collegeData={collegeData} />;
}
