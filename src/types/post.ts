import { Picture } from "./picture";
import { Locale } from "./schema";

export interface Post {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    title: string;
    description: string;
    slug: string;
    content: string;
    thumbnail: Picture;
    publisher_picture?: Picture | null;
    publisher_name: string;
}