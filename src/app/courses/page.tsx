
"use client";

import Balancer from "react-wrap-balancer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { School } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { courseData } from "@/lib/course-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Course Explorer',
  description: 'Browse our extensive catalog of courses in Engineering, Medical, Management, and more. Find the perfect program for your academic and career goals.',
  openGraph: {
    title: 'Course Explorer | Core in Career',
    description: 'Find the perfect program for your academic and career goals.',
  },
};


export default function CoursesPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
                src="/images/courses/hero.jpg"
                alt="Open book in a library"
                fill
                className="object-cover object-center"
                data-ai-hint="lecture hall"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl md:text-6xl">
            <Balancer>
              Course <span className="text-[#ff81cc]">Explorer</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our extensive catalog of courses to find the perfect fit for your academic and career aspirations.
          </p>
        </div>
      </MotionWrapper>

      <div className="bg-gradient-to-b from-purple-100/50 via-pink-100/50 to-transparent">
        <MotionWrapper
          el="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-12 container mx-auto max-w-6xl px-4"
        >
          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              <TabsTrigger value="engineering" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Engineering</TabsTrigger>
              <TabsTrigger value="medical" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Medical</TabsTrigger>
              <TabsTrigger value="nursing" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Nursing</TabsTrigger>
              <TabsTrigger value="paramedical" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Paramedical</TabsTrigger>
              <TabsTrigger value="computational" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Computational</TabsTrigger>
              <TabsTrigger value="management" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Management</TabsTrigger>
              <TabsTrigger value="others" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">Others</TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
                {(Object.keys(courseData) as Array<keyof typeof courseData>).map(tabName => (
                    <TabsContent key={String(tabName)} value={String(tabName)} className="m-0">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {courseData[tabName].map((course, index) => (
                                <AccordionItem key={course.name} value={`item-${index}`} className="border rounded-lg bg-white/80 backdrop-blur-sm shadow-sm px-4">
                                    <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base">
                                        {course.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {tabName === 'engineering' && course.name !== 'Diploma / Polytechnic' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Students who have completed their 12th standard with PCM (Physics, Chemistry, Mathematics) are eligible to apply for this course.</li>
                                                    <li>10+2 from a recognized Board of education with a minimum aggregate score of 50% Marks.</li>
                                                    <li><strong>Entrance:</strong> Admission to this course is based on entrance exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, etc.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'engineering' && course.name === 'Diploma / Polytechnic' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <p className="text-muted-foreground">A Polytechnic Diploma, also known as a Diploma in Engineering, is a shorter, technical qualification that can be pursued after completing Class 10 or 12. It’s a good option for students wanting a practical, industry-focused education. The eligibility criteria vary, but typically require a passing grade in your qualifying exam, often with a focus on science and math. Job prospects are positive, with diploma holders finding roles in various technical fields.</p>
                                                <p className="text-muted-foreground"><strong>Entrance:</strong> JEXPO, VOCLET</p>
                                            </div>
                                        )}
                                        {tabName === 'medical' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Entrance:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Students generally need to have passed their 10+2 (or equivalent) with Physics, Chemistry, and Biology (PCB) and English, and qualify in the NEET (National Eligibility cum Entrance Test).</li>
                                                    <li><strong>Entrance Exam:</strong> NEET</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'nursing' && course.name === 'B.Sc. in Nursing' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Duration:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Typically, candidates need to have passed their 10+2 (or equivalent) with Physics, Chemistry, and Biology (PCB) as main subjects.</li>
                                                    <li>It is a four-year undergraduate program designed to prepare students for a career as a registered nurse.</li>
                                                    <li><strong>Entrance Exams:</strong> Popular entrance exams for B.Sc. Nursing include AIIMS Paramedical, NEET, and IPU CET.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'nursing' && course.name === 'GNM (General Nursing and Midwifery)' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Duration:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Typically requires a 10+2 qualification with a science background and a minimum percentage (usually 40-50%).</li>
                                                    <li>GNM nursing is a diploma program focused on general nursing and midwifery, spanning 3.5 years, including a 6-month internship.</li>
                                                    <li><strong>Entrance:</strong> WBJEEB</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'nursing' && course.name === 'ANM (Auxiliary Nursing Midwifery)' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Duration:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Typically requires a 10+2 qualification with a science background and a minimum percentage (usually 45-50%).</li>
                                                    <li>ANM is a <em>two-year</em> diploma program focused on providing basic healthcare, particularly in maternal and child health, and is a vital part of rural healthcare.</li>
                                                    <li><strong>Entrance:</strong> WBJEEB</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'paramedical' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Candidates generally need to have a science background with Physics, Chemistry, and Biology (PCB) as core subjects.</li>
                                                    <li>A minimum of 50% marks (45% for SC/ST) in the 12th standard.</li>
                                                    <li><strong>Entrance:</strong> NEET-UG (for some states), AIIMS Paramedical, JENPAS UG, and state-level exams like WBJEE JENPAS UG and CG PVPT.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'computational' && ['B.Sc. in Animation', 'B.Sc. in Media Science', 'B.Sc. in Data Science', 'B.Sc. in Cyber Security'].includes(course.name) && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Candidates generally need to have passed their 10+2 (or equivalent) examination from a recognized board.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'computational' && course.name === 'BCA (Bachelor of Computer Applications)' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <p className="text-muted-foreground">Pass in Higher Secondary (10+2) or equivalent examination with Maths/Business Maths/ Statistics/ Computer Science as one of the subjects and at least 30% marks in English. Eligible candidates have to appear and qualify CET examination as per University norms.</p>
                                            </div>
                                        )}
                                        {tabName === 'computational' && course.name === 'MCA (Master of Computer Applications)' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <p className="text-muted-foreground">To be eligible for an MCA (Master of Computer Applications) program in West Bengal, candidates generally need a Bachelor's degree (BCA, BSc, BTech, or equivalent) with Mathematics as a subject, preferably at the 10+2 or graduation level. A minimum of 50% marks in the qualifying degree is usually required. Additionally, most institutions conduct an entrance exam like JECA.</p>
                                            </div>
                                        )}
                                        {tabName === 'management' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Entrance:</h4>
                                                {course.name === 'MBA (Master of Business Administration)' || course.name === 'MHA (masters of hospital management)' ? (
                                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                        <li>Students typically need to have completed their 12th standard (or equivalent) from a recognized board.</li>
                                                        <li><strong>Entrance exam:</strong> CAT, XAT, GMAT, or CMAT.</li>
                                                    </ul>
                                                ) : (
                                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                        <li>Students typically need to have completed their 12th standard (or equivalent) from a recognized board with minimum 50% aggregate.</li>
                                                        <li><strong>Entrance Exams:</strong> Many universities and colleges conduct entrance exams for BBA admissions, such as CUET, SET, NPAT, etc.</li>
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                        {tabName === 'others' && ['LLB (Bachelor of Laws)', 'BBA LLB', 'BA LLB', 'B.Com LLB'].includes(course.name) && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Entrance:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li><strong>Entrance exam:</strong> CLAT, AILET, LSAT, and DU LLB</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'others' && course.name === 'B.Sc. in Agriculture' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Entrance:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li><strong>Entrance exam:</strong> ICAR AIEEA, CUET, and state-level exams like AP EAMCET, KEAM, or MHT CET</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'others' && course.name === 'B.Sc. in Forensic Science' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Entrance:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li><strong>Entrance Exam:</strong> All India Forensic Science Entrance Test (AIFSET), the National Forensic Sciences University (NFSU) Entrance Exam, and the Common University Entrance Test (CUET)</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'others' && course.name === 'B.Sc. in Microbiology' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility & Admission:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Passed Class 12 with a minimum aggregate of 50% in the Science stream with PCB (Physics, Chemistry, and Biology)</li>
                                                    <li><strong>Admission:</strong> Merit-based/ Entrance Exams like  CUET, LPU NEST, CUCET, etc.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'others' && course.name === 'B.Sc. in Biotechnology' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                                    <li>Candidates must pass their Class 12 in a Science stream with PCB subjects with at least 50-60% marks.</li>
                                                    <li><strong>Admission Procedure:</strong> Merit-Based/Entrance-Based</li>
                                                </ul>
                                            </div>
                                        )}
                                        {tabName === 'others' && course.name === 'B.Sc. in Nutrition' && (
                                            <div className="mb-6 space-y-2">
                                                <h4 className="font-bold text-foreground">Eligibility Criteria:</h4>
                                                <p className="text-muted-foreground">To be eligible for a B.Sc. in Nutrition, candidates generally need to have passed the 10+2 (or equivalent) examination with Biology, Chemistry, and Physics (PCB) as subjects, though some institutions may accept students with a strong background in Home Science or Nutrition as well. Minimum marks in these subjects, typically ranging from 50% to 60%, are also required.</p>
                                            </div>
                                        )}
                                        {course.colleges.length > 0 ? (
                                            <>
                                                <h4 className="font-bold mb-4 text-foreground">Colleges Offering this Course:</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                                                    {course.colleges.map((college, cIndex) => (
                                                        <div key={cIndex} className="bg-secondary/30 border border-secondary p-3 rounded-lg text-sm text-center font-medium text-secondary-foreground flex items-center justify-center gap-2">
                                                            <School className="h-4 w-4 text-primary flex-shrink-0" />
                                                            <span className="flex-1">{college}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center py-4">
                                                <p className="text-muted-foreground">
                                                    No specific colleges are listed for this course yet.
                                                </p>
                                                <Button asChild size="sm" className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-6 py-2 font-semibold hover:opacity-90 transition-opacity">
                                                    <Link href="/colleges">
                                                        Explore All Colleges
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                ))}
            </div>
          </Tabs>
        </MotionWrapper>
      </div>
    </div>
  );
}
