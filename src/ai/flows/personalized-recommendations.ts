// src/ai/flows/personalized-recommendations.ts
'use server';
/**
 * @fileOverview An informational AI assistant for the Core in Career project.
 *
 * - getProjectInfo - A function that answers questions about the project.
 * - ProjectInfoInput - The input type for the getProjectInfo function.
 * - ProjectInfoOutput - The return type for the getProjectInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { courseData } from '@/lib/course-data';
import { collegeData } from '@/lib/college-data';

const ProjectInfoInputSchema = z.object({
  query: z
    .string()
    .describe('The user\'s question about the Core in Career project.'),
});
export type ProjectInfoInput = z.infer<
  typeof ProjectInfoInputSchema
>;

const ProjectInfoOutputSchema = z.object({
  answer: z
    .string()
    .describe('A helpful and concise answer to the user\'s question.'),
});
export type ProjectInfoOutput = z.infer<
  typeof ProjectInfoOutputSchema
>;

export async function getProjectInfo(
  input: ProjectInfoInput
): Promise<ProjectInfoOutput> {
  return projectInfoFlow(input);
}

const coursesContext = JSON.stringify(courseData, null, 2);
const collegesContext = JSON.stringify(collegeData, null, 2);

const prompt = ai.definePrompt({
  name: 'projectInfoPrompt',
  input: {schema: ProjectInfoInputSchema},
  output: {schema: ProjectInfoOutputSchema},
  prompt: `You are a helpful AI assistant for the "Core in Career" website. Your goal is to answer user questions about the project, its services, courses, and college offerings.

Base your answers on the following information. Do not invent information. If the answer is not in the context, say that you don't have information on that topic. Be concise and friendly.

User's Question: {{{query}}}

Available Courses Context:
${coursesContext}

Available Colleges Context:
${collegesContext}

Format the output as a JSON object with a single key: "answer".`,
});

const projectInfoFlow = ai.defineFlow(
  {
    name: 'projectInfoFlow',
    inputSchema: ProjectInfoInputSchema,
    outputSchema: ProjectInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);