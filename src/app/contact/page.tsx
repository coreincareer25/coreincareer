"use client";

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
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Balancer from "react-wrap-balancer";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="bg-background">
        <section className="py-20 bg-secondary">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl">
                <Balancer>
                    Contact <span className="text-primary">Us</span>
                </Balancer>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Have questions or need a free consultation? We'd love to hear from you.
                </p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <Card className="shadow-lg p-4">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                        <CardDescription>Fill out the form and our team will get back to you within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="How can we help you today?" className="min-h-[150px]" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4"/></>}
                            </Button>
                        </form>
                        </Form>
                    </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
                        <p className="text-muted-foreground">
                            Alternatively, you can reach us through the following channels. We are available during standard business hours.
                        </p>
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary"/>
                                <a href="mailto:coreincareer2025@gmail.com" className="hover:text-primary">coreincareer2025@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary"/>
                                <a href="tel:+919123783438" className="hover:text-primary">+91 9123783438</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1"/>
                                <span>123 Education Lane, Knowledge City, 45678, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}
