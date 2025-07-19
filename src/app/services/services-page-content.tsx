
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Award, FileText, Plane, School, Sparkles, UserCheck, Snowflake, ChevronRight, Banknote } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";

const iconMap: { [key: string]: React.ElementType } = {
  UserCheck,
  School,
  FileText,
  Award,
  Plane,
  Sparkles,
  Banknote
};

const admissionProcessSteps = [
    {
        title: "Psychometric Testing",
        description: "We assess your personality, interests, and aptitude using science-based tools (like the Holland RIASEC model) to understand your strengths and ideal career path.",
        readMoreLink: "/psychometric-testing"
    },
    {
        title: "Subject & Course Selection",
        description: "Based on your test results and personal interests, we help you choose the most suitable academic stream, subjects, and courses—whether at UG or PG level."
    },
    {
        title: "Document Verification",
        description: "We guide you in organizing and reviewing important documents (marksheets, ID proofs, certificates, etc.) needed for admission and scholarship applications."
    },
    {
        title: "Interview / Entrance Exam Preparation",
        description: "We offer tips, mock interviews, and practice materials to help you perform confidently in college entrance exams or selection interviews."
    },
    {
        title: "Final Admission Guidance",
        description: "From choosing the right college to completing the application process, we provide end-to-end support to ensure a smooth, stress-free admission."
    }
];

// Wavy line SVG component for the offerings banner
const WavyLine = () => (
    <svg width="80" height="10" viewBox="0 0 100 10" className="inline-block text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" fill="transparent" strokeWidth="2"/>
    </svg>
);


export default function ServicesPageContent() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardContainerVariants = {
      hidden: {},
      visible: {
      transition: {
          staggerChildren: 0.1,
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

  const ServiceSection = ({
    image,
    imageAlt,
    aiHint,
    number,
    title,
    description,
    children,
    imageFirst = false
  } : {
    image: string,
    imageAlt: string,
    aiHint: string,
    number: string,
    title: string,
    description?: string,
    children?: React.ReactNode,
    imageFirst?: boolean
  }) => {
    const imageContent = (
      <MotionWrapper
        initial={{ opacity: 0, x: imageFirst ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl"
      >
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" data-ai-hint={aiHint} />
      </MotionWrapper>
    );
  
    const textContent = (
      <MotionWrapper
        initial={{ opacity: 0, x: imageFirst ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold text-primary">{number}</p>
        <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">{title}</h3>
        {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        {children}
      </MotionWrapper>
    );

    return (
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {imageFirst ? textContent : imageContent}
            {imageFirst ? imageContent : textContent}
          </div>
        </div>
      </section>
    );
  };
  

  return (
    <div className="bg-background">
      <MotionWrapper
        el="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 h-full w-full">
            <Image
                src="/images/about/about-header.jpeg"
                alt="Person helping another person"
                fill
                className="object-cover object-center"
                data-ai-hint="helping hand"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
            <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out">
                <Balancer>
                Our <span className="text-primary">Services</span>
                </Balancer>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive support to ensure you make the best decisions for your academic and professional future. Our goal is to empower you at every step of your educational journey.
            </p>
        </div>
      </MotionWrapper>

      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <MotionWrapper
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="text-center mb-12"
            >
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              Admission Process <span className="text-primary">Support</span>
            </h2>
          </MotionWrapper>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <MotionWrapper
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full space-y-4"
            >
                {admissionProcessSteps.map((step, index) => (
                    <div key={step.title}>
                        {step.readMoreLink ? (
                            <div className="border rounded-lg bg-card px-4 shadow-sm">
                                <Link href={step.readMoreLink} className="flex flex-1 items-center justify-between py-4 text-left text-lg font-semibold hover:no-underline">
                                    {step.title}
                                    <ChevronRight className="h-5 w-5" />
                                </Link>
                            </div>
                        ) : (
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="border rounded-lg bg-card px-4 shadow-sm">
                                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{step.title}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {step.description}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )}
                    </div>
                ))}
            </MotionWrapper>
            <MotionWrapper
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/images/services/counseling-sign.jpg"
                alt="Counselling Services Sign"
                fill
                className="object-cover object-center"
                data-ai-hint="counselling services sign"
              />
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
        className="py-12 bg-cyan-50/50 text-center"
      >
          <div className="container mx-auto max-w-7xl px-4">
              <Snowflake className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">Your Ambition, Our Mission</h2>
              <div className="mt-2 flex items-center justify-center gap-4 text-muted-foreground">
                  <WavyLine />
                  <span className="text-lg font-medium">Offerings</span>
                  <WavyLine />
              </div>
          </div>
      </MotionWrapper>

        <ServiceSection
            image="/images/services/career-choice.jpg"
            imageAlt="Career counselling illustration"
            aiHint="career choice illustration"
            number="01."
            title="Career Counseling"
            description="Our career counseling service provides tailored advice to help students identify their strengths, interests, and career goals, ensuring a well-informed decision-making process. We guide them through various educational options and career paths that align with their aspirations."
        />

        <ServiceSection
            image="/images/services/classroom-lecture.png"
            imageAlt="Students in a classroom"
            aiHint="students classroom lecture"
            number="02."
            title="College & Management Counselling (UG & PG)"
            description="We offer expert guidance to help you choose the right undergraduate or postgraduate program based on your interests, goals, and academic background. Our counselling also covers admission through private institutions, management quota seats, and stream-specific opportunities—ensuring you make informed and strategic decisions for your higher education journey."
            imageFirst
        />

        <ServiceSection
            image="/images/services/scholarship-money.png"
            imageAlt="Scholarship assistance illustration"
            aiHint="scholarship money illustration"
            number="03."
            title="Scholarship Assistance"
            description="At Core in Career, we proudly endorse students who demonstrate exceptional talent, determination, and a strong commitment to their future. Our scholarship endorsement recognizes individuals who not only meet academic excellence but also show clear purpose in their chosen career paths. Whether you're applying for a university scholarship, a competitive fellowship, or need support securing educational funding, Core in Career is here to champion your journey."
        >
          <ul className="mt-4 list-disc list-inside space-y-2 font-semibold text-gray-800">
              <li>Swami Vivekananda Scholarship</li>
              <li>Kanyashree Scholarship</li>
              <li>Nabanna Scholarship</li>
          </ul>
        </ServiceSection>
    
        <ServiceSection
            image="/images/services/student-loan.png"
            imageAlt="Student loan guidance"
            aiHint="student loan concept"
            number="04."
            title="Education Loan Guidance"
            description="At Core in Career, we provide personalized support to help students and parents secure education loans from government and private institutions. From selecting the right bank or scheme to understanding interest rates, documentation, and eligibility, we guide you through every step—ensuring a smooth and hassle-free loan application process for studies in India or abroad."
            imageFirst
        />

        <ServiceSection
            image="/images/psychometric-testing/student-exam.jpeg"
            imageAlt="Entrance exam illustration"
            aiHint="student exam illustration"
            number="05."
            title="Entrance Exam"
        >
          <div className="mt-4 text-muted-foreground space-y-2">
            <p>B.Tech/ Pharmacy — <span className="font-semibold text-gray-800">JEE MAINS/WBJEE</span></p>
            <p>MBBS- <span className="font-semibold text-gray-800">NEET</span></p>
            <p>Nursing — <span className="font-semibold text-gray-800">JENPAS/JOINT</span></p>
            <p>Law — <span className="font-semibold text-gray-800">CLAT</span></p>
            <p>Management — <span className="font-semibold text-gray-800">CET</span></p>
            <p>Paramedical — <span className="font-semibold text-gray-800">JENPAS</span></p>
            <p>Architecture — <span className="font-semibold text-gray-800">NATA</span></p>
            <p>Diploma Engineering — <span className="font-semibold text-gray-800">JEXPO</span></p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-bold text-gray-900">Other Entrance</h4>
            <p className="mt-2 text-muted-foreground">KIITEE/SAAT/VITEEE/IEMJEE/BET etc.</p>
          </div>
        </ServiceSection>
      

      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
            <MotionWrapper
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
            {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <MotionWrapper el="div" variants={cardVariants} key={service.title}>
                    <Card className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl h-full p-4">
                        <CardHeader className="items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                {IconComponent && <IconComponent className="h-8 w-8" />}
                            </div>
                            <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                  </MotionWrapper>
                );
            })}
            </MotionWrapper>
        </div>
      </MotionWrapper>

    </div>
  );
}
