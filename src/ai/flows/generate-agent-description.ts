'use server';

/**
 * @fileOverview An AI agent that generates a detailed description of an AI agent and its Google Cloud components based on a user-provided prompt.
 *
 * - generateAgentDescription - A function that generates the agent description.
 * - GenerateAgentDescriptionInput - The input type for the generateAgentDescription function.
 * - GenerateAgentDescriptionOutput - The return type for the generateAgentDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAgentDescriptionInputSchema = z.object({
  prompt: z.string().describe('A detailed prompt describing the desired AI agent.'),
});
export type GenerateAgentDescriptionInput = z.infer<typeof GenerateAgentDescriptionInputSchema>;

const GenerateAgentDescriptionOutputSchema = z.object({
  agentDescription: z.string().describe('A detailed description of the AI agent.'),
  googleCloudComponents: z
    .string()
    .describe('A list of Google Cloud components needed to implement the agent.'),
});
export type GenerateAgentDescriptionOutput = z.infer<typeof GenerateAgentDescriptionOutputSchema>;

export async function generateAgentDescription(
  input: GenerateAgentDescriptionInput
): Promise<GenerateAgentDescriptionOutput> {
  return generateAgentDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAgentDescriptionPrompt',
  input: {schema: GenerateAgentDescriptionInputSchema},
  output: {schema: GenerateAgentDescriptionOutputSchema},
  prompt: `You are an expert AI agent architect.

You will receive a prompt describing a desired AI agent. You will generate a detailed description of the agent and a list of Google Cloud components needed to implement the agent.

Prompt: {{{prompt}}}

Description:
Agent Description: {{agentDescription}}
Google Cloud Components: {{googleCloudComponents}}`,
});

const generateAgentDescriptionFlow = ai.defineFlow(
  {
    name: 'generateAgentDescriptionFlow',
    inputSchema: GenerateAgentDescriptionInputSchema,
    outputSchema: GenerateAgentDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
