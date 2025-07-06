import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const advantages = [
  {
    number: '01.',
    title: 'Experienced Mentors',
    description: 'Our team of seasoned professionals provides personalized guidance, ensuring each student receives tailored support throughout their learning journey.',
    highlight: true,
  },
  {
    number: '02.',
    title: 'Student-Centric Approach',
    description: 'Our focus is on the needs of our students, prioritizing their success through interactive learning and continuous feedback.',
    highlight: false,
  },
  {
    number: '03.',
    title: 'Psychometric Assessments',
    description: 'Not sure what your strengths are? Our fun, science-based tests help you understand your personality, interests, and skills—so you can make smarter career choices.',
    highlight: false,
  },
  {
    number: '04.',
    title: 'Scholarship Endorsement',
    description: 'We offer guidance and official support to help students successfully apply for both government-funded and private scholarships.',
    highlight: false,
  },
];

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <section className="text-center pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <p className="font-semibold uppercase tracking-widest text-gray-500">
            EMPOWER YOUR FUTURE
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Discover the Core of Your
            <br />
            Career Path
          </h1>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 shadow-lg hover:opacity-90 transition-opacity">
              <Link href="/contact">
                Get your free consult today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="relative h-40 md:h-64 lg:h-96 w-full max-w-6xl mx-auto">
           <Image
              src="https://placehold.co/1200x350.png"
              alt="A diverse group of professionals in various uniforms"
              fill
              className="object-contain"
              data-ai-hint="professionals group cartoon"
            />
        </div>
      </section>

      <section className="py-20 bg-[#F3FAF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-widest text-gray-700">
              WHAT WE OFFER
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
              Our Unique Advantages Set Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={cn(
                  'p-8 text-center flex flex-col items-center shadow-lg',
                  advantage.highlight ? 'bg-secondary' : 'bg-card'
                )}
              >
                <CardContent className="p-0 flex flex-col items-center flex-1">
                  <p className="text-primary font-bold text-lg">{advantage.number}</p>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{advantage.title}</h3>
                  <p className="mt-4 text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
