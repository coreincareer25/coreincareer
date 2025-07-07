
"use client";

import Balancer from "react-wrap-balancer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { School } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


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
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Shivalik College, Dehradun',
  'Graphic Era Deemed to be University',
];

const btechCseAimColleges = [
  'IEM Salt Lake & Newtown',
  'Manipal University',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'JIS University',
  'Brainware University',
  'Guru Nanak Institute of Technology (GNIT)',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Shivalik College, Dehradun',
  'Graphic Era Deemed to be University',
];

const btechCseRoboticsColleges = [
  'IEM Salt Lake & Newtown',
  'Manipal University',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'Brainware University',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const btechCseCloudComputingColleges = [
  'IEM Salt Lake & Newtown',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'JIS University',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const btechCseIotColleges = [
  'IEM Salt Lake & Newtown',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Amity University, Kolkata',
  'JIS University',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const btechCseBusinessSystemsColleges = [
  'IEM Salt Lake & Newtown',
  'Adamas University',
  'Techno Main Salt Lake & Newtown',
  'Amity University, Kolkata',
  'JIS University',
  'Brainware University',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const btechDataScienceColleges = [
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
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const btechCyberSecurityColleges = [
  'IEM Salt Lake & Newtown',
  'Manipal University',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'JIS University',
  'National Institute of Technology (NIT)',
  'Brainware University',
  'Swami Vivekananda University (SVU)',
  'JIS College of Engineering, Kalyani',
  'Guru Nanak Institute of Technology (GNIT)',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Sathyabama University',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
  'Graphic Era Deemed to be University',
];

const courseData: { [key: string]: Course[] } = {
  engineering: [
    { name: 'B.Tech. in Computer Science Engineering (CSE)', colleges: btechCseColleges },
    { name: 'B.Tech. in CSE (AI & ML)', colleges: btechCseAimColleges },
    { name: 'B.Tech. in CSE (Robotics)', colleges: btechCseRoboticsColleges },
    { name: 'B.Tech. in CSE (Cloud Computing)', colleges: btechCseCloudComputingColleges },
    { name: 'B.Tech. in CSE (Internet of Things - IoT)', colleges: btechCseIotColleges },
    { name: 'B.Tech. in CSE (Business Systems - CSBS)', colleges: btechCseBusinessSystemsColleges },
    { name: 'B.Tech. in Data Science', colleges: btechDataScienceColleges },
    { name: 'B.Tech. in Cyber Security', colleges: btechCyberSecurityColleges },
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
            
            <div className="mt-8">
                {(Object.keys(courseData) as Array<keyof typeof courseData>).map(tabName => (
                    <TabsContent key={tabName} value={tabName} className="m-0">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {courseData[tabName].map((course, index) => (
                                <AccordionItem key={course.name} value={`item-${index}`} className="border rounded-lg bg-white/80 backdrop-blur-sm shadow-sm px-4">
                                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                        {course.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {course.colleges.length > 0 ? (
                                            <>
                                                <h4 className="font-bold mb-4 text-foreground">Colleges Offering this Course:</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                                                    {course.colleges.map((college, cIndex) => (
                                                        <div key={cIndex} className="bg-secondary/30 border border-secondary p-3 rounded-lg text-sm text-center font-medium text-secondary-foreground flex items-center justify-center gap-2">
                                                            <School className="h-4 w-4 text-primary" />
                                                            {college}
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
        </section>
      </div>
    </div>
  );
}
