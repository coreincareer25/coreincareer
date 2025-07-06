import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { colleges } from "@/lib/data";
import Image from "next/image";
import { MapPin, Target } from "lucide-react";
import Balancer from "react-wrap-balancer";

export default function CollegesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              College <span className="text-primary">Profiles</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore detailed profiles of top colleges and universities to find your ideal institution.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {colleges.map((college, index) => (
              <Card key={college.name} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${200 + index * 150}ms` }}>
                <div className="relative h-56 w-full">
                  <Image
                    src={college.image}
                    alt={college.name}
                    fill
                    className="object-cover"
                    data-ai-hint={college.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{college.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <MapPin className="h-4 w-4" /> {college.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                      <h4 className="font-semibold">Key Programs:</h4>
                      <p className="text-sm text-muted-foreground">{college.programs}</p>
                  </div>
                  <div>
                      <h4 className="font-semibold">Campus Life:</h4>
                      <p className="text-sm text-muted-foreground">{college.campusLife}</p>
                  </div>
                </CardContent>
                <CardFooter className="bg-secondary/50 p-4">
                  <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                      <Target className="h-5 w-5 text-primary" />
                      <div>
                          <span className="font-semibold">Admission Snapshot:</span> {college.admission}
                      </div>
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
