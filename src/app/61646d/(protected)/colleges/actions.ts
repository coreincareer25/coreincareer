
'use server';
import { revalidatePath } from 'next/cache';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { z } from 'zod';
import { FieldValue } from 'firebase-admin/firestore';

// Simplified schema for the form
const CollegeSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  // For simplicity, we'll handle the complex object structures as JSON strings in the form
  // and parse them here. In a real app, you might use nested form fields.
  colleges: z.string().optional(),
  subCategories: z.string().optional(),
});

type College = {
    id: string;
    title: string;
    colleges?: any[];
    subCategories?: object;
}

export async function getColleges(): Promise<College[]> {
    const firestore = getAdminFirestore();
    const snapshot = await firestore.collection('colleges').get();
    if (snapshot.empty) {
        return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as College));
}

type ActionResponse = {
    success: boolean;
    message: string;
};

// Helper to safely parse JSON
const safeJsonParse = (jsonString: string | undefined, fallback: any) => {
    if (!jsonString) return fallback;
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return fallback;
    }
};

export async function createCollege(prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = CollegeSchema.safeParse({
        title: formData.get('title'),
        colleges: formData.get('colleges'),
        subCategories: formData.get('subCategories'),
    });

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        const { title, colleges, subCategories } = validatedFields.data;

        const dataToSave: {title: string, colleges?: any, subCategories?: any} = { title };
        if (colleges) dataToSave.colleges = safeJsonParse(colleges, []);
        if (subCategories) dataToSave.subCategories = safeJsonParse(subCategories, {});
        
        await firestore.collection('colleges').add(dataToSave);

        revalidatePath('/61646d/colleges');
        revalidatePath('/colleges');
        return { success: true, message: 'College category created successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to create college category: ${errorMessage}` };
    }
}

export async function updateCollege(id: string, prevState: any, formData: FormData): Promise<ActionResponse> {
    const validatedFields = CollegeSchema.safeParse({
        title: formData.get('title'),
        colleges: formData.get('colleges'),
        subCategories: formData.get('subCategories'),
    });

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
    }

    try {
        const firestore = getAdminFirestore();
        const { title, colleges, subCategories } = validatedFields.data;
        
        const dataToUpdate: {[key: string]: any} = { title };

        // Handle colleges field
        if (colleges && colleges.trim() !== '') {
            dataToUpdate.colleges = safeJsonParse(colleges, []);
        } else {
            // If the field is empty or just whitespace, remove it from the document
            dataToUpdate.colleges = FieldValue.delete();
        }

        // Handle subCategories field
        if (subCategories && subCategories.trim() !== '') {
            dataToUpdate.subCategories = safeJsonParse(subCategories, {});
        } else {
            // If the field is empty or just whitespace, remove it from the document
            dataToUpdate.subCategories = FieldValue.delete();
        }
        
        await firestore.collection('colleges').doc(id).update(dataToUpdate);

        revalidatePath('/61646d/colleges');
        revalidatePath('/colleges');
        return { success: true, message: 'College category updated successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to update college category: ${errorMessage}` };
    }
}

export async function deleteCollege(id: string): Promise<ActionResponse> {
    try {
        const firestore = getAdminFirestore();
        await firestore.collection('colleges').doc(id).delete();
        revalidatePath('/61646d/colleges');
        revalidatePath('/colleges');
        return { success: true, message: 'College category deleted successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Failed to delete college category: ${errorMessage}` };
    }
}
