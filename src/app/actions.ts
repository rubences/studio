'use server';

import { agentSelectionAssistant, AgentSelectionAssistantInput, AgentSelectionAssistantOutput } from '@/ai/flows/agent-selection-assistant';
import { z } from 'zod';

const inputSchema = z.object({
  automationNeeds: z.string().min(10, { message: 'Please describe your needs in at least 10 characters.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: AgentSelectionAssistantOutput;
}

export async function getAgentRecommendation(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = inputSchema.safeParse({
    automationNeeds: formData.get('automationNeeds'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Failed to get recommendation.',
      issues
    };
  }

  try {
    const result = await agentSelectionAssistant(validatedFields.data);
    return {
      message: 'Success!',
      data: result,
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An unexpected error occurred.',
    };
  }
}
