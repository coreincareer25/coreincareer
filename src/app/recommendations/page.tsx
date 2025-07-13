
import type { Metadata } from 'next';
import RecommendationsPageContent from './recommendations-page-content';

export const metadata: Metadata = {
  title: 'AI-Powered Recommendations',
  description: 'Get personalized course, college, and scholarship recommendations based on your interests, academic background, and career goals using our advanced AI tool.',
  openGraph: {
    title: 'AI-Powered Recommendations | Core in Career',
    description: 'Let our AI guide you to the perfect educational path.',
  },
};

export default function RecommendationsPage() {
  return <RecommendationsPageContent />;
}
