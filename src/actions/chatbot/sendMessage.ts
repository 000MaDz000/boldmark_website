'use server';
import { fetchAiChatbotOptions } from "@/fetchers/getAiChatbotOptions";
import { sendMessageToGemini } from "@/server_helpers/sendMessageToGemini";

/**
 * Sends a message to the Gemini model using a Server Action
 * @param message The user input or question
 * @param options System configuration options (optional)
 * @returns The generated response from Gemini or an error message
 */
export const sendMessageToChatbot = async (
    message: string,
): Promise<string> => {
    const options = await fetchAiChatbotOptions();
    return await sendMessageToGemini(message, options);
}