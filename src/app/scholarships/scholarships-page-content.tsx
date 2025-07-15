
"use client";

import { scholarships } from "@/lib/data";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScholarshipsPageContent() {
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
        el="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 h-full w-full">
            <Image
                src="/images/scholarships/hero.jpeg"
                alt="Graduation cap and money"
                fill
                className="object-cover object-center"
                data-ai-hint="graduation cap"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl md:text-6xl">
            <Balancer>
              Scholarship <span className="text-primary">Database</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a variety of financial aid opportunities designed to support your educational journey, including scholarships, grants, and loans, helping you achieve your academic goals without financial burden.
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        el="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <MotionWrapper
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
          >
            {scholarships.map((scholarship) => (
              <MotionWrapper el="div" variants={cardVariants} key={scholarship.title + scholarship.description}>
                <div className="relative flex flex-col md:flex-row items-stretch rounded-lg shadow-lg overflow-hidden h-auto md:h-48 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <div className="relative h-48 md:h-full w-full md:w-2/3">
                        <Image
                            src={scholarship.image}
                            alt={scholarship.title}
                            fill
                            className="object-cover object-center"
                            data-ai-hint={scholarship.aiHint}
                        />
                         <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="absolute inset-0 md:relative md:inset-auto flex-1 p-6 text-white text-left h-full flex flex-col justify-center bg-black/40 md:bg-transparent">
                        <div>
                            <span className="text-2xl md:text-3xl font-bold text-primary font-serif">{scholarship.title}</span>
                            {scholarship.subtitle && <span className="text-lg md:text-xl ml-2 text-gray-300 italic">{scholarship.subtitle}</span>}
                        </div>
                        {scholarship.description && (
                            <p className="text-gray-300 mt-2 max-w-sm text-sm md:text-base">{scholarship.description}</p>
                        )}
                    </div>
                    <div className="relative p-4 md:p-6 bg-green-500 text-white font-bold h-auto md:h-full flex items-center justify-center text-center w-full md:w-56">
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg">SCHOLARSHIP</span>
                            <span className="text-lg md:text-xl">{scholarship.amount}</span>
                        </div>
                    </div>
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground">Ready to explore these opportunities?</p>
            <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Contact Us for More Info
              </Link>
            </Button>
          </div>

        </div>
      </MotionWrapper>
    </div>
  );
}
