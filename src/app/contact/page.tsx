
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
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  alternateNumber: z.string().optional(),
  guardianName: z.string().optional(),
  interestedSubject: z.string().optional(),
  interestedCollege: z.string().optional(),
  preferableCollegeLocation: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      <path d="M12.04 17.62c-1.34.88-3.03.36-3.9-1-.88-1.34-.36-3.03 1-3.9.83-.54 1.83-.71 2.74-.53m-2.6 4.49c.9.6 2.1.72 3.08.3"></path>
    </svg>
);


export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      alternateNumber: "",
      guardianName: "",
      interestedSubject: "",
      interestedCollege: "",
      preferableCollegeLocation: "",
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
        <section className="py-20 bg-secondary animate-in fade-in slide-in-from-top-8 duration-700 fill-mode-backwards">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '300ms' }}>
                <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-headline">We're Here to Help</h2>
                        <p className="text-muted-foreground">
                        Have any questions or inquiries? Reach out to us and we'll respond promptly. Your academic journey starts here.
                        </p>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary"/>
                                <span>Call Us: 9123307383 or 6289713594</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary"/>
                                <a href="mailto:coreincareer2025@gmail.com" className="hover:text-primary">coreincareer2025@gmail.com</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1"/>
                                <span>Haridradanga Daspukur Dhar Prantik, Chandannagar(mc),Hooghly, West Bengal-712136</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Follow Us</h3>
                            <div className="flex items-center gap-4 mt-2">
                                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary"><WhatsAppIcon /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube /></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Name <span className="text-destructive">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
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
                                    <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Contact Number <span className="text-destructive">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contact Number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="alternateNumber"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Alternate Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Alternate Number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="guardianName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Guardian Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Guardian Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="interestedSubject"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Interested Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Interested Subject" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="interestedCollege"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Interested College</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Interested College" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="preferableCollegeLocation"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Your Preferable College Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Preferable College Location" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Message" className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" className="w-auto px-10" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Sending...' : 'Send'}
                            </Button>
                        </form>
                        </Form>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}
