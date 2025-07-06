// src/ai/flows/personalized-recommendations.ts
'use server';
/**
 * @fileOverview Provides personalized recommendations for courses, colleges, and scholarships.
 *
 * - getPersonalizedRecommendations - A function that returns personalized recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('The user\'s interests, separated by commas.'),
  academicBackground: z
    .string()
    .describe('The user\'s academic background, including degrees and GPA.'),
  careerAspirations: z
    .string()
    .describe('The user\'s career aspirations and goals.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  courseRecommendations: z
    .array(z.string())
    .describe('A list of recommended courses.'),
  collegeRecommendations: z
    .array(z.string())
    .describe('A list of recommended colleges.'),
  scholarshipRecommendations: z
    .array(z.string())
    .describe('A list of recommended scholarships.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `Based on the user's interests, academic background, and career aspirations, provide personalized recommendations for courses, colleges, and scholarships.

User Interests: {{{interests}}}
Academic Background: {{{academicBackground}}}
Career Aspirations: {{{careerAspirations}}}

Format the output as a JSON object with the following keys:
- courseRecommendations: A list of recommended courses.
- collegeRecommendations: A list of recommended colleges.
- scholarshipRecommendations: A list of recommended scholarships.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
