import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, School, Award, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Course Explorer',
      description: 'Find the perfect course that aligns with your passion and career goals.',
      link: '/courses',
    },
    {
      icon: <School className="h-10 w-10 text-primary" />,
      title: 'College Profiles',
      description: 'Discover colleges that offer the best programs and campus life for you.',
      link: '/colleges',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Scholarship Database',
      description: 'Access a wide range of scholarships to fund your education.',
      link: '/scholarships',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Personalized Guidance',
      description: 'Get AI-powered recommendations for courses, colleges, and scholarships.',
      link: '/recommendations',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
            Your Path to a Brighter Future Starts Here
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            EduPath is your trusted partner in navigating the complex world of education. We provide the tools and guidance you need to make informed decisions about your future.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/recommendations">
                Get Personalized Recommendations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Discover Our Services</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive suite of tools to help you succeed on your educational journey.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Unlock Your Potential with AI</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not sure where to start? Our intelligent recommendation engine analyzes your unique profile—interests, academic background, and career goals—to suggest the best-fit courses, colleges, and scholarships for you.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/recommendations">Try Our Recommender <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="AI powered recommendations"
              fill
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="students future"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
