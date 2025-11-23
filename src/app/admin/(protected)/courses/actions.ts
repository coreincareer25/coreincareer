'use server';
import { revalidatePath } from 'next/cache';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { z } from 'zod';

const CourseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  colleges: z.string().transform((str) => str.split(',').map(s => s.trim()).filter(Boolean)),
});

type Course = {
    id: string;
    name: string;
    category: string;
    colleges: string[];
}

export async function getCourses(): Promise<Course[]> {
    const firestore = getAdminFirestore();
    const snapshot = await firestore.collection('courses').get();
    if (snapshot.empty) {
        return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
}

type ActionResponse = {
    success: boolean;
    message: string;
};

export async function createCourse(prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = CourseSchema.safeParse({
        name: formData.get('name'),
        category: formData.get('category'),
        colleges: formData.get('colleges'),
    });

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        await firestore.collection('courses').add(validatedFields.data);
        revalidatePath('/admin/courses');
        return { success: true, message: 'Course created successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to create course: ${errorMessage}` };
    }
}

export async function updateCourse(id: string, prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = CourseSchema.safeParse({
        name: formData.get('name'),
        category: formData.get('category'),
        colleges: formData.get('colleges'),
    });

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        await firestore.collection('courses').doc(id).update(validatedFields.data);
        revalidatePath('/admin/courses');
        return { success: true, message: 'Course updated successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to update course: ${errorMessage}` };
    }
}

export async function deleteCourse(id: string): Promise<ActionResponse> {
    try {
        const firestore = getAdminFirestore();
        await firestore.collection('courses').doc(id).delete();
        revalidatePath('/admin/courses');
        return { success: true, message: 'Course deleted successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to delete course: ${errorMessage}` };
    }
}
