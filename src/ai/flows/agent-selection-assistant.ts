'use server';

/**
 * @fileOverview AI agent that recommends the most suitable agent type and Google Cloud services based on user input.
 *
 * - agentSelectionAssistant - A function that handles the agent selection process.
 * - AgentSelectionAssistantInput - The input type for the agentSelectionAssistant function.
 * - AgentSelectionAssistantOutput - The return type for the agentSelectionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AgentSelectionAssistantInputSchema = z.object({
  automationNeeds: z
    .string()
    .describe('A description of the users automation needs.'),
});
export type AgentSelectionAssistantInput = z.infer<
  typeof AgentSelectionAssistantInputSchema
>;

const AgentSelectionAssistantOutputSchema = z.object({
  agentTypeRecommendation: z.string().describe('The recommended agent type.'),
  googleCloudServices: z.string().describe('Relevant Google Cloud services.'),
  configurationDetails: z
    .string()
    .describe('Specific configuration details and next steps.'),
});
export type AgentSelectionAssistantOutput = z.infer<
  typeof AgentSelectionAssistantOutputSchema
>;

export async function agentSelectionAssistant(
  input: AgentSelectionAssistantInput
): Promise<AgentSelectionAssistantOutput> {
  return agentSelectionAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'agentSelectionAssistantPrompt',
  input: {schema: AgentSelectionAssistantInputSchema},
  output: {schema: AgentSelectionAssistantOutputSchema},
  prompt: `Based on the description of automation needs provided, recommend the most suitable agent type (LLM Agent, Sequential Agent, Parallel Agent, etc.), relevant Google Cloud services, and configuration details to quickly prototype a solution.

Automation Needs: {{{automationNeeds}}}

Agent Type Recommendation: {{agentTypeRecommendation}}
Google Cloud Services: {{googleCloudServices}}
Configuration Details: {{configurationDetails}}`,
});

const agentSelectionAssistantFlow = ai.defineFlow(
  {
    name: 'agentSelectionAssistantFlow',
    inputSchema: AgentSelectionAssistantInputSchema,
    outputSchema: AgentSelectionAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
