import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">About Core in Career</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are dedicated to empowering individuals to discover and pursue their ideal career paths. Our mission is to provide comprehensive guidance and resources for a successful future.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex-row items-center gap-4">
                            <Target className="h-10 w-10 text-primary"/>
                            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-base">To be the most trusted career guidance partner by providing personalized, data-driven, and accessible educational and career counseling to students and professionals worldwide.</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex-row items-center gap-4">
                            <Eye className="h-10 w-10 text-primary"/>
                            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-base">To create a world where everyone has the clarity and confidence to choose a fulfilling career path, leading to personal and professional success and a better society.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
