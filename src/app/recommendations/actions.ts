"use server";

import { getProjectInfo, ProjectInfoInput, ProjectInfoOutput } from '@/ai/flows/personalized-recommendations';

export async function generateAnswer(input: ProjectInfoInput): Promise<{ success: boolean; data?: ProjectInfoOutput; error?: string; }> {
    try {
        const answer = await getProjectInfo(input);
        return { success: true, data: answer };
    } catch (error) {
        console.error("Error generating answer:", error);
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: 'An unexpected error occurred while generating an answer.' };
    }
}