'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing AI agent documentation content.
 *
 * - summarizeAgentContent - An exported function that triggers the content summarization flow.
 * - SummarizeAgentContentInput - The input type for the summarizeAgentContent function.
 * - SummarizeAgentContentOutput - The output type for the summarizeAgentContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAgentContentInputSchema = z.object({
  content: z.string().describe('The AI agent documentation content to summarize.'),
});
export type SummarizeAgentContentInput = z.infer<typeof SummarizeAgentContentInputSchema>;

const SummarizeAgentContentOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the AI agent documentation content.'),
});
export type SummarizeAgentContentOutput = z.infer<typeof SummarizeAgentContentOutputSchema>;

export async function summarizeAgentContent(input: SummarizeAgentContentInput): Promise<SummarizeAgentContentOutput> {
  return summarizeAgentContentFlow(input);
}

const summarizeAgentContentPrompt = ai.definePrompt({
  name: 'summarizeAgentContentPrompt',
  input: {schema: SummarizeAgentContentInputSchema},
  output: {schema: SummarizeAgentContentOutputSchema},
  prompt: `Summarize the following AI agent documentation content in a concise manner:\n\n{{{content}}}`, 
});

const summarizeAgentContentFlow = ai.defineFlow(
  {
    name: 'summarizeAgentContentFlow',
    inputSchema: SummarizeAgentContentInputSchema,
    outputSchema: SummarizeAgentContentOutputSchema,
  },
  async input => {
    const {output} = await summarizeAgentContentPrompt(input);
    return output!;
  }
);
