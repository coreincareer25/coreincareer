
"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
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
import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";

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
  const formRef = useRef<HTMLFormElement>(null);

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "The email service is not set up correctly. Please contact support.",
      });
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
      });
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-background">
        <MotionWrapper
            as="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative py-20 overflow-hidden"
        >
            <div className="absolute inset-0 h-full w-full">
                <Image
                    src="/images/contact/hero.jpg"
                    alt="Person on a call"
                    fill
                    className="object-cover object-center"
                    data-ai-hint="customer support"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="container relative mx-auto max-w-7xl px-4 text-center text-white">
                <h1 className="text-4xl font-black tracking-tight font-headline sm:text-5xl md:text-6xl">
                <Balancer>
                    Contact <span className="text-primary">Us</span>
                </Balancer>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Have questions or need a free consultation? We'd love to hear from you.
                </p>
            </div>
        </MotionWrapper>

        <section className="py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
                <MotionWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-headline">We're Here to Help</h2>
                        <p className="text-muted-foreground">
                        Have any questions or inquiries? Reach out to us and we'll respond promptly. Your academic journey starts here.
                        </p>
                        <div className="space-y-4 text-base md:text-lg">
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary flex-shrink-0"/>
                                <span>Call Us: 9123307383 or 6289713594</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary flex-shrink-0"/>
                                <a href="mailto:coreincareer2025@gmail.com" className="hover:text-primary break-all">coreincareer2025@gmail.com</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
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
                        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                </MotionWrapper>
            </div>
      </section>

      <MotionWrapper
        as="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="pb-16 md:pb-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">
                Find Us On The <span className="text-primary">Map</span>
            </h2>
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl border">
                <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src="https://maps.google.com/maps?q=Haridradanga%20Daspukur%20Dhar%20Prantik,%20Chandannagar,Hooghly,%20West%20Bengal-712136&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
