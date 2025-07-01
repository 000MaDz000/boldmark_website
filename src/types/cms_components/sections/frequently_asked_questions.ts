import { Picture } from "@/types/picture";
import { AnsweredQuestion } from "../types/answered_question";

export interface FrequentlyAskedQuestions {
    title: string;
    text?: string | null;
    questions: AnsweredQuestion[];
    side_image: Picture;
}
