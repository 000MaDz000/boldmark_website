import { Picture } from "./picture";
import { Locale } from "./schema";
export interface Identity {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    name: string;
    description: string;
    logo: Picture;
}