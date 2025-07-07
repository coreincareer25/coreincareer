import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Award, FileText, Plane, School, Sparkles, UserCheck, Snowflake } from "lucide-react";
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

// Wavy line SVG component for the offerings banner
const WavyLine = () => (
    <svg width="80" height="10" viewBox="0 0 100 10" className="inline-block text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" fill="transparent" strokeWidth="2"/>
    </svg>
);


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

      <section className="py-12 bg-cyan-50/50 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
          <div className="container mx-auto max-w-7xl px-4">
              <Snowflake className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">Your Ambition, Our Mission</h2>
              <div className="mt-2 flex items-center justify-center gap-4 text-muted-foreground">
                  <WavyLine />
                  <span className="text-lg font-medium">Offerings</span>
                  <WavyLine />
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                  <div>
                      <p className="text-lg font-bold text-primary">01.</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">Career Counseling</h3>
                      <p className="mt-4 text-muted-foreground">
                          Our career counseling service provides tailored advice to help students identify their strengths, interests, and career goals, ensuring a well-informed decision-making process. We guide them through various educational options and career paths that align with their aspirations.
                      </p>
                  </div>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                          src="https://placehold.co/600x400.png"
                          alt="Career counselling illustration"
                          fill
                          className="object-cover"
                          data-ai-hint="career choice illustration"
                      />
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                  <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                          src="https://placehold.co/600x400.png"
                          alt="Students in a classroom"
                          fill
                          className="object-cover"
                          data-ai-hint="students classroom lecture"
                      />
                  </div>
                  <div>
                      <p className="text-lg font-bold text-primary">02.</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">College & Management Counselling (UG & PG)</h3>
                      <p className="mt-4 text-muted-foreground">
                          We offer expert guidance to help you choose the right undergraduate or postgraduate program based on your interests, goals, and academic background. Our counselling also covers admission through private institutions, management quota seats, and stream-specific opportunities—ensuring you make informed and strategic decisions for your higher education journey.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                  <div>
                      <p className="text-lg font-bold text-primary">03.</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">Scholarship Assistance</h3>
                      <p className="mt-4 text-muted-foreground">
                          At Core in Career, we proudly endorse students who demonstrate exceptional talent, determination, and a strong commitment to their future. Our scholarship endorsement recognizes individuals who not only meet academic excellence but also show clear purpose in their chosen career paths. Whether you're applying for a university scholarship, a competitive fellowship, or need support securing educational funding, Core in Career is here to champion your journey.
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-2 font-semibold text-gray-800">
                          <li>Swami Vivekananda Scholarship</li>
                          <li>Kanyashree Scholarship</li>
                          <li>Nabanna Scholarship</li>
                      </ul>
                  </div>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                          src="https://placehold.co/600x400.png"
                          alt="Scholarship assistance illustration"
                          fill
                          className="object-cover"
                          data-ai-hint="scholarship money illustration"
                      />
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                  <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                          src="https://placehold.co/600x400.png"
                          alt="Student loan guidance"
                          fill
                          className="object-cover"
                          data-ai-hint="student loan concept"
                      />
                  </div>
                  <div>
                      <p className="text-lg font-bold text-primary">04.</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">Education Loan Guidance</h3>
                      <p className="mt-4 text-muted-foreground">
                          At Core in Career, we provide personalized support to help students and parents secure education loans from government and private institutions. From selecting the right bank or scheme to understanding interest rates, documentation, and eligibility, we guide you through every step—ensuring a smooth and hassle-free loan application process for studies in India or abroad.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                  <div>
                      <p className="text-lg font-bold text-primary">05.</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">Entrance Exam</h3>
                      <div className="mt-4 text-muted-foreground space-y-2">
                        <p>B.Tech/ Pharmacy — <span className="font-semibold text-gray-800">JEE MAINS/WBJEE</span></p>
                        <p>MBBS- <span className="font-semibold text-gray-800">NEET</span></p>
                        <p>Nursing — <span className="font-semibold text-gray-800">JENPAS/JOINT</span></p>
                        <p>Law — <span className="font-semibold text-gray-800">CLAT</span></p>
                        <p>Management — <span className="font-semibold text-gray-800">CET</span></p>
                        <p>Paramedical — <span className="font-semibold text-gray-800">JENPAS</span></p>
                        <p>Architecture — <span className="font-semibold text-gray-800">NATA</span></p>
                        <p>Diploma Engineering — <span className="font-semibold text-gray-800">JEXPO</span></p>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-gray-900">Other Entrance</h4>
                        <p className="mt-2 text-muted-foreground">KIITEE/SAAT/VITEEE/IEMJEE/BET etc.</p>
                      </div>
                  </div>
                  <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                          src="https://placehold.co/600x400.png"
                          alt="Entrance exam illustration"
                          fill
                          className="object-cover"
                          data-ai-hint="student exam illustration"
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
