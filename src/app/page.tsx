import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { advantages, testimonials, faqs, services, partners } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Award, FileText, Plane, School, Sparkles, UserCheck } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  UserCheck,
  School,
  FileText,
  Award,
  Plane,
  Sparkles,
};

const educationalPrograms = [
  {
    title: 'Career Counseling',
    description: 'Personalized guidance to help you choose the right stream, course, and career path based on your strengths, interests, and goals.',
    image: '/images/home/career-counseling.jpg',
    aiHint: 'confused student career',
    href: '/services'
  },
  {
    title: 'College Guidance (UG & PG)',
    description: 'Expert support in selecting suitable undergraduate and postgraduate programs based on your profile, goals, and academic background.',
    image: '/images/home/college-guidance.jpg',
    aiHint: 'students studying group',
    href: '/services'
  },
  {
    title: 'Scholarship & Loan Assistance',
    description: 'Professional endorsement and documentation support for both Government & Private scholarships and education loan, improving your chances of selection.',
    image: '/images/home/scholarship-assistance.jpg',
    aiHint: 'scholarship document',
    href: '/services'
  }
];


export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <section className="text-center pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <p className="font-semibold uppercase tracking-widest text-gray-500 animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards delay-200">
            EMPOWER YOUR FUTURE
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards delay-300">
            <Balancer>
              Discover the Core of Your
              <br />
              <span className="text-primary">Career Path</span>
            </Balancer>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards delay-400">
            We provide expert guidance and personalized support to help you navigate your educational and professional journey with confidence.
          </p>
          <div className="mt-10 animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards delay-500">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
              <Link href="/contact">
                Get your free consult today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 animate-in fade-in duration-700 fill-mode-backwards delay-500">
        <div className="relative h-40 md:h-64 lg:h-96 w-full max-w-6xl mx-auto">
           <Image
              src="/images/home/hero-group.jpg"
              alt="A diverse group of professionals in various uniforms"
              fill
              className="object-contain"
              data-ai-hint="professionals group cartoon"
            />
        </div>
      </section>

      <section className="py-20 bg-[#F3FAF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
            <p className="font-semibold uppercase tracking-widest text-primary">
              WHAT WE OFFER
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
              Our Unique Advantages Set Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={cn(
                  'p-8 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards',
                  advantage.highlight ? 'bg-purple-100 border-primary' : 'bg-card'
                )}
                 style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                <CardContent className="p-0 flex flex-col items-center flex-1">
                  <p className="text-primary font-bold text-2xl">{advantage.number}</p>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{advantage.title}</h3>
                  <p className="mt-4 text-muted-foreground flex-grow">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards">
              <Carousel className="w-full max-w-lg mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src="/images/home/lab-students-1.jpg"
                          alt="Students using microscopes in a lab"
                          fill
                          className="object-cover"
                          data-ai-hint="students laboratory"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src="/images/home/lab-students-2.jpg"
                          alt="A student looking through a microscope"
                          fill
                          className="object-cover"
                          data-ai-hint="student microscope"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
              <p className="font-semibold uppercase tracking-widest text-primary">WHO ARE WE</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">Our Journey and Commitment</h2>
              <p className="mt-4 text-muted-foreground">Core in Career was founded to bridge the gap between education and industry needs, providing students with the skills and knowledge to excel. We believe the foundation of a successful career lies in understanding yourself. Let us help you explore your inner strengths and match them to the right career path.</p>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                <Link href="/about">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-[#f9f4ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
            <p className="font-semibold uppercase tracking-widest text-primary">
              OUR SERVICES
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
              Explore Our Educational Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalPrograms.map((program, index) => (
              <Card 
                key={program.title} 
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards flex flex-col"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    data-ai-hint={program.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-center">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter className="justify-center p-6">
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-6 py-2 font-semibold hover:opacity-90 transition-opacity">
                    <Link href={program.href}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards">
              <p className="font-semibold uppercase tracking-widest text-primary">
                OUR PARTNERS
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
                Our Partner Colleges And Institutions
              </h2>
              <p className="mt-4 text-muted-foreground">
                We offer reliable guidance on higher education opportunities across various states, including Odisha, Pune, Bangalore, Uttar Pradesh, Mumbai, and many more. At Core in Career, our commitment is to provide high-quality career counselling and services by thoroughly understanding the needs of both students and institutions. Our mission is to uplift educational standards across the nation — because we believe in "Sabka Saath, Sabka Education."
              </p>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                <Link href="/colleges">Read More</Link>
              </Button>
            </div>
            <div className="animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm transition-transform hover:-translate-y-1">
                     <div className="relative h-16 w-full sm:h-20">
                      <Image 
                          src={partner.logo} 
                          alt={partner.name} 
                          fill
                          className="object-contain"
                          data-ai-hint={partner.aiHint}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F3FAF7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards">
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/home/education-innovation.jpg"
                  alt="Innovative education solutions"
                  fill
                  className="object-cover"
                  data-ai-hint="education innovation"
                />
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
              <p className="font-semibold uppercase tracking-widest text-primary">WHY WE STAND OUT</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
                <Balancer>
                  Distinct Advantages of Partnering with Us
                </Balancer>
              </h2>
              <p className="mt-4 text-muted-foreground">At Core in Career, we pride ourselves on delivering innovative education solutions and unmatched support to our learners.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">Tailored Learning Experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">Industry-Relevant Curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">Long-Term Career Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
              <div className="text-center mb-12">
                  <p className="font-semibold uppercase tracking-widest text-primary">TESTIMONIALS</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">What Our Students Say</h2>
              </div>
              <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full max-w-5xl mx-auto"
              >
                  <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card className="h-full flex flex-col transition-shadow hover:shadow-xl">
                                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                          <div className="mt-6 flex items-center gap-4">
                                              <Avatar>
                                                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                              </Avatar>
                                              <div>
                                                  <p className="font-semibold">{testimonial.name}</p>
                                                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                              </div>
                                          </div>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
              </Carousel>
          </div>
      </section>
      
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
              <div className="text-center mb-12">
                  <p className="font-semibold uppercase tracking-widest text-primary">FAQs</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b">
                          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground">
                              {faq.answer}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </section>
    </main>
  );
}
