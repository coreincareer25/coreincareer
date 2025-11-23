// src/app/admin/(protected)/seed/page.tsx
'use client';

import { useFormState } from 'react-dom';
import {
  seedCourses,
  seedColleges,
  seedScholarships,
} from '@/app/admin/(protected)/seed/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { SeederButton } from './seeder-button';

export default function SeedPage() {
  const { toast } = useToast();

  const [coursesState, coursesAction] = useFormState(seedCourses, null);
  const [collegesState, collegesAction] = useFormState(seedColleges, null);
  const [scholarshipsState, scholarshipsAction] = useFormState(
    seedScholarships,
    null
  );

  useEffect(() => {
    if (coursesState?.message) {
      toast({
        title: coursesState.success ? 'Success' : 'Error',
        description: coursesState.message,
        variant: coursesState.success ? 'default' : 'destructive',
      });
    }
  }, [coursesState, toast]);

  useEffect(() => {
    if (collegesState?.message) {
      toast({
        title: collegesState.success ? 'Success' : 'Error',
        description: collegesState.message,
        variant: collegesState.success ? 'default' : 'destructive',
      });
    }
  }, [collegesState, toast]);

  useEffect(() => {
    if (scholarshipsState?.message) {
      toast({
        title: scholarshipsState.success ? 'Success' : 'Error',
        description: scholarshipsState.message,
        variant: scholarshipsState.success ? 'default' : 'destructive',
      });
    }
  }, [scholarshipsState, toast]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seed Database</h1>
      <Card>
        <CardHeader>
          <CardTitle>Database Seeding</CardTitle>
          <CardDescription>
            Use these buttons to populate the Firestore database with initial
            data from your local files. This will overwrite any existing data
            in the collections.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={coursesAction}>
            <SeederButton actionName="Courses" />
          </form>
          <form action={collegesAction}>
            <SeederButton actionName="Colleges" />
          </form>
          <form action={scholarshipsAction}>
            <SeederButton actionName="Scholarships" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
