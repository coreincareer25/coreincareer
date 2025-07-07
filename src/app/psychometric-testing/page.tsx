import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const riasecModel = [
    {
        type: "Realistic (Doers)",
        description: "People who are practical, hands-on, and enjoy working with tools, machines, or animals. They are often good at mechanical or athletic jobs."
    },
    {
        type: "Investigative (Thinkers)",
        description: "People who like to observe, learn, investigate, analyze, evaluate, or solve problems. They often work in scientific or research fields."
    },
    {
        type: "Artistic (Creators)",
        description: "People who have artistic, innovating, or intuitional abilities and like to work in unstructured situations using their imagination and creativity."
    },
    {
        type: "Social (Helpers)",
        description: "People who like to work with people to enlighten, inform, help, train, or cure them, or are skilled with words."
    },
    {
        type: "Enterprising (Persuaders)",
        description: "People who like to work with people, influencing, persuading, leading or managing for organizational goals or economic gain."
    },
    {
        type: "Conventional (Organizers)",
        description: "People who like to work with data, have clerical or numerical ability, carry out tasks in detail or follow through on others' instructions."
    }
]

export default function PsychometricTestingPage() {
    return (
        <div className="bg-background">
            <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                        <Balancer>
                            Psychometric <span className="text-primary">Testing</span>
                        </Balancer>
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Discover your strengths and find the career path that's right for you through our science-backed assessments.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards">
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
                        </div>
                        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
                            <Image
                                src="/images/services/psychometric-test.jpg"
                                alt="Psychometric test concept"
                                fill
                                className="object-cover"
                                data-ai-hint="psychometric test concept"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                        <h2 className="text-4xl font-black tracking-tight text-gray-900">Understand Yourself Better, Choose Smarter</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            The Holland Codes or the Holland Occupational Themes (RIASEC) refers to a theory of careers and vocational choice based upon personality types.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {riasecModel.map((item, index) => (
                            <Card key={item.type} className="text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${300 + index * 150}ms` }}>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-primary">{item.type}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
