
import type { Metadata } from 'next';
import CoursesPageContent from './courses-page-content';

export const metadata: Metadata = {
  title: 'Course Explorer',
  description: 'Browse our extensive catalog of courses in Engineering, Medical, Management, and more. Find the perfect program for your academic and career goals.',
  openGraph: {
    title: 'Course Explorer | Core in Career',
    description: 'Find the perfect program for your academic and career goals.',
  },
};

export default function CoursesPage() {
  return <CoursesPageContent />;
}
