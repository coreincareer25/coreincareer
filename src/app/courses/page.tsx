"use client";

import { useState } from 'react';
import Balancer from "react-wrap-balancer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Link from 'next/link';

const courseData = {
  engineering: [
    'Electrical Engineering',
    'B.Tech. in Civil Engineering',
    'B.Tech. in AI & ML',
    'B.Tech. in Cyber Security',
    'B.Tech Information Technology (IT)',
    'B.Tech in Food Technology',
    'B.Tech Biotechnology',
    'B.Tech. Data Science',
    'B.Tech. Marine Engineering',
    'B. Tech. in Computer Science Engineering',
    'B.Tech. in Agricultural Engineering',
    'B.Tech. in Electronics Engineering',
    'Diploma / Polytechnic',
    'B.Tech in Robotics',
  ],
  medical: [
    'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    'BDS (Bachelor of Dental Surgery)',
    'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
    'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
    'BUMS (Bachelor of Unani Medicine and Surgery)',
  ],
  paramedical: [
    'B.Sc. in Nursing',
    'BPT (Bachelor of Physiotherapy)',
    'B.Sc. in Medical Laboratory Technology',
    'B.Sc. in Radiology',
    'B.Sc. in Operation Theatre Technology',
  ],
  computational: [
    'BCA (Bachelor of Computer Applications)',
    'MCA (Master of Computer Applications)',
    'B.Sc. in Computer Science',
    'B.Sc. in Information Technology',
    'M.Sc. in Data Science',
  ],
  management: [
    'BBA (Bachelor of Business Administration)',
    'MBA (Master of Business Administration)',
    'PGDM (Post Graduate Diploma in Management)',
    'B.Com (Bachelor of Commerce)',
    'M.Com (Master of Commerce)',
  ],
  others: [
    'B.A. (Bachelor of Arts)',
    'M.A. (Master of Arts)',
    'B.Sc. (Bachelor of Science)',
    'M.Sc. (Master of Science)',
    'LLB (Bachelor of Laws)',
  ],
};


export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState("B.Tech. in Civil Engineering");

  return (
    <div className="bg-background">
      <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              Course <span className="text-primary">Explorer</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our extensive catalog of courses to find the perfect fit for your academic and career aspirations.
          </p>
        </div>
      </section>

      <div className="bg-gradient-to-b from-purple-100/50 via-pink-100/50 to-transparent">
        <section className="py-12 container mx-auto max-w-6xl px-4">
          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-transparent p-0">
              <TabsTrigger value="engineering" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Engineering</TabsTrigger>
              <TabsTrigger value="medical" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Medical</TabsTrigger>
              <TabsTrigger value="paramedical" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Paramedical</TabsTrigger>
              <TabsTrigger value="computational" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Computational</TabsTrigger>
              <TabsTrigger value="management" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Management</TabsTrigger>
              <TabsTrigger value="others" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Others</TabsTrigger>
            </TabsList>
            
            <div className="mt-8 rounded-lg bg-white/30 p-2 space-y-1 backdrop-blur-sm shadow-inner">
                {(Object.keys(courseData) as Array<keyof typeof courseData>).map(tabName => (
                    <TabsContent key={tabName} value={tabName} className="m-0">
                        <div className="space-y-1">
                            {courseData[tabName].map((course) => (
                            <div
                                key={course}
                                onClick={() => setSelectedCourse(course)}
                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                                    selectedCourse === course
                                    ? 'bg-pink-400 text-white font-semibold shadow-lg'
                                    : 'bg-white/70 hover:bg-white hover:shadow-md'
                                }`}
                            >
                                <Plus className="h-4 w-4 mr-3 flex-shrink-0" />
                                <span>{course}</span>
                            </div>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </div>
          </Tabs>
        </section>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Explore Colleges That Offer This Course</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover top universities and institutions where you can pursue this program. Find details on eligibility, fees, locations, and admission processes—all in one place.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
              <Link href="/colleges">
                Explore Colleges
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
