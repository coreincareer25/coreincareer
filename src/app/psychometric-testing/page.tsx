
import type { Metadata } from 'next';
import PsychometricTestingPageContent from './psychometric-testing-page-content';

export const metadata: Metadata = {
  title: 'Psychometric Testing',
  description: 'Discover your strengths and find the perfect career path with our science-backed psychometric assessments, including the Holland RIASEC model.',
  openGraph: {
    title: 'Psychometric Testing | Core in Career',
    description: 'Unlock your potential and make informed career choices with our assessments.',
  },
};

export default function PsychometricTestingPage() {
    return <PsychometricTestingPageContent />;
}
