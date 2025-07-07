import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team, valuePropositions } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <section className="relative py-20 animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://placehold.co/1920x400.png"
                        alt="Abstract background"
                        fill
                        className="object-cover"
                        data-ai-hint="abstract background"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                       <Balancer>
                         About <span className="text-primary">Core in Career</span>
                       </Balancer>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        We are dedicated to empowering individuals to discover and pursue their ideal career paths. Our mission is to provide comprehensive, personalized guidance and resources for a successful future.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards">
                            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/images/about/counseling-session.jpg"
                                    alt="Career counseling session"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="career counseling illustration"
                                />
                            </div>
                        </div>
                        <div className="animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-cyan-50">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                        <h2 className="text-4xl font-black tracking-tight text-gray-900">Our Mentors</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                            At Core in Career, our mentors are the backbone of our success. They bring a wealth of experience, industry knowledge, and compassion to guide students and professionals at every stage of their journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={member.name} className="text-center overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards bg-card shadow-lg" style={{ animationDelay: `${300 + index * 150}ms` }}>
                                <div className="relative h-64 w-full">
                                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.aiHint} />
                                </div>
                                <CardHeader className="p-4 pb-2">
                                    <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{member.title}</p>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline break-all">
                                        {member.email}
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                        <p className="font-semibold uppercase tracking-widest text-muted-foreground">
                            WHY CHOOSE US
                        </p>
                        <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
                            Unique Value Propositions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {valuePropositions.map((prop, index) => (
                            <Card key={prop.title} className={cn(
                                'p-8 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards',
                                prop.highlight ? 'bg-secondary' : 'bg-card'
                            )} style={{ animationDelay: `${300 + index * 150}ms` }}>
                                <CardContent className="p-0 flex flex-col items-center flex-1">
                                    <p className="text-primary font-bold text-lg">{prop.number}</p>
                                    <h3 className="mt-4 text-xl font-bold text-foreground">{prop.title}</h3>
                                    <p className="mt-4 text-muted-foreground flex-grow">{prop.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
