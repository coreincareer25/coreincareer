import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Award, FileText, Plane, School, Sparkles, UserCheck } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

const iconMap: { [key: string]: React.ElementType } = {
  UserCheck,
  School,
  FileText,
  Award,
  Plane,
  Sparkles,
};

const admissionProcessSteps = [
    {
        title: "Psychometric Testing",
        description: "We assess your personality, interests, and aptitude using science-based tools (like the Holland RIASEC model) to understand your strengths and ideal career path. Read more..."
    },
    {
        title: "Subject & Course Selection",
        description: "Based on your test results and personal interests, we help you choose the most suitable academic stream, subjects, and courses—whether at UG or PG level."
    },
    {
        title: "Document Verification",
        description: "We guide you in organizing and reviewing important documents (marksheets, ID proofs, certificates, etc.) needed for admission and scholarship applications."
    },
    {
        title: "Interview / Entrance Exam Preparation",
        description: "We offer tips, mock interviews, and practice materials to help you perform confidently in college entrance exams or selection interviews."
    },
    {
        title: "Final Admission Guidance",
        description: "From choosing the right college to completing the application process, we provide end-to-end support to ensure a smooth, stress-free admission."
    }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
        <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                <Balancer>
                Our <span className="text-primary">Services</span>
                </Balancer>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to ensure you make the best decisions for your academic and professional future. Our goal is to empower you at every step of your educational journey.
            </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              Admission Process <span className="text-primary">Support</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '500ms' }}>
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {admissionProcessSteps.map((step, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card px-4 shadow-sm">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{step.title}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {step.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Counselling Services Sign"
                fill
                className="object-cover"
                data-ai-hint="counselling services sign"
              />
            </div>
          </div>
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
