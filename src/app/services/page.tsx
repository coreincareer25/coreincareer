import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Award, FileText, Plane, School, Sparkles, UserCheck } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";

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
      <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
        <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                <Balancer>
                Our Counseling <span className="text-primary">Services</span>
                </Balancer>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to ensure you make the best decisions for your academic and professional future. Our goal is to empower you at every step of your educational journey.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                <Card key={service.title} className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: `${200 + index * 150}ms` }}>
                    <CardHeader className="items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {IconComponent && <IconComponent className="h-8 w-8" />}
                        </div>
                        <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
                );
            })}
            </div>
        </div>
      </section>
    </div>
  );
}
