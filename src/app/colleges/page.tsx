import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { colleges } from "@/lib/data";
import Image from "next/image";
import { MapPin, Target } from "lucide-react";

export default function CollegesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
            College Profiles
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore detailed profiles of top colleges and universities to find your ideal institution.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {colleges.map((college) => (
            <Card key={college.name} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
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
                <CardDescription className="flex items-center gap-2">
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
    </div>
  );
}
