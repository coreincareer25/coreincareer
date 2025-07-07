
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

const btechItColleges = [
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
  'Shivalik College, Dehradun',
  'Graphic Era Deemed to be University',
];

const btechEceColleges = [
  'IEM Salt Lake & Newtown',
  'Manipal University',
  'Adamas University',
  'Sister Nivedita University (SNU)',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'MCKV Institute of Engineering',
  'Swami Vivekananda University (SVU)',
  'JIS College of Engineering, Kalyani',
  'Supreme Knowledge Foundation',
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

const btechEeeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
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

const btechEeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
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

const btechMeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
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

const btechBiotechnologyColleges = [
  'IEM Salt Lake & Newtown',
  'Adamas University',
  'Techno Main Salt Lake & Newtown',
  'Heritage Institute of Technology',
  'Amity University, Kolkata',
  'Brainware University',
  'KIIT',
  'SOA',
  'AMITY NOIDA',
  'JAIN (Deemed-to-be University)',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
];

const btechBiomedicalColleges = [
  'Adamas University',
];

const btechAgricultureColleges = [
  'JIS College of Engineering, Kalyani',
  'JIS University',
  'Sister Nivedita University (SNU)',
  'JAIN (Deemed-to-be University)',
  'Galgotias University',
  'Sarhad University',
  'Shiv Nadar Institution of Eminence',
];

const diplomaPolytechnicColleges = [
  'Sister Nivedita University (SNU)',
  'JIS College of Engineering, Kalyani',
  'JIS University',
  'SurTech',
  'Swami Vivekananda University (SVU)',
  'Supreme Knowledge Foundation',
  'Guru Nanak Institute of Technology (GNIT)',
];

const btechMarineEngineeringColleges = [
  'The Neotia University',
  "Siksha 'O' Anusandhan",
  'Mahaveer Academy of Technology and Science University',
];

const btechFoodTechnologyColleges = [
  'Maulana Abul Kalam Azad University of Technology',
  'Hemnalini Memorial College of Engineering',
  'Guru Nanak Institute of Technology',
  'Techno India University',
];

const btechCivilEngineeringColleges = [
  'Heritage Institute of Technology',
  'Netaji Subhash Engineering College',
  'Narula Institute of Technology',
  'Brainware University',
  'Adamas University',
  'Amity university',
  'UEM kolkata',
  'Gargi Memorial Institute of Technology',
];

const mbbsColleges = [
  'JMN Medical College and Hospital',
  'IQ City Medical College Hospital',
  'Jagannath Gupta Institute of Medical Sciences And Hospital',
  'GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL',
  'KPC Medical College & Hospital',
  'Shri Ramkrishna Institute of Medical Sciences',
  'Saraswathi Institute of Medical Sciences',
  'Christian Medical College & Hospital'
];

const bdsColleges = [
  'Guru Nanak Institute of Dental Sciences & Research',
  'Kusum Devi Sunderlal Dugar Jain Dental College& Hospital',
  'Haldia Institute of Dental Sciences & Research (HIDSAR)',
  'Dr R Ahmed Dental College and Hospital',
  'Manav Rachna Dental College',
  'Al-Azhar Dental College Thodupuzha'
];

const nursingColleges = [
  'Brainware University',
  'M R GROUP OF COLLEGES & HOSPITALS',
  'Sister Nivedita University (SNU)',
  'Calcutta Institute of Nursing and Paramedical Science',
  'Neotia Academy Nursing Training Institute',
  'Desun Nursing School and College',
  'B.M. Birla College of Nursing',
  'Kalyani IINR',
];

const bscMedicalLabTechColleges = [
  'Swami Vivekananda University (SVU)',
  'JIS University',
  'Brainware University',
  'iLEAD Kolkata',
  'Adamas University',
  'GNIPST',
  'Supreme Knowledge Foundation'
];

const bscOptometryColleges = [
  'Swami Vivekananda University (SVU)',
  'Brainware University',
  'iLEAD Kolkata',
  'Supreme Knowledge Foundation',
  'NSHM Knowledge Campus, Kolkata',
];

const bscCctColleges = [
  'Swami Vivekananda University (SVU)',
  'Brainware University',
  'iLEAD Kolkata',
  'Supreme Knowledge Foundation',
];

const bptColleges = [
    'Swami Vivekananda University (SVU)',
];

const bpaColleges = [
    'Brainware University',
];

const bscRadiologyColleges = [
    'Swami Vivekananda University (SVU)',
];

const bpharmColleges = [
    'Bengal School of Technology (BST)',
    'Adamas University',
    'NSHM Knowledge Campus, Kolkata',
    'M.R. College of Pharmaceutical Sciences and Research, Barasat',
    'Shivalik College, Dehradun'
];

const bscAnimationColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Sister Nivedita University (SNU)',
];

const bscMediaScienceColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'EIILM',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bscDataScienceComputationalColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bscCyberSecurityComputationalColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bcaColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'IEM Salt Lake & Newtown',
    'Techno Main Salt Lake',
    'Techno International Newtown',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bbaColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'IEM Salt Lake & Newtown',
    'Techno Main Salt Lake',
    'Techno International Newtown',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
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

const bhmColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'Techno Main Salt Lake',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Supreme Knowledge Foundation',
    'Kalyani IINR',
];

const hotelManagementColleges = [
    'EIILM',
    'GNIHM',
    'IIHM',
    'IIIHM',
    'Techno India Salt Lake',
    'SNU',
    'NSHM kolkata',
    'BSTM Chuchura',
    'Supreme mankundu',
];

const bbaSportsManagementColleges = [
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM Salt Lake & Newtown',
    'Techno India Salt Lake',
];

const bbaTravelTourismManagementColleges = [
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM Salt Lake & Newtown',
    'Techno India Salt Lake',
];

const bbaDigitalMarketingColleges = [
    'Sister Nivedita University (SNU)',
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM Salt Lake & Newtown',
    'Techno India Salt Lake',
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
    { name: 'B.Tech. in Information Technology (IT)', colleges: btechItColleges },
    { name: 'B.Tech. in Electronics and Communication Engineering (ECE)', colleges: btechEceColleges },
    { name: 'B.Tech. in Electrical and Electronics Engineering (EEE)', colleges: btechEeeColleges },
    { name: 'B.Tech. in Electrical Engineering (EE)', colleges: btechEeColleges },
    { name: 'B.Tech. in Mechanical Engineering (ME)', colleges: btechMeColleges },
    { name: 'B.Tech. in Biotechnology', colleges: btechBiotechnologyColleges },
    { name: 'B.Tech. in Biomedical Engineering', colleges: btechBiomedicalColleges },
    { name: 'B.Tech. in Agricultural Engineering', colleges: btechAgricultureColleges },
    { name: 'B.Tech. in Civil Engineering', colleges: btechCivilEngineeringColleges },
    { name: 'B.Tech. in Food Technology', colleges: btechFoodTechnologyColleges },
    { name: 'B.Tech. in Marine Engineering', colleges: btechMarineEngineeringColleges },
    { name: 'Diploma / Polytechnic', colleges: diplomaPolytechnicColleges },
  ],
  medical: [
    { name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)', colleges: mbbsColleges },
    { name: 'BDS (Bachelor of Dental Surgery)', colleges: bdsColleges },
  ],
  nursing: [
    { name: 'B.Sc. in Nursing', colleges: nursingColleges },
    { name: 'GNM (General Nursing and Midwifery)', colleges: nursingColleges },
    { name: 'ANM (Auxiliary Nursing Midwifery)', colleges: nursingColleges },
  ],
  paramedical: [
    { name: 'BPT (Bachelor of Physiotherapy)', colleges: bptColleges },
    { name: 'B.Pharm (Bachelor of Pharmacy)', colleges: bpharmColleges },
    { name: 'B.Sc. in Medical Laboratory Technology', colleges: bscMedicalLabTechColleges },
    { name: 'B.Sc. in Optometry', colleges: bscOptometryColleges },
    { name: 'B.Sc. in Critical Care Technology (CCT)', colleges: bscCctColleges },
    { name: 'B.Sc. in Physician Assistant', colleges: bpaColleges },
    { name: 'B.Sc. in Radiology', colleges: bscRadiologyColleges },
  ],
  computational: [
    { name: 'B.Sc. in Animation', colleges: bscAnimationColleges },
    { name: 'B.Sc. in Media Science', colleges: bscMediaScienceColleges },
    { name: 'BCA (Bachelor of Computer Applications)', colleges: bcaColleges },
    { name: 'B.Sc. in Data Science', colleges: bscDataScienceComputationalColleges },
    { name: 'B.Sc. in Cyber Security', colleges: bscCyberSecurityComputationalColleges },
  ],
  management: [
    { name: 'BBA (Bachelor of Business Administration)', colleges: bbaColleges },
    { name: 'BBA Sports Management', colleges: bbaSportsManagementColleges },
    { name: 'BBA Travel & tourism Management', colleges: bbaTravelTourismManagementColleges },
    { name: 'BBA Digital Marketing', colleges: bbaDigitalMarketingColleges },
    { name: 'BHM (Bachelor of Hospital Management)', colleges: bhmColleges },
    { name: 'Bachelor of Hotel and Hospitality Management', colleges: hotelManagementColleges },
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
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 bg-transparent p-0">
              <TabsTrigger value="engineering" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Engineering</TabsTrigger>
              <TabsTrigger value="medical" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Medical</TabsTrigger>
              <TabsTrigger value="nursing" className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">Nursing</TabsTrigger>
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
