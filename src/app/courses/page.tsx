
"use client";

import { useState } from 'react';
import Balancer from "react-wrap-balancer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, School } from 'lucide-react';
import Link from 'next/link';

type Course = {
  name: string;
  colleges: string[];
};

const btechCseColleges = [
  'IEM Salt Lake & Newtown',
  'Manipal University',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'JIS University',
  'National Institute of Technology (NIT)',
  'MCKV Institute of Engineering',
  'B.P. Poddar Institute of Management & Technology',
  'Brainware University',
  'Swami Vivekananda University (SVU)',
  'JIS College of Engineering, Kalyani',
  'Guru Nanak Institute of Technology (GNIT)',
  'SurTech',
  'Supreme Knowledge Foundation',
  'Abacus Institute of Engineering & Management',
];

const courseData: { [key: string]: Course[] } = {
  engineering: [
    { name: 'B.Tech. in Computer Science Engineering (CSE)', colleges: btechCseColleges },
    { name: 'B.Tech. in CSE (AI & ML)', colleges: [] },
    { name: 'B.Tech. in CSE (Robotics)', colleges: [] },
    { name: 'B.Tech. in CSE (Cloud Computing)', colleges: [] },
    { name: 'B.Tech. in CSE (Internet of Things - IoT)', colleges: [] },
    { name: 'B.Tech. in CSE (Business Systems - CSBS)', colleges: [] },
    { name: 'B.Tech. in Data Science', colleges: [] },
    { name: 'B.Tech. in Cyber Security', colleges: [] },
    { name: 'B.Tech. in Information Technology (IT)', colleges: [] },
    { name: 'B.Tech. in Electronics and Communication Engineering (ECE)', colleges: [] },
    { name: 'B.Tech. in Electrical and Electronics Engineering (EEE)', colleges: [] },
    { name: 'B.Tech. in Electrical Engineering (EE)', colleges: [] },
    { name: 'B.Tech. in Mechanical Engineering (ME)', colleges: [] },
    { name: 'B.Tech. in Biotechnology', colleges: [] },
    { name: 'B.Tech. in Biomedical Engineering', colleges: [] },
    { name: 'B.Tech. in Agricultural Engineering', colleges: [] },
    { name: 'B.Tech. in Civil Engineering', colleges: [] },
    { name: 'B.Tech. in Food Technology', colleges: [] },
    { name: 'B.Tech. in Marine Engineering', colleges: [] },
    { name: 'Diploma / Polytechnic', colleges: [] },
  ],
  medical: [
    { name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)', colleges: [] },
    { name: 'BDS (Bachelor of Dental Surgery)', colleges: [] },
    { name: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)', colleges: [] },
    { name: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)', colleges: [] },
    { name: 'BUMS (Bachelor of Unani Medicine and Surgery)', colleges: [] },
  ],
  paramedical: [
    { name: 'B.Sc. in Nursing', colleges: [] },
    { name: 'BPT (Bachelor of Physiotherapy)', colleges: [] },
    { name: 'B.Sc. in Medical Laboratory Technology', colleges: [] },
    { name: 'B.Sc. in Radiology', colleges: [] },
    { name: 'B.Sc. in Operation Theatre Technology', colleges: [] },
  ],
  computational: [
    { name: 'BCA (Bachelor of Computer Applications)', colleges: [] },
    { name: 'MCA (Master of Computer Applications)', colleges: [] },
    { name: 'B.Sc. in Computer Science', colleges: [] },
    { name: 'B.Sc. in Information Technology', colleges: [] },
    { name: 'M.Sc. in Data Science', colleges: [] },
  ],
  management: [
    { name: 'BBA (Bachelor of Business Administration)', colleges: [] },
    { name: 'MBA (Master of Business Administration)', colleges: [] },
    { name: 'PGDM (Post Graduate Diploma in Management)', colleges: [] },
    { name: 'B.Com (Bachelor of Commerce)', colleges: [] },
    { name: 'M.Com (Master of Commerce)', colleges: [] },
  ],
  others: [
    { name: 'B.A. (Bachelor of Arts)', colleges: [] },
    { name: 'M.A. (Master of Arts)', colleges: [] },
    { name: 'B.Sc. (Bachelor of Science)', colleges: [] },
    { name: 'M.Sc. (Master of Science)', colleges: [] },
    { name: 'LLB (Bachelor of Laws)', colleges: [] },
  ],
};


export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(courseData.engineering[0]);

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
                                key={course.name}
                                onClick={() => setSelectedCourse(course)}
                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                                    selectedCourse?.name === course.name
                                    ? 'bg-pink-400 text-white font-semibold shadow-lg'
                                    : 'bg-white/70 hover:bg-white hover:shadow-md'
                                }`}
                            >
                                <Plus className="h-4 w-4 mr-3 flex-shrink-0" />
                                <span>{course.name}</span>
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
        <div className="container mx-auto max-w-5xl px-4">
          {selectedCourse ? (
            <>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight text-center">
                Colleges Offering <span className="text-primary">{selectedCourse.name}</span>
              </h2>
              {selectedCourse.colleges.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCourse.colleges.map((college, index) => (
                    <div key={index} className="bg-secondary/30 border border-secondary p-4 rounded-lg shadow-sm text-center font-medium text-secondary-foreground flex items-center justify-center gap-2">
                       <School className="h-4 w-4 text-primary" />
                      {college}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    No specific colleges are listed for this course yet.
                    Explore our full database for more options.
                  </p>
                  <Button asChild size="lg" className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                    <Link href="/colleges">
                      Explore All Colleges
                    </Link>
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Explore Colleges That Offer This Course</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Select a course from the list above to see affiliated colleges.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
