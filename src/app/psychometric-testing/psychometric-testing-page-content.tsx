
"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { BrainCircuit, GraduationCap, HelpCircle, MessageSquareQuote, ShieldCheck, Users } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const qnaModel = [
    {
        icon: MessageSquareQuote,
        title: "Interest Over Marks",
        description: "Choosing a career based on interests ensures long-term passion and growth, while marks reflect current strengths. Passion fuels perseverance—choose interest for a fulfilling future."
    },
    {
        icon: Users,
        title: "Informed Decision-Making",
        description: "Listen to friends and relatives, but make your own informed decision. It's your life—choose what aligns with your goals, values, and interests."
    },
    {
        icon: HelpCircle,
        title: "Asking the Right Questions",
        description: "After 12th, ask: What am I truly passionate about? Should I follow trends or my dreams? The right questions guide you to the right career path."
    },
    {
        icon: ShieldCheck,
        title: "The Value of Personal Connection",
        description: "Offline counselling offers face-to-face interaction, builds trust, and ensures deeper emotional connection—something online sessions often lack. Personal guidance feels more real and impactful in person."
    },
    {
        icon: BrainCircuit,
        title: "Character Defines Success",
        description: "True status isn't wealth or fame—it's character, integrity, and how you treat others. Respect, kindness, and values define real success, not material possessions or social media likes."
    },
    {
        icon: GraduationCap,
        title: "Education Empowers Minds",
        description: "Education empowers minds, opens doors to opportunity, and builds a better society. It's not just about marks—it's the foundation for critical thinking, growth, and lifelong success."
    }
];

const WavyLine = () => (
    <svg width="80" height="10" viewBox="0 0 100 10" className="inline-block text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" fill="transparent" strokeWidth="2"/>
    </svg>
);

export default function PsychometricTestingPageContent() {
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
                        src="https://placehold.co/1920x1080.png"
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
                                src="https://placehold.co/800x600.png"
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

            <MotionWrapper
                el="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="py-16 md:py-20 bg-secondary/20"
            >
                 <div className="container mx-auto max-w-7xl px-4">
                    <MotionWrapper
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {qnaModel.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <MotionWrapper el="div" variants={cardVariants} key={item.title}>
                                    <Card className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl h-full p-4">
                                        <CardHeader className="items-center text-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                {IconComponent && <IconComponent className="h-8 w-8" />}
                                            </div>
                                            <CardTitle className="font-headline text-xl pt-4">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </MotionWrapper>
                            );
                        })}
                    </MotionWrapper>
                </div>
            </MotionWrapper>
        </div>
    );
}
