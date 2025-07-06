import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import { Target, Eye, Linkedin } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                       <Balancer>
                         About <span className="text-primary">Core in Career</span>
                       </Balancer>
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are dedicated to empowering individuals to discover and pursue their ideal career paths. Our mission is to provide comprehensive, personalized guidance and resources for a successful future.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '200ms' }}>
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Target className="h-8 w-8"/>
                                </div>
                                <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-base">To be the most trusted career guidance partner by providing personalized, data-driven, and accessible educational and career counseling to students and professionals worldwide.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '400ms' }}>
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Eye className="h-8 w-8"/>
                                </div>
                                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-base">To create a world where everyone has the clarity and confidence to choose a fulfilling career path, leading to personal and professional success and a better society.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                        <p className="font-semibold uppercase tracking-widest text-primary">OUR TEAM</p>
                        <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">Meet Our Experts</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our team of experienced counselors and admission experts is dedicated to your success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <Card key={member.name} className="text-center overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${300 + index * 150}ms` }}>
                                <div className="relative h-64 w-full">
                                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.aiHint} />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{member.name}</CardTitle>
                                    <p className="text-primary font-medium">{member.title}</p>
                                </CardHeader>
                                <CardContent>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        <Linkedin className="h-6 w-6 mx-auto"/>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
