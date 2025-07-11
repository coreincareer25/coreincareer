
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
      'IEM Salt Lake', 'IEM Newtown', 'Manipal University', 'Adamas University', 'Sister Nivedita University', 'Techno India Salt Lake', 'Heritage Institute of Technology, Kolkata', 'Amity University Kolkata', 'Kalinga Institute of Industrial Technology', 'SIKSHA `O` ANUSANDHAN', 'JAIN (Deemed-to-be University)', 'JIS University', 'National Institutes of Technology', 'MCKV Institute of Engineering', 'B. P. Poddar Institute of Management & Technology', 'Galgotias University', 'Shivalik College, Dehradun', 'Sharda University', 'Brainware University', 'Swami Vivekananda University Kolkata', 'JIS College of Engineering Kalyani', 'Guru Nanak Institute of Technology', 'Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex', 'Supreme Knowledge Foundation', 'Abacus Institute of Engineering and Management'
    ]
  },
  medical: {
    title: 'Medical',
    subCategories: {
      mbbs: {
        title: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
        colleges: ['JMN Medical College and Hospital', 'IQ City Medical College Hospital', 'Jagannath Gupta Institute of Medical Sciences And Hospital', 'GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL', 'KPC Medical College & Hospital', 'Shri Ramkrishna Institute of Medical Sciences', 'Saraswathi Institute of Medical Sciences', 'Christian Medical College & Hospital']
      },
      bds: {
        title: 'Bachelor of Dental Surgery (BDS)',
        colleges: ['Guru Nanak Institute of Dental Sciences & Research', 'Kusum Devi Sunderlal Dugar Jain Dental College & Hospital', 'Haldia Institute of Dental Sciences & Research (HIDSAR)', 'Dr R Ahmed Dental College and Hospital', 'Manav Rachna Dental College', 'Al-Azhar Dental College Thodupuzha']
      }
    }
  },
  computational: {
    title: 'Computational',
    subCategories: {
      ug: {
        title: 'UG - BCA, Animation & Grafix, Data Science, Cyber Security',
        colleges: ['EIILM Kolkata', 'Swami Vivekananda University', 'IEM', 'Techno India Salt Lake', 'Guru Nanak Institute of Technology', 'JIS College of Engineering Kalyani', 'Brainware University', 'Sister Nivedita University', 'iLEAD Kolkata', 'NSHM Knowledge Campus Kolkata', 'Adamas University', 'Supreme Knowledge Foundation', 'Amity University Kolkata', 'JIS University', 'ABACUS Institute of Engineering and Management', 'MCKV Institute of Engineering']
      },
      pg: {
        title: 'PG - MCA',
        colleges: ['IEM', 'JIS University', 'Brainware University', 'Adamas University', 'Techno India Salt Lake', 'GNIT', 'Heritage Institute of Technology, Kolkata', 'Future Institute of Engineering and Management']
      }
    }
  },
  management: {
    title: 'Management',
    subCategories: {
      ug: {
        title: 'UG - BBA, Hospital Management, Hotel and Hospitality Management, Journalism and Media Science, Airlines',
        colleges: ['EIILM Kolkata', 'Swami Vivekananda University', 'IEM', 'Techno India Salt Lake', 'Bengal School of Technology & Management', 'Kalinga Institute of Industrial Technology', 'Siksha `O` Anusandhan', 'JAIN (Deemed-to-be University)', 'IIHM', 'Guru Nanak Institute of Hotel Management', 'IEMs International Institute of Hotel Management', 'Shardha University', 'Brainware University', 'Sister Nivedita University', 'ILEAD', 'NSHM Knowledge Campus Kolkata', 'Adamas University', 'Amity University Kolkata', 'JIS University', 'MCKV Institute of Engineering', 'ABACUS Institute of Engineering and Management', 'Supreme Knowledge Foundation', 'ISHM']
      },
      pg_wb: {
        title: 'PG - MBA (West Bengal)',
        colleges: ['EIILM Kolkata', 'IEM', 'Techno India Salt Lake', 'Bengal Institute of Business Studies', 'ASMi Business School', 'Globsyn Business School', 'Adamas University', 'Praxis Business School', 'International Management Institute', 'St Xaviers University', 'Swami Vivekananda University', 'MCKV Institute of Engineering', 'Sister Nivedita University', 'Brainware University']
      },
      pg_bgl: {
        title: 'PG - MBA (Bangalore)',
        colleges: ['Kirloskar Institute of Advanced Management Studies', 'Regional College of Management Bangalore', 'IIBS International Institute of Business Study Bengaluru', 'ABBS Autonomous College, Bengaluru', 'IZee Business School', 'JAIN (Deemed-to-be University)', 'GIBS Business School, Bangalore Campus']
      },
      pg_mum: {
        title: 'PG - MBA (Mumbai / Pune)',
        colleges: ['Ramachandran International Institute Of Management', 'Pune Institute of Business Management', 'ISMS Pune', 'ITM Business School Navi Mumbai', 'Universal Business School', 'Dr. D. Y. Patil Vidyapeeth, Pune']
      },
      pg_del: {
        title: 'PG - MBA (Delhi NCR)',
        colleges: ['FOSTIIMA Business School', 'Jaipuria Institute of Management', 'IILM Institute for Higher Education', 'Asia Pacific Institute of Management (APIM)']
      },
      pg_hyd: {
        title: 'PG - MBA (Hyderabad)',
        colleges: ['Vignana Jyothi Institute Of Management', 'Siva Sivani Institute of Management']
      }
    }
  },
  healthcare: {
    title: 'Health Care Technology & Science',
    subCategories: {
      main: {
        title: 'Paramedical, B.Pharm, D.Pharm, Biotechnology, Microbiology, Food Technology, Nutrition, Agriculture',
        colleges: ['Swami Vivekananda University', 'JIS University', 'Techno India Main Campus', 'Bengal School of Technology', 'Brainware University', 'iLEAD Kolkata', 'M R Institute of Nursing', 'Barasat College of Pharmaceutical Science & Research Centre', 'Adamas University', 'Sister Nivedita University', 'The Neotia University', 'Guru Nanak Institute of Pharmaceutical Science and Technology', 'NSHM Knowledge Campus', 'Supreme Knowledge Foundation']
      }
    }
  },
  llb: {
    title: 'LLB',
    subCategories: {
      main: {
        title: 'LLB, BA LLB, BBA LLB, B.com LLB',
        colleges: ['Adamas University', 'JIS University', 'Swami Vivekananda University', 'Sister Nivedita University', 'Amity University', 'Brainware University', 'The Neotia University']
      }
    }
  },
  nursing: {
    title: 'Nursing',
    subCategories: {
      main: {
        title: '(B.Sc Nursing, GNM Nursing, ANM Nursing)',
        colleges: ['Brainware University', 'Sister Nivedita University', 'M R Institute of Nursing', 'Kolkata Institute of Nursing', 'International Institute of Nursing & Research Kalyani']
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
        el="section"
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
              College <span className="text-[#ff81cc]">Profiles</span>
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
              <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                {Object.entries(collegeData).map(([key, data]) => (
                  <TabsTrigger key={key} value={key} className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white">
                    {data.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            
              <div className="mt-8">
                {Object.entries(collegeData).map(([key, data]) => (
                  <TabsContent key={key} value={key} className="m-0">
                    {"subCategories" in data && data.subCategories ? (
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
                        {typeof data === 'object' && data !== null && 'description' in data && typeof data.description === 'string' && (
                          <p className="text-center text-muted-foreground mb-6">{data.description}</p>
                        )}
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
      