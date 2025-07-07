
"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper } from "@/components/motion-wrapper";

const qnaModel = [
    {
        number: "01.",
        image: "/images/psychometric/career-passion.jpg",
        aiHint: "career passion",
        description: "Choosing a career based on interests ensures long-term passion and growth, while marks reflect current strengths. Passion fuels perseverance—choose interest for a fulfilling future."
    },
    {
        number: "02.",
        image: "/images/psychometric/informed-decision.jpg",
        aiHint: "informed decision",
        description: "Listen to friends and relatives, but make your own informed decision. It's your life—choose what aligns with your goals, values, and interests."
    },
    {
        number: "03.",
        image: "/images/psychometric/career-questions.jpg",
        aiHint: "career questions",
        description: "After 12th, ask: What am I truly passionate about? Should I follow trends or my dreams? The right questions guide you to the right career path."
    },
    {
        number: "04.",
        image: "/images/psychometric/offline-counseling.jpg",
        aiHint: "offline counseling",
        description: "Offline counselling offers face-to-face interaction, builds trust, and ensures deeper emotional connection—something online sessions often lack. Personal guidance feels more real and impactful in person."
    },
    {
        number: "05.",
        image: "/images/psychometric/character-integrity.jpg",
        aiHint: "character integrity",
        description: "True status isn't wealth or fame—it's character, integrity, and how you treat others. Respect, kindness, and values define real success, not material possessions or social media likes."
    },
    {
        number: "06.",
        image: "/images/psychometric/education-empowerment.jpg",
        aiHint: "education empowerment",
        description: "Education empowers minds, opens doors to opportunity, and builds a better society. It's not just about marks—it's the foundation for critical thinking, growth, and lifelong success."
    }
];

export default function PsychometricTestingPage() {
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
                        src="/images/psychometric-testing/hero.jpg"
                        alt="Brain with gears"
                        fill
                        className="object-cover"
                        data-ai-hint="brain gears"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                        <Balancer>
                            Psychometric <span className="text-primary">Testing</span>
                        </Balancer>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Discover your strengths and find the career path that's right for you through our science-backed assessments.
                    </p>
                </div>
            </MotionWrapper>

            <section className="py-20 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <MotionWrapper
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-black tracking-tight text-gray-900">Unlock Your Potential</h2>
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
                            className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg"
                        >
                            <Image
                                src="/images/services/psychometric-test.jpg"
                                alt="Psychometric test concept"
                                fill
                                className="object-cover"
                                data-ai-hint="psychometric test concept"
                            />
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <MotionWrapper
                as="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="py-20 bg-secondary/50"
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black tracking-tight text-gray-900">Understand Yourself Better, Choose Smarter</h2>
                    </div>
                    <MotionWrapper
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {qnaModel.map((item) => (
                            <MotionWrapper el="div" variants={cardVariants} key={item.number}>
                                <Card className="flex flex-col overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out h-full">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={item.image}
                                            alt={item.description.substring(0, 50)}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={item.aiHint}
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold text-primary">{item.number}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>
                </div>
            </MotionWrapper>
        </div>
    );
}
      