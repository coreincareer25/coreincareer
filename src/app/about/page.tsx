
import type { Metadata } from 'next';
import AboutPageContent from './about-page-content';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Core in Career\'s mission to empower individuals through personalized career counseling, our story, and the expert team dedicated to your success.',
  openGraph: {
    title: 'About Us | Core in Career',
    description: 'Discover our story, vision, and the values that drive us to provide the best career guidance.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
