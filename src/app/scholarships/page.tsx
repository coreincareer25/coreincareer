import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { scholarships } from "@/lib/data";
import Image from "next/image";
import { Calendar, Target } from "lucide-react";
import Balancer from "react-wrap-balancer";

export default function ScholarshipsPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="https://placehold.co/1920x400.png"
                alt="Graduation cap and money"
                fill
                className="object-cover"
                data-ai-hint="scholarship money"
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
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {scholarships.map((scholarship, index) => (
                <Card key={scholarship.name} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${200 + index * 150}ms` }}>
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
            ))}
            </div>
        </div>
      </section>
    </div>
  );
}
