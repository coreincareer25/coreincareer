
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { scholarships } from "@/lib/data";
import Image from "next/image";
import { Calendar, Target } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ScholarshipsPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

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
                src="/images/scholarships/hero.jpg"
                alt="Graduation cap and money"
                fill
                className="object-cover"
                data-ai-hint="graduation cap"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              Scholarship <span className="text-primary">Database</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Find financial aid opportunities to support your educational journey.
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        as="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
            <MotionWrapper
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2"
            >
            {scholarships.map((scholarship) => (
                <MotionWrapper el="div" variants={cardVariants} key={scholarship.name}>
                  <Card className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl h-full">
                    <div className="relative h-56 w-full">
                        <Image
                        src={scholarship.image}
                        alt={scholarship.name}
                        fill
                        className="object-cover"
                        data-ai-hint={scholarship.aiHint}
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold py-2 px-4 rounded-full shadow-lg">
                            {scholarship.amount}
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{scholarship.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Target className="h-5 w-5 mt-1 shrink-0 text-primary" />
                            <div>
                                <h4 className="font-semibold text-foreground">Eligibility:</h4>
                                <p className="text-sm">{scholarship.eligibility}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-secondary/50 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Calendar className="h-4 w-4" />
                            Deadline: {scholarship.deadline}
                        </div>
                    </CardFooter>
                  </Card>
                </MotionWrapper>
            ))}
            </MotionWrapper>
        </div>
      </MotionWrapper>
    </div>
  );
}
      