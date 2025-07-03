import { Picture } from "./picture";
import { Locale } from "./schema";


export interface Feature {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    title: string;
    description: string;
    image: Picture;
}