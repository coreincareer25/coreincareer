
"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { collegeData } from "@/lib/college-data";

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
        <div className="absolute inset-0 h-full w-full">
            <Image
                src="/images/colleges/hero.jpg"
                alt="Students walking on campus"
                fill
                className="object-cover object-center"
                data-ai-hint="university building"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl md:text-6xl">
            <Balancer>
              College <span className="text-[#ff81cc]">Profiles</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore detailed profiles of top colleges and universities to find your ideal institution
          </p>
        </div>
      </MotionWrapper>

      <div className="bg-gradient-to-b from-purple-100/50 via-pink-100/50 to-transparent">
        <section className="py-12 container mx-auto max-w-6xl px-4">
          <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                {Object.entries(collegeData).map(([key, data]) => (
                  <TabsTrigger key={key} value={key} className="data-[state=active]:bg-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md border bg-white px-3 py-1.5 text-sm md:px-4 md:py-2">
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
                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">{subCat.title}</h2>
                            <MotionWrapper
                              variants={cardContainerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                              {subCat.colleges.map((college, index) => (
                                <MotionWrapper el="div" variants={cardVariants} key={index}>
                                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                                    <div className="relative h-40 w-full">
                                      <Image src={college.image} alt={college.name} fill className="object-cover object-center" data-ai-hint="university campus" />
                                    </div>
                                    <CardHeader className="flex-grow p-4">
                                      <CardTitle className="text-base font-semibold">{college.name}</CardTitle>
                                    </CardHeader>
                                    <CardFooter className="p-4">
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
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                          {'colleges' in data && data.colleges && data.colleges.map((college, index) => (
                            <MotionWrapper el="div" variants={cardVariants} key={index}>
                              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                                <div className="relative h-40 w-full">
                                  <Image src={college.image} alt={college.name} fill className="object-cover object-center" data-ai-hint="university campus" />
                                </div>
                                <CardHeader className="flex-grow p-4">
                                  <CardTitle className="text-base font-semibold">{college.name}</CardTitle>
                                </CardHeader>
                                <CardFooter className="p-4">
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
