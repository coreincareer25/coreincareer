import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/data";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function CoursesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
            <Balancer>
              Course <span className="text-primary">Explorer</span>
            </Balancer>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our extensive catalog of courses to find the perfect fit for your academic and career aspirations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <div className="relative h-48 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    data-ai-hint={course.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                  <CardDescription>Prerequisites: {course.prerequisites}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Curriculum Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.curriculum.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="space-y-2">
                      <h4 className="font-semibold">Career Prospects:</h4>
                      <p className="text-sm text-muted-foreground">{course.careerProspects}</p>
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
