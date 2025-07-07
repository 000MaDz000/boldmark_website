import { AiChatbotOptions } from "@/types/ai_chatbot";
import { readOnlyBackend } from "@/utils/backend";



export async function fetchAiChatbotOptions(): Promise<AiChatbotOptions | null> {
    try {
        const response = await readOnlyBackend.get("/ai-chatbot", {
            params: {
                populate: ["suggested_questions"]
            }
        });

        const data = response.data.data as AiChatbotOptions;
        return data;
    }
    catch {
        return null
    }
}