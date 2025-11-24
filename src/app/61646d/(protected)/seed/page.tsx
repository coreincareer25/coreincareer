
// src/app/61646d/(protected)/seed/page.tsx
'use client';

import { useActionState, useEffect } from 'react';
import {
  seedCourses,
  seedColleges,
  seedScholarships,
} from '@/app/61646d/(protected)/seed/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { SeederButton } from './seeder-button';

export default function SeedPage() {
  const { toast } = useToast();

  const [coursesState, coursesAction, isCoursesPending] = useActionState(seedCourses, null);
  const [collegesState, collegesAction, isCollegesPending] = useActionState(seedColleges, null);
  const [scholarshipsState, scholarshipsAction, isScholarshipsPending] = useActionState(
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
            <SeederButton actionName="Courses" pending={isCoursesPending} />
          </form>
          <form action={collegesAction}>
            <SeederButton actionName="Colleges" pending={isCollegesPending} />
          </form>
          <form action={scholarshipsAction}>
            <SeederButton actionName="Scholarships" pending={isScholarshipsPending} />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
