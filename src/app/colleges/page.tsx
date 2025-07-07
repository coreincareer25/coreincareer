
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";

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
        title: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
        colleges: ['JMN Medical College and Hospital', 'IQ City Medical College Hospital', 'Jagannath Gupta Institute of Medical Sciences And Hospital', 'GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL', 'KPC Medical College & Hospital', 'Shri Ramkrishna Institute of Medical Sciences', 'Saraswathi Institute of Medical Sciences', 'Christian Medical College & Hospital']
      },
      bds: {
        title: 'BDS (Bachelor of Dental Surgery)',
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
    subCategories: {
      main: {
        title: '(Paramedical, B.pharm, D.pharm, Biotechnology, Microbiology, Food Technology, Nutrition, Agriculture)',
        colleges: ['Svu', 'jis university', 'Techno India main campus', 'BST', 'brainware', 'ILEAD kolkata', 'Mr. Nursing and pharmaceutical institute Barasat', 'Adamas university', 'SNU', 'TNU', 'GNIPST', 'NSHM kolkata', 'Suprem']
      }
    }
  },
  llb: {
    title: 'LLB',
    subCategories: {
      main: {
        title: '(LLB, BA LLB, BBA LLB, B.com LLB)',
        colleges: ['ADAMAS UNIVERSITY', 'JIS university', 'SVU', 'SNU', 'Amity University', 'Brainware University', 'TNU']
      }
    }
  },
  nursing: {
    title: 'Nursing',
    subCategories: {
      main: {
        title: '(B.sc Nursing, GNM Nursing, ANM Nursing)',
        colleges: ['Brainware', 'SNU', 'Mr. Group of Hospital & nursing', 'kolkata nursing institute', 'IINR Kalyani']
      }
    }
  }
};


export default function CollegesPage() {
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

  return (
    <div className="bg-background">
      <MotionWrapper
        as="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
            <Image
                src="/images/colleges/hero.jpg"
                alt="Students walking on campus"
                fill
                className="object-cover"
                data-ai-hint="university building"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              College <span className="text-primary">Profiles</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore detailed profiles of top colleges and universities to find your ideal institution.
          </p>
        </div>
      </MotionWrapper>

      <div className="bg-gradient-to-b from-purple-100/50 via-pink-100/50 to-transparent">
        <section className="py-12 container mx-auto max-w-6xl px-4">
          <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent p-0">
                {Object.entries(collegeData).map(([key, data]) => (
                  <TabsTrigger key={key} value={key} className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">
                    {data.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            
              <div className="mt-8">
                {Object.entries(collegeData).map(([key, data]) => (
                  <TabsContent key={key} value={key} className="m-0">
                    {data.subCategories ? (
                      <div className="space-y-12">
                        {Object.values(data.subCategories).map(subCat => (
                          <div key={subCat.title}>
                            <h2 className="text-xl font-semibold mb-6 text-center">{subCat.title}</h2>
                            <MotionWrapper
                              variants={cardContainerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            >
                              {subCat.colleges.map((college, index) => (
                                <MotionWrapper el="div" variants={cardVariants} key={index}>
                                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                                    <div className="relative h-40 w-full">
                                      <Image src="/images/colleges/campus.jpg" alt={college} fill className="object-cover" data-ai-hint="university campus" />
                                    </div>
                                    <CardHeader className="flex-grow">
                                      <CardTitle className="text-lg font-semibold">{college}</CardTitle>
                                    </CardHeader>
                                    <CardFooter>
                                      <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-opacity font-semibold">
                                        <Link href="/contact">Apply Now</Link>
                                      </Button>
                                    </CardFooter>
                                  </Card>
                                </MotionWrapper>
                              ))}
                            </MotionWrapper>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {'description' in data && data.description && <p className="text-center text-muted-foreground mb-6">{data.description}</p>}
                        <MotionWrapper
                          variants={cardContainerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        >
                          {'colleges' in data && data.colleges && data.colleges.map((college, index) => (
                            <MotionWrapper el="div" variants={cardVariants} key={index}>
                              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                                <div className="relative h-40 w-full">
                                  <Image src="/images/colleges/campus.jpg" alt={college} fill className="object-cover" data-ai-hint="university campus" />
                                </div>
                                <CardHeader className="flex-grow">
                                  <CardTitle className="text-lg font-semibold">{college}</CardTitle>
                                </CardHeader>
                                <CardFooter>
                                  <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-opacity font-semibold">
                                    <Link href="/contact">Apply Now</Link>
                                  </Button>
                                </CardFooter>
                              </Card>
                            </MotionWrapper>
                          ))}
                        </MotionWrapper>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </div>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
      