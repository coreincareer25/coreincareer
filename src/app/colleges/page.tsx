
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { School } from "lucide-react";

const collegeData = {
  engineering: {
    title: 'Engineering',
    colleges: [
      'IEM Salt Lake', 'IEM Newtown', 'Manipal University', 'Adamas', 'SNU', 'Techno Salt Lake', 'Haritage', 'Amity kolkata', 'KIIT', 'SOA', 'JAIN Deemed-to-be', 'JIS university', 'NIT', 'MCKV', 'B.P. Poder', 'Galgotias University', 'shivalik Dehradun', 'Sharda University', 'Brainware', 'SVU', 'jis Kalyani', 'GNIT', 'Sur tech', 'Supreme knowledge foundation', 'ABACUS'
    ]
  },
  medical: {
    title: 'Medical',
    subCategories: {
      mbbs: {
        title: 'MBBS',
        colleges: ['JMN Medical College and Hospital', 'IQ City Medical College Hospital', 'Jagannath Gupta Institute of Medical Sciences And Hospital', 'GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL', 'KPC Medical College & Hospital', 'Shri Ramkrishna Institute of Medical Sciences', 'Saraswathi Institute of Medical Sciences', 'Christian Medical College & Hospital']
      },
      bds: {
        title: 'BDS',
        colleges: ['Guru Nanak Institute of Dental Sciences & Research', 'Kusum Devi Sunderlal Dugar Jain Dental College& Hospital', 'Haldia Institute of Dental Sciences & Research (HIDSAR)', 'Dr R Ahmed Dental College and Hospital', 'Manav Rachna Dental College', 'Al-Azhar Dental College Thodupuzha']
      }
    }
  },
  computational: {
    title: 'Computational',
    subCategories: {
      ug: {
        title: 'UG (BCA, Animation & Grafix, Data Science, Cyber Security)',
        colleges: ['Eiilm', 'Svu', 'IEM', 'Techno Salt Lake', 'GNIT', 'jis Kalyani', 'Brainware', 'SNU', 'ILEAD', 'NSHM kolkata', 'Adamas', 'Supreme', 'Amity University', 'jis university', 'ABACUS', 'MCKV']
      },
      pg: {
        title: 'PG (MCA)',
        colleges: ['IEM', 'JIS university', 'Brainware University', 'Adamas university', 'Techno India Salt Lake', 'GNIT', 'Heritage', 'Future']
      }
    }
  },
  management: {
    title: 'Management',
    subCategories: {
      ug: {
        title: 'UG (BBA, Hospital Management, Hotel and Hospitality Management, Journalism and Media Science, Airlines)',
        colleges: ['Eiilm', 'Svu', 'IEM', 'Techno India Salt Lake', 'BSTM', 'KIIT', 'SOA', 'jain University', 'IIHM', 'GNIHM', 'IIIHM', 'shardha University Brainware', 'SNU', 'ILEAD', 'NSHM kolkata', 'Adamas', 'Supreme', 'Amity University', 'jis university', 'MCKV', 'Abacus', 'Suprem', 'ISHM']
      },
      pg_wb: {
        title: 'PG (MBA) - West Bengal',
        colleges: ['EIILM', 'IEM', 'Techno India Salt Lake', 'BIBS', 'Asmi business School', 'GLOBSYN', 'Adamas university', 'Praxis', 'IMI-K', 'St Xaviers University', 'SVU', 'MCKV', 'SNU', 'Brainware University']
      },
      pg_bgl: {
        title: 'PG (MBA) - Bangalore',
        colleges: ['KIAMS', 'RCM', 'IIBS', 'ABBS', 'IZEE BUSINESS SCHOOL', 'Jain University', 'GIBS']
      },
      pg_mum: {
        title: 'PG (MBA) - Mumbai / Pune',
        colleges: ['RIIM', 'PIBM', 'ISMS', 'ITM NAVI MUMBAI', 'UBS', 'DY PATIL PUNE']
      },
      pg_del: {
        title: 'PG (MBA) - Delhi NCR',
        colleges: ['FOSTIIMA', 'JAIPURIA', 'IILM UNIVERSITY', 'ASIA PACIFIC']
      },
      pg_hyd: {
        title: 'PG (MBA) - Hyderabad',
        colleges: ['VJIM', 'SIVA SIVANI INST OF MGMT']
      }
    }
  },
  healthcare: {
    title: 'Health Care Technology & Science',
    description: '(Paramedical, B.pharm, D.pharm, Biotechnology, Microbiology, Food Technology, Nutrition, Agriculture)',
    colleges: ['Svu', 'jis university', 'Techno India main campus', 'BST', 'brainware', 'ILEAD kolkata', 'Mr. Nursing and pharmaceutical institute Barasat', 'Adamas university', 'SNU', 'TNU', 'GNIPST', 'NSHM kolkata', 'Suprem']
  },
  llb: {
    title: 'LLB',
    description: '(LLB, BA LLB, BBA LLB, B.com LLB)',
    colleges: ['ADAMAS UNIVERSITY', 'JIS university', 'SVU', 'SNU', 'Amity University', 'Brainware University', 'TNU']
  },
  nursing: {
    title: 'Nursing',
    description: '(B.sc Nursing, GNM Nursing, ANM Nursing)',
    colleges: ['Brainware', 'SNU', 'Mr. Group of Hospital & nursing', 'kolkata nursing institute', 'IINR Kalyani']
  }
};


export default function CollegesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              College <span className="text-primary">Profiles</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore detailed profiles of top colleges and universities to find your ideal institution.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto max-w-7xl px-4">
        <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="flex-wrap justify-center h-auto gap-2 bg-transparent p-0 mb-8 hidden md:flex">
              {Object.entries(collegeData).map(([key, data]) => (
                <TabsTrigger key={key} value={key} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-card">
                  {data.title}
                </TabsTrigger>
              ))}
            </TabsList>
          
            <div className="md:hidden mb-8">
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 bg-card"
                onChange={(e) => {
                  const tab = document.querySelector(`button[value="${e.target.value}"]`) as HTMLButtonElement | null;
                  tab?.click();
                }}
              >
              {Object.entries(collegeData).map(([key, data]) => (
                  <option key={key} value={key}>{data.title}</option>
              ))}
              </select>
            </div>

            {Object.entries(collegeData).map(([key, data]) => (
              <TabsContent key={key} value={key} className="m-0">
                {data.subCategories ? (
                  <div className="space-y-12">
                    {Object.values(data.subCategories).map(subCat => (
                      <div key={subCat.title}>
                        <h2 className="text-2xl font-bold font-headline mb-6 text-center md:text-left">{subCat.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {subCat.colleges.map((college, index) => (
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                              <div className="relative h-40 w-full">
                                <Image src="https://placehold.co/600x400.png" alt={college} fill className="object-cover" data-ai-hint="university campus" />
                              </div>
                              <CardHeader className="flex-grow">
                                <CardTitle className="text-lg font-semibold">{college}</CardTitle>
                              </CardHeader>
                              <CardFooter>
                                <Button asChild className="w-full">
                                  <Link href="/contact">Apply Now</Link>
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {data.description && <p className="text-center text-muted-foreground mb-6">{data.description}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {data.colleges && data.colleges.map((college, index) => (
                         <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                           <div className="relative h-40 w-full">
                             <Image src="https://placehold.co/600x400.png" alt={college} fill className="object-cover" data-ai-hint="university campus" />
                           </div>
                           <CardHeader className="flex-grow">
                             <CardTitle className="text-lg font-semibold">{college}</CardTitle>
                           </CardHeader>
                           <CardFooter>
                             <Button asChild className="w-full">
                               <Link href="/contact">Apply Now</Link>
                             </Button>
                           </CardFooter>
                         </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
        </Tabs>
      </section>
    </div>
  );
}
