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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles, Wand } from "lucide-react";
import { generateAnswer } from "./actions";
import type { ProjectInfoOutput } from "@/ai/flows/personalized-recommendations";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";

const formSchema = z.object({
  query: z.string().min(10, { message: "Please ask a question about our project." }),
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const heroSectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7 }
};

export default function RecommendationsPageContent() {
  const { toast } = useToast();
  const [answer, setAnswer] = useState<ProjectInfoOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer(null);
    try {
      const result = await generateAnswer(values);
      if (result.success && result.data) {
        setAnswer(result.data);
        toast({
          title: "Answer Ready!",
          description: "We've generated an answer to your question.",
        });
      } else {
        throw new Error(result.error || "An unknown error occurred.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "We couldn't generate an answer. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background">
      <MotionWrapper
        el="section"
        initial={heroSectionVariants.initial}
        animate={heroSectionVariants.animate}
        transition={heroSectionVariants.transition}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 h-full w-full">
            <Image
                src="/images/recommendations/hero.jpeg"
                alt="AI brain illustration"
                fill
                className="object-cover object-center"
                data-ai-hint="ai brain"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
            <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out">
                <Balancer>
                Project AI <span className="text-primary">Assistant</span>
                </Balancer>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question about Core in Career? Ask our AI assistant about our services, courses, or college partnerships.
            </p>
        </div>
      </MotionWrapper>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <Card className="shadow-lg md:sticky md:top-24">
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ask a Question</CardTitle>
                    <CardDescription>Ask anything about our project, and our AI will help.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="query"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Question</FormLabel>
                                <FormControl>
                                <Input placeholder="e.g., Which colleges offer B.Tech in CSE?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Thinking...</> : <><Wand className="mr-2 h-4 w-4" /> Ask AI</>}
                        </Button>
                        </form>
                    </Form>
                    </CardContent>
                </Card>
              </div>

              <MotionWrapper
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionVariants}
                  className="space-y-8"
              >
                  <h2 className="text-2xl font-bold font-headline">AI Response</h2>
                  {isLoading && (
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center h-full">
                      <Loader2 className="h-12 w-12 animate-spin text-primary" />
                      <p className="mt-4 text-lg font-medium">Generating your answer...</p>
                      <p className="text-muted-foreground">This may take a moment.</p>
                  </div>
                  )}
                  {answer && (
                    <Card className="shadow-sm">
                        <CardContent className="p-6">
                            <p className="text-muted-foreground whitespace-pre-wrap">{answer.answer}</p>
                        </CardContent>
                    </Card>
                  )}
                  {!isLoading && !answer && (
                      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center h-full">
                          <Sparkles className="h-12 w-12 text-muted-foreground" />
                          <p className="mt-4 text-lg font-medium">The AI's answer will appear here.</p>
                          <p className="text-muted-foreground">Ask a question to get started.</p>
                      </div>
                  )}
              </MotionWrapper>
            </div>
        </div>
      </section>
    </div>
  );
}