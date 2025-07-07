import { SuggestedQuestion } from "./cms_components/types/suggested_question";

export type AiChatbotOptions = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    suggested_questions: SuggestedQuestion[],
    system_prompt: string;
}