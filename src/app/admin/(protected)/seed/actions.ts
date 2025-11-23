// src/app/admin/(protected)/seed/actions.ts
'use server';

import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { courseData } from '@/lib/course-data';
import { collegeData } from '@/lib/college-data';
import { scholarships } from '@/lib/data';

type ActionResponse = {
  success: boolean;
  message: string;
};

async function seedCollection(
  collectionName: string,
  data: any,
  transform: (item: any) => any = (item) => item
): Promise<ActionResponse> {
  try {
    const { firestore } = initializeFirebase();
    const collectionRef = collection(firestore, collectionName);
    const batch = writeBatch(firestore);

    if (Array.isArray(data)) {
      data.forEach((item) => {
        const docRef = collectionRef.doc();
        batch.set(docRef, transform(item));
      });
    } else if (typeof data === 'object' && data !== null) {
      Object.entries(data).forEach(([key, value]) => {
        const docRef = collection(firestore, collectionName).doc(key);
        batch.set(docRef, transform(value));
      });
    }


    await batch.commit();

    return {
      success: true,
      message: `Successfully seeded ${collectionName} collection.`,
    };
  } catch (error) {
    console.error(`Error seeding ${collectionName}:`, error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      success: false,
      message: `Failed to seed ${collectionName}: ${errorMessage}`,
    };
  }
}

export async function seedCourses(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
    const coursesToSeed = Object.entries(courseData).flatMap(([category, courses]) => 
        courses.map(course => ({...course, category}))
    );
    return seedCollection('courses', coursesToSeed);
}

export async function seedColleges(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  return seedCollection('colleges', collegeData);
}

export async function seedScholarships(
  prevState: ActionResponse | null,
  formData: FormData
): Promise  <ActionResponse> {
  return seedCollection('scholarships', scholarships);
}
