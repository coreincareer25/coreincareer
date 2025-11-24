
'use server';
import { revalidatePath } from 'next/cache';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { z } from 'zod';

const ScholarshipSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  amount: z.string().min(1, 'Amount is required'),
  image: z.string().min(1, 'Image URL is required'),
  aiHint: z.string().optional(),
});

export type Scholarship = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  amount: string;
  image: string;
  aiHint?: string;
}

export async function getScholarships(): Promise<Scholarship[]> {
    const firestore = getAdminFirestore();
    const snapshot = await firestore.collection('scholarships').get();
    if (snapshot.empty) {
        return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Scholarship));
}

type ActionResponse = {
    success: boolean;
    message: string;
};

export async function createScholarship(prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = ScholarshipSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        await firestore.collection('scholarships').add(validatedFields.data);
        revalidatePath('/61646d/scholarships');
        revalidatePath('/scholarships');
        return { success: true, message: 'Scholarship created successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to create scholarship: ${errorMessage}` };
    }
}

export async function updateScholarship(id: string, prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = ScholarshipSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        await firestore.collection('scholarships').doc(id).update(validatedFields.data);
        revalidatePath('/61646d/scholarships');
        revalidatePath('/scholarships');
        return { success: true, message: 'Scholarship updated successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to update scholarship: ${errorMessage}` };
    }
}

export async function deleteScholarship(id: string): Promise<ActionResponse> {
    try {
        const firestore = getAdminFirestore();
        await firestore.collection('scholarships').doc(id).delete();
        revalidatePath('/61646d/scholarships');
        revalidatePath('/scholarships');
        return { success: true, message: 'Scholarship deleted successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to delete scholarship: ${errorMessage}` };
    }
}
