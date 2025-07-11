
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team, valuePropositions } from "@/lib/data";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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
        <div className="bg-white">
            <MotionWrapper
                el="section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative py-20 overflow-hidden"
            >
                <div className="absolute inset-0">
                    <Image
                        src="/images/about/about-header.jpg"
                        alt="Abstract background"
                        fill
                        className="object-cover"
                        data-ai-hint="team working"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                       <Balancer>
                         About <span className="text-[#ff81cc]">Core in Career</span>
                       </Balancer>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        We are dedicated to empowering individuals to discover and pursue their ideal career paths. Our mission is to provide comprehensive, personalized guidance and resources for a successful future.
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
                            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/images/about/story-vision.png"
                                    alt="Career counseling session"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="career counseling illustration"
                                />
                            </div>
                        </MotionWrapper>
                        <MotionWrapper
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true, amount: 0.3 }}
                             transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-black tracking-tight text-gray-900">Our Story and Vision</h2>
                            <p className="mt-6 text-muted-foreground">
                                Core in Career is a career counselling platform dedicated to helping individuals discover their true potential and align it with the right career path. We believe that successful careers are built from a strong understanding of one's core—skills, interests, values, and personality.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Through our science-backed psychometric assessments, expert one-on-one counselling, and tailored career roadmaps, we've helped hundreds of individuals make confident, informed decisions about their futures. Whether it's selecting the right academic stream, choosing a college course, or planning a career switch, our approach is practical, personalized, and proven to work.
                            </p>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold">Our services include:</h3>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>Career and stream selection</li>
                                    <li>Psychometric testing</li>
                                    <li>College and course guidance</li>
                                    <li>Career transitions and upskilling support</li>
                                </ul>
                            </div>
                            <p className="mt-6 text-muted-foreground">
                                With certified counsellors and real-world insights, Core in Career is more than a counselling service — it's your partner in building a career you'll love.
                            </p>
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
                className="py-20 bg-cyan-50"
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <p className="font-semibold uppercase tracking-widest text-muted-foreground">
                            WHY CHOOSE US
                        </p>
                        <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
                            Unique Value Propositions
                        </h2>
                    </div>
                    <MotionWrapper
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {valuePropositions.map((prop) => (
                            <MotionWrapper el="div" variants={cardVariants} key={prop.title}>
                                <Card className={cn(
                                    'p-8 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2 h-full',
                                    // prop.highlight ? 'bg-secondary' : 'bg-card'
                                )}>
                                    <CardContent className="p-0 flex flex-col items-center flex-1">
                                        <p className="text-primary font-bold text-lg">{prop.number}</p>
                                        <h3 className="mt-4 text-xl font-bold text-foreground">{prop.title}</h3>
                                        <p className="mt-4 text-muted-foreground flex-grow">{prop.description}</p>
                                    </CardContent>
                                </Card>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>
                </div>
            </MotionWrapper>

            <MotionWrapper
                el="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="py-20 bg-white"
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black tracking-tight text-gray-900">Our Mentors</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                            At Core in Career, our mentors are the backbone of our success. They bring a wealth of experience, industry knowledge, and compassion to guide students and professionals at every stage of their journey.
                        </p>
                    </div>
                    <MotionWrapper
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {team.map((member) => (
                            <MotionWrapper el="div" variants={cardVariants} key={member.name}>
                                <Card className="text-center bg-card shadow-lg p-6 h-full flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-1">
                                        <p className="text-md text-muted-foreground">{member.title}</p>
                                    </CardContent>
                                </Card>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>
                </div>
            </MotionWrapper>

            <MotionWrapper
                el="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="py-20 bg-primary/10"
            >
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <h2 className="text-3xl font-black tracking-tight text-gray-900">
                        Ready to Take the Next Step?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Your future is our priority. For more information or to start your journey with a free consultation, contact us today. Our team is here to help you unlock your full potential.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/contact">
                            Contact Us Now
                        </Link>
                    </Button>
                </div>
            </MotionWrapper>
        </div>
    );
}
      

    

    
