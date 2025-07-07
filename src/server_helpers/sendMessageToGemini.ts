import { fetchAiChatbotOptions } from '@/fetchers/getAiChatbotOptions';
import { AiChatbotOptions } from '@/types/ai_chatbot';
import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const defaultSystemPrompt = `You are an intelligent assistant that helps users understand questions.`;

/**
 * Sends a message to the Gemini model using a Server Action
 * @param message The user input or question
 * @param options System configuration options (optional)
 * @returns The generated response from Gemini or an error message
 */
export const sendMessageToGemini = async (
    message: string,
    options?: AiChatbotOptions | null
): Promise<string> => {
    if (!options) {
        options = await fetchAiChatbotOptions();
    }

    const systemPrompt = `
${options?.system_prompt || defaultSystemPrompt}

Question: ${message}
`.trim();

    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [{ text: systemPrompt }],
                    },
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                },
                safetySettings: [
                    {
                        category: 'HARM_CATEGORY_HARASSMENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                    {
                        category: 'HARM_CATEGORY_HATE_SPEECH',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const candidates = response.data.candidates;
        if (candidates && candidates[0]?.content?.parts?.[0]?.text) {
            return candidates[0].content.parts[0].text;
        } else {
            return 'Could not get a response from Gemini.';
        }
    } catch (error) {
        console.error('Gemini Error:', error);
        return 'An error occurred while connecting to Gemini. Please try again.';
    }
};
