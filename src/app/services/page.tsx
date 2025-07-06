import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Award, FileText, Plane, School, Sparkles, UserCheck } from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  UserCheck,
  School,
  FileText,
  Award,
  Plane,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
            Our Counseling Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to ensure you make the best decisions for your academic and professional future. Our goal is to empower you at every step of your educational journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={service.title} className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                           {IconComponent && <IconComponent className="h-6 w-6" />}
                        </div>
                    </div>
                    <div>
                        <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                        <CardDescription className="mt-2 text-base text-muted-foreground">{service.description}</CardDescription>
                    </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
