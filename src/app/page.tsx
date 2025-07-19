
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { advantages, testimonials, faqs, partners } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { MotionWrapper } from '@/components/motion-wrapper';

const educationalPrograms = [
  {
    title: 'Career Counseling',
    description: 'Personalized guidance to help you choose the right stream, course, and career path based on your strengths, interests, and goals.',
    image: '/images/home/career-counseling.jpeg',
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
    image: '/images/home/scholarship-assistance.jpeg',
    aiHint: 'scholarship document',
    href: '/services'
  }
];

const heroSlides = [
    {
        src: '/images/home/hero-group.png',
        alt: 'Students working together in a science lab',
        aiHint: 'students laboratory'
    },
    {
        src: '/images/home/1.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/2.jpg',
        alt: 'A person offering a helping hand to another',
        aiHint: 'helping hand'
    },
    {
        src: '/images/home/3.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/4.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/5.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/6.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/7.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/8.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
    {
        src: '/images/home/9.jpg',
        alt: 'A group of students studying together on a campus',
        aiHint: 'students studying group'
    },
];


export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const heroPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <main className="bg-white overflow-x-hidden">
        <section className="relative text-center h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
            <Carousel
                plugins={[heroPlugin.current]}
                className="absolute inset-0 h-full w-full"
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {heroSlides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[60vh] md:h-[80vh] w-full">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover object-center"
                                    data-ai-hint={slide.aiHint}
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <MotionWrapper
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }}
                className="container relative mx-auto px-4"
            >
                <MotionWrapper variants={cardVariants}>
                    <p className="font-semibold uppercase md:text-xl tracking-widest text-[#57ff39] drop-shadow-[0_0_10px_#FFFFFF]">
                    EMPOWER YOUR FUTURE
                    </p>
                </MotionWrapper>
                <MotionWrapper variants={cardVariants}>
                    <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out">
                    <Balancer>
                        Discover the Core of Your
                        <br />
                        <span className="text-[#ff81cc]">Career Path</span>
                    </Balancer>
                    </h1>
                </MotionWrapper>
                <MotionWrapper variants={cardVariants}>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                    We provide expert guidance and personalized support to help you navigate your educational and professional journey with confidence.
                    </p>
                </MotionWrapper>
                <MotionWrapper variants={cardVariants}>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                        <Link href="/contact">
                        Get your free consult today
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                        <Link href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
                        Download Brochure
                        </Link>
                    </Button>
                    </div>
                </MotionWrapper>
            </MotionWrapper>
        </section>

      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-[#F3FAF7]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-widest text-primary">
              WHAT WE OFFER
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Our Unique Advantages Set Us Apart
            </h2>
          </div>
          <MotionWrapper
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {advantages.map((advantage) => (
              <MotionWrapper el="div" variants={cardVariants} key={advantage.title}>
                <Card
                  className={cn(
                    'p-6 md:p-8 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2 h-full'
                  )}
                >
                  <CardContent className="p-0 flex flex-col items-center flex-1">
                    <p className="text-primary font-bold text-2xl">{advantage.number}</p>
                    <h3 className="mt-4 text-xl font-bold text-foreground">{advantage.title}</h3>
                    <p className="mt-4 text-muted-foreground flex-grow">{advantage.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </MotionWrapper>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Carousel 
                className="w-full max-w-lg mx-auto" 
                opts={{ loop: true, align: "start" }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {['/images/home/lab-students-1.jpeg','/images/home/lab-students-2.jpeg','/images/home/lab-students-3.jpeg','/images/home/lab-students-4.jpeg','/images/home/lab-students-5.jpeg','/images/home/lab-students-6.jpeg','/images/home/lab-students-7.jpeg','/images/home/lab-students-8.jpeg'].map((src, idx) => (
                    <CarouselItem key={src+idx}>
                      <div className="p-1">
                        <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-lg group">
                          <Image
                            src={src}
                            alt="Students in a lab"
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            data-ai-hint="students laboratory"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:left-4" />
                <CarouselNext className="right-2 md:right-4" />
              </Carousel>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-semibold uppercase tracking-widest text-primary">WHO ARE WE</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">Our Journey and Commitment</h2>
              <p className="mt-4 text-muted-foreground">Core in Career was founded to bridge the gap between education and industry needs, providing students with the skills and knowledge to excel. We believe the foundation of a successful career lies in understanding yourself. Let us help you explore your inner strengths and match them to the right career path.</p>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg transition-colors duration-300 ease-in-out hover:from-fuchsia-600 hover:to-cyan-600">
                <Link href="/about">Read More</Link>
              </Button>
            </MotionWrapper>
          </div>
        </div>
      </section>
      
      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-[#f9f4ff]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-widest text-primary">
              OUR SERVICES
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Explore Our Educational Programs
            </h2>
          </div>
          <MotionWrapper
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {educationalPrograms.map((program) => (
              <MotionWrapper el="div" variants={cardVariants} key={program.title}>
                <Card 
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover object-center"
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
                    <Button asChild className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-md px-6 py-2 font-semibold transition-all duration-300 ease-in-out hover:from-fuchsia-700 hover:to-cyan-700 hover:opacity-90">
                      <Link href={program.href}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </MotionWrapper>

      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-semibold uppercase tracking-widest text-primary">
                OUR PARTNERS
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                Our Partner Colleges And Institutions
              </h2>
              <p className="mt-4 text-muted-foreground">
                We offer reliable guidance on higher education opportunities across various states, including Odisha, Pune, Bangalore, Uttar Pradesh, Mumbai, and many more. At Core in Career, our commitment is to provide high-quality career counselling and services by thoroughly understanding the needs of both students and institutions. Our mission is to uplift educational standards across the nation — because we believe in "Sabka Saath, Sabka Education."
              </p>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 ease-in-out hover:from-fuchsia-700 hover:to-cyan-700 hover:opacity-90">
                <Link href="/colleges">Read More</Link>
              </Button>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-6">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center justify-center p-4 bg-purple-50 rounded-lg shadow-sm transition-transform hover:-translate-y-1 aspect-square">
                    <div className="relative w-full h-full">
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
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F3FAF7] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative h-80 md:h-[30rem] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/home/education-innovation.jpeg"
                  alt="Innovative education solutions"
                  fill
                  className="object-cover object-center"
                  data-ai-hint="education innovation"
                />
              </div>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-semibold uppercase tracking-widest text-primary">WHY WE STAND OUT</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">
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
            </MotionWrapper>
          </div>
        </div>
      </section>

      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-secondary"
      >
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <p className="font-semibold uppercase tracking-widest text-primary">TESTIMONIALS</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">What Our Students Say</h2>
              </div>
              <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[plugin.current]}
                  className="w-full max-w-5xl mx-auto"
              >
                  <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1 h-full">
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
                  <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2" />
              </Carousel>
          </div>
      </MotionWrapper>
      
      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-background"
      >
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                  <p className="font-semibold uppercase tracking-widest text-primary">FAQs</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">Frequently Asked Questions</h2>
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
      </MotionWrapper>
    </main>
  );
}
