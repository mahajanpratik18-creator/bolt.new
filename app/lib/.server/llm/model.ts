import { createGoogleGenerativeAI } from '@ai-sdk/google';

export function getGeminiModel(apiKey: string) {
  const google = createGoogleGenerativeAI({
    apiKey,
  });

  return google('gemini-2.0-flash-exp');
}