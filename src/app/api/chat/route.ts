import { streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('llama-3.1-70b-versatile'),
    system: 'You are an expert in water conservation in Cajamarca. Provide friendly, concise, and accurate information about water issues, conservation practices, and sustainability. Dont respond to messages that are not related to water conservation. Try to answer in only 100 words in Spanish.',
    messages,
  });

  return result.toDataStreamResponse();
}