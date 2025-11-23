
"use client";

import Balancer from "react-wrap-balancer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { School } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";

type Course = {
    name: string;
    colleges: string[];
};

type CourseData = {
    [key: string]: Course[];
}

interface CoursesPageContentProps {
    courseData: CourseData;
}

export default function CoursesPageContent({ courseData }: CoursesPageContentProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const orderedCategories = ['engineering', 'computational', 'nursing', 'paramedical', 'management', 'others'];
  
  // Filter out categories that might not have data, but keep the order
  const courseCategories = orderedCategories.filter(cat => courseData[cat] && courseData[cat].length > 0);

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
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out">
            <Balancer>
              Course <span className="text-primary">Explorer</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of courses to discover the ideal match for your academic goals and career ambitions, helping you build the skills needed for a successful future.
          </p>
        </div>
      </MotionWrapper>

      <div className="bg-gradient-to-b from-red-200 to-pink-400 ">
        <MotionWrapper
          el="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-12 container mx-auto max-w-6xl px-4"
        >
          <Tabs defaultValue={courseCategories[0] || 'engineering'} className="w-full">
            <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              {courseCategories.map((category) => (
                 <TabsTrigger key={category} value={category} className="capitalize data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">{category.replace('-', ' ')}</TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-8">
                {courseCategories.map(tabName => (
                    <TabsContent key={String(tabName)} value={String(tabName)} className="m-0">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {courseData[tabName].map((course, index) => (
                                <AccordionItem key={course.name} value={`item-${index}`} className="border rounded-lg bg-white/80 backdrop-blur-sm shadow-sm px-4">
                                    <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base">
                                        {course.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
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
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-primary-foreground hover:bg-primary/90">
                <Link href="/colleges">
                    Explore More Colleges
                </Link>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
