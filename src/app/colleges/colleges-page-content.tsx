
"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { collegeData } from "@/lib/college-data";
import React from "react";

export default function CollegesPageContent() {
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
                src="/images/courses/hero1.jpg"
                alt="Students walking on campus"
                fill
                className="object-cover object-center"
                data-ai-hint="university building"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out">
            <Balancer>
              College <span className="text-primary">Profiles</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore in-depth profiles of leading colleges and universities to discover the institution that best fits your academic interests, career goals, and personal preferences for a successful future.
          </p>
        </div>
      </MotionWrapper>

      <div className="bg-gradient-to-b from-cyan-50 to-cyan-300">
        <section className="py-12 container mx-auto max-w-6xl px-4">
          <div className="space-y-16">
            {Object.entries(collegeData).map(([key, data]) => (
              <div key={key}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 text-center mb-4">{data.title}</h2>
                {"description" in data && typeof data.description === "string" && (
                    <p className="text-center text-muted-foreground mb-8">{data.description}</p>
                )}

                {"subCategories" in data && data.subCategories ? (
                  <div className="space-y-12">
                    {Object.values(data.subCategories).map(subCat => (
                      <div key={subCat.title}>
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">{subCat.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {subCat.colleges.map((college, index) => (
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                              <div className="relative h-40 w-full">
                                <Image src={college.image} alt={college.name} fill className="object-cover object-center" data-ai-hint="university campus" loading="lazy" />
                              </div>
                              <CardHeader className="flex-grow p-4">
                                <CardTitle className="text-base font-semibold">{college.name}</CardTitle>
                              </CardHeader>
                              <CardFooter className="p-4">
                                <Button asChild className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold hover:from-fuchsia-700 hover:to-cyan-700 hover:opacity-90 transition-all duration-300 ease-in-out">
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
                  'colleges' in data && data.colleges && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {data.colleges.map((college, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                          <div className="relative h-40 w-full">
                            <Image src={college.image} alt={college.name} fill className="object-cover object-center" data-ai-hint="university campus" loading="lazy" />
                          </div>
                          <CardHeader className="flex-grow p-4">
                            <CardTitle className="text-base font-semibold">{college.name}</CardTitle>
                          </CardHeader>
                          <CardFooter className="p-4">
                            <Button asChild className="w-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-white hover:opacity-90 transition-opacity font-semibold">
                              <Link href="/contact">Apply Now</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
