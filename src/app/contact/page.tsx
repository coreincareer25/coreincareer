
import type { Metadata } from 'next';
import ContactPageContent from './contact-page-content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Core in Career team for a free consultation. Ask questions, get information, and start your journey to a successful career.',
  openGraph: {
    title: 'Contact Us | Core in Career',
    description: 'Reach out for a free consultation and let us help you build your future.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
