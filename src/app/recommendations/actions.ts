"use server";

import { getPersonalizedRecommendations, PersonalizedRecommendationsInput, PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';

export async function generateRecommendations(input: PersonalizedRecommendationsInput): Promise<{ success: boolean; data?: PersonalizedRecommendationsOutput; error?: string; }> {
    try {
        const recommendations = await getPersonalizedRecommendations(input);
        return { success: true, data: recommendations };
    } catch (error) {
        console.error("Error generating recommendations:", error);
        // It's better to return a generic error message to the user
        // and log the detailed error on the server.
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: 'An unexpected error occurred while generating recommendations.' };
    }
}
