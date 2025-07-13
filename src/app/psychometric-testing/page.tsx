
"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { BrainCircuit } from "lucide-react";
import React from "react";

const qnaModel = [
    {
        number: "01.",
        image: "/images/psychometric-testing/career-passion.png",
        aiHint: "career passion",
        title: "Interest Over Marks",
        description: "Choosing a career based on interests ensures long-term passion and growth, while marks reflect current strengths. Passion fuels perseverance—choose interest for a fulfilling future."
    },
    {
        number: "02.",
        image: "/images/psychometric-testing/informed-decision.png",
        aiHint: "informed decision",
        title: "Informed Decision-Making",
        description: "Listen to friends and relatives, but make your own informed decision. It's your life—choose what aligns with your goals, values, and interests."
    },
    {
        number: "03.",
        image: "/images/psychometric-testing/career-questions.png",
        aiHint: "career questions",
        title: "Asking the Right Questions",
        description: "After 12th, ask: What am I truly passionate about? Should I follow trends or my dreams? The right questions guide you to the right career path."
    },
    {
        number: "04.",
        image: "/images/psychometric-testing/offline-counseling.png",
        aiHint: "offline counseling",
        title: "The Value of Personal Connection",
        description: "Offline counselling offers face-to-face interaction, builds trust, and ensures deeper emotional connection—something online sessions often lack. Personal guidance feels more real and impactful in person."
    },
    {
        number: "05.",
        image: "/images/psychometric-testing/character-integrity.jpeg",
        aiHint: "character integrity",
        title: "Character Defines Success",
        description: "True status isn't wealth or fame—it's character, integrity, and how you treat others. Respect, kindness, and values define real success, not material possessions or social media likes."
    },
    {
        number: "06.",
        image: "/images/psychometric-testing/education-empowerment.png",
        aiHint: "education empowerment",
        title: "Education Empowers Minds",
        description: "Education empowers minds, opens doors to opportunity, and builds a better society. It's not just about marks—it's the foundation for critical thinking, growth, and lifelong success."
    }
];

const WavyLine = () => (
    <svg width="80" height="10" viewBox="0 0 100 10" className="inline-block text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" fill="transparent" strokeWidth="2"/>
    </svg>
);

export default function PsychometricTestingPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
    
    const ServiceSection = ({
        image,
        imageAlt,
        aiHint,
        number,
        title,
        description,
        children,
        imageFirst = false
      } : {
        image: string,
        imageAlt: string,
        aiHint: string,
        number: string,
        title: string,
        description?: string,
        children?: React.ReactNode,
        imageFirst?: boolean
      }) => {
        const imageContent = (
          <MotionWrapper
            initial={{ opacity: 0, x: imageFirst ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-80 md:h-[30rem] w-full overflow-hidden rounded-lg shadow-xl"
          >
            <Image src={image} alt={imageAlt} fill className="object-cover object-center" data-ai-hint={aiHint} />
          </MotionWrapper>
        );
      
        const textContent = (
          <MotionWrapper
            initial={{ opacity: 0, x: imageFirst ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-lg font-bold text-primary">{number}</p>
            <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">{title}</h3>
            {description && <p className="mt-4 text-muted-foreground">{description}</p>}
            {children}
          </MotionWrapper>
        );
    
        return (
          <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {imageFirst ? textContent : imageContent}
                {imageFirst ? imageContent : textContent}
              </div>
            </div>
          </section>
        );
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
                        src="/images/psychometric-testing/hero.jpeg"
                        alt="Brain with gears"
                        fill
                        className="object-cover object-center"
                        data-ai-hint="brain gears"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl md:text-6xl">
                        <Balancer>
                            Psychometric <span className="text-primary">Testing</span>
                        </Balancer>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover your strengths and find the career path that's right for you through our science-backed assessments.
                    </p>
                </div>
            </MotionWrapper>

            <section className="py-16 md:py-20 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <MotionWrapper
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Unlock Your Potential</h2>
                            <p className="mt-6 text-muted-foreground">
                                Psychometric tests are a standard and scientific method used to measure your mental capabilities and behavioral style. These tests are designed to assess your suitability for different career paths based on your personality characteristics and cognitive abilities.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                At Core in Career, we use proven models like the Holland RIASEC model to help you understand your interests, personality, and the kind of work environments where you would thrive. This journey of self-discovery is the first and most crucial step towards building a fulfilling and successful career.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                                <Link href="/contact">Get Your Free Consultation</Link>
                            </Button>
                        </MotionWrapper>
                        <MotionWrapper
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-lg"
                        >
                            <Image
                                src="/images/services/psychometric-test.jpeg"
                                alt="Psychometric test concept"
                                fill
                                className="object-cover object-center"
                                data-ai-hint="psychometric test concept"
                            />
                        </MotionWrapper>
                    </div>
                </div>
            </section>
            
            <MotionWrapper
                el="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="py-12 bg-cyan-50/50 text-center"
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <BrainCircuit className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900">Understand Yourself Better, Choose Smarter</h2>
                    <div className="mt-2 flex items-center justify-center gap-4 text-muted-foreground">
                        <WavyLine />
                        <span className="text-lg font-medium">Self-Discovery</span>
                        <WavyLine />
                    </div>
                </div>
            </MotionWrapper>

            <div className="bg-secondary/20 py-8">
                {qnaModel.map((item, index) => (
                    <ServiceSection
                        key={item.number}
                        image={item.image}
                        imageAlt={item.title}
                        aiHint={item.aiHint}
                        number={item.number}
                        title={item.title}
                        description={item.description}
                        imageFirst={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
}
