import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-agent-content.ts';
import '@/ai/flows/agent-selection-assistant.ts';
import '@/ai/flows/generate-agent-description.ts';