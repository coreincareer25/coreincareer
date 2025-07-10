
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});


export function Footer() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "The newsletter service is not set up correctly.",
      });
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, values, publicKey);
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: "There was an error. Please try again.",
      });
    }
  }

  const quickLinks = [
    { href: '/courses', label: 'Courses' },
    { href: '/colleges', label: 'Colleges' },
    { href: '/scholarships', label: 'Scholarships' },
  ];
  const supportLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/recommendations', label: 'AI Recommendations' },
  ];

  return (
    <footer className="bg-gradient-to-t from-violet-800 to-purple-400 text-black-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo showSubtitle={false} />
            <p className="mt-4 text-sm font-medium text-gray-900">
              Guiding you on your educational journey with expert advice and personalized recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-bold font-headline text-black">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline text-black">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline text-black">Stay Updated</h3>
            <p className="mt-4 text-sm font-semibold text-gray-900">
              Subscribe to our newsletter for the latest updates on courses, scholarships, and more.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} className="bg-white-800 border-gray-700 text-white placeholder-gray-500" />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="icon" aria-label="Subscribe" disabled={form.formState.isSubmitting}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-black">
          <p>&copy; 2025 Core in Career powered by JP Educational Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
