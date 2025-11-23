
import type { Metadata } from 'next';
import CoursesPageContent from './courses-page-content';
import { getAdminFirestore } from '@/lib/firebase-admin';

export const metadata: Metadata = {
  title: 'Course Explorer',
  description: 'Browse our extensive catalog of courses in Engineering, Medical, Management, and more. Find the perfect program for your academic and career goals.',
  openGraph: {
    title: 'Course Explorer | Core in Career',
    description: 'Find the perfect program for your academic and career goals.',
  },
};

type Course = {
  id: string;
  name: string;
  category: string;
  colleges: string[];
};

type GroupedCourses = {
  [key: string]: Course[];
}

async function getCourses() {
  const firestore = getAdminFirestore();
  const snapshot = await firestore.collection('courses').get();
  if (snapshot.empty) {
    return {};
  }
  const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));

  const groupedCourses = courses.reduce((acc, course) => {
    const category = course.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(course);
    return acc;
  }, {} as GroupedCourses);

  return groupedCourses;
}


export default async function CoursesPage() {
  const courseData = await getCourses();
  return <CoursesPageContent courseData={courseData} />;
}
