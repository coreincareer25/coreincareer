
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2, Sparkles, BookOpen, School, Award } from "lucide-react";
import { generateRecommendations } from "./actions";
import type { PersonalizedRecommendationsOutput } from "@/ai/flows/personalized-recommendations";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

const formSchema = z.object({
  interests: z.string().min(5, { message: "Please describe your interests." }),
  academicBackground: z.string().min(10, { message: "Please provide your academic background." }),
  careerAspirations: z.string().min(10, { message: "Please describe your career aspirations." }),
});

export default function RecommendationsPage() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      academicBackground: "",
      careerAspirations: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await generateRecommendations(values);
      if (result.success && result.data) {
        setRecommendations(result.data);
        toast({
          title: "Recommendations Ready!",
          description: "We've generated your personalized recommendations.",
        });
      } else {
        throw new Error(result.error || "An unknown error occurred.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "We couldn't generate recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background">
      <section className="relative py-20 animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="/images/recommendations/hero.jpg"
                alt="AI brain illustration"
                fill
                className="object-cover"
                data-ai-hint="ai brain"
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
            <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                <Balancer>
                AI-Powered <span className="text-primary">Recommendations</span>
                </Balancer>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Tell us about yourself, and our AI will generate personalized suggestions for courses, colleges, and scholarships to guide your educational path.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
            <Card className="shadow-lg sticky top-24">
                <CardHeader>
                <CardTitle className="font-headline text-2xl">Tell Us About You</CardTitle>
                <CardDescription>The more details you provide, the better the recommendations.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="interests"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Interests</FormLabel>
                            <FormControl>
                            <Textarea placeholder="e.g., coding, painting, machine learning, sustainable energy" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="academicBackground"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Academic Background</FormLabel>
                            <FormControl>
                            <Textarea placeholder="e.g., High School Diploma with 3.8 GPA, major in Sciences. B.Sc. in Physics with 3.5 GPA." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="careerAspirations"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Career Aspirations</FormLabel>
                            <FormControl>
                            <Textarea placeholder="e.g., I want to become a software engineer at a top tech company, or start my own design studio." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : <><Sparkles className="mr-2 h-4 w-4" /> Get Recommendations</>}
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <h2 className="text-2xl font-bold font-headline">Your AI-Powered Suggestions</h2>
                {isLoading && (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center h-full">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-lg font-medium">Generating your personalized path...</p>
                    <p className="text-muted-foreground">This may take a moment.</p>
                </div>
                )}
                {recommendations && (
                <Accordion type="multiple" defaultValue={['courses', 'colleges', 'scholarships']} className="w-full space-y-4 animate-in fade-in duration-500">
                    <AccordionItem value="courses" className="border rounded-lg bg-card px-4 shadow-sm">
                    <AccordionTrigger className="text-lg font-headline hover:no-underline"><BookOpen className="mr-3 h-5 w-5 text-primary"/> Course Recommendations</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {recommendations.courseRecommendations.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="colleges" className="border rounded-lg bg-card px-4 shadow-sm">
                    <AccordionTrigger className="text-lg font-headline hover:no-underline"><School className="mr-3 h-5 w-5 text-primary"/> College Recommendations</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {recommendations.collegeRecommendations.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="scholarships" className="border rounded-lg bg-card px-4 shadow-sm">
                    <AccordionTrigger className="text-lg font-headline hover:no-underline"><Award className="mr-3 h-5 w-5 text-primary"/> Scholarship Recommendations</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {recommendations.scholarshipRecommendations.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                )}
            {!isLoading && !recommendations && (
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center h-full">
                        <Sparkles className="h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 text-lg font-medium">Your recommendations will appear here.</p>
                        <p className="text-muted-foreground">Fill out the form to get started.</p>
                    </div>
                )}
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}
