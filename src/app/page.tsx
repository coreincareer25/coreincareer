import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <section className="text-center pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <p className="font-semibold uppercase tracking-widest text-gray-500">
            EMPOWER YOUR FUTURE
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Discover the Core of Your
            <br />
            Career Path
          </h1>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md px-8 shadow-lg hover:opacity-90 transition-opacity">
              <Link href="/contact">
                Get your free consult today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="relative h-40 md:h-64 lg:h-96 w-full max-w-6xl mx-auto">
           <Image
              src="https://placehold.co/1200x350.png"
              alt="A diverse group of professionals in various uniforms"
              fill
              className="object-contain"
              data-ai-hint="professionals group cartoon"
            />
        </div>
      </section>
    </main>
  );
}
