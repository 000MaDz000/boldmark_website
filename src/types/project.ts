import { Picture } from "./picture";
import { Post } from "./post";
import { Locale } from "./schema";

export interface Project {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    post?: Post;
    thumbnail: Picture;
    title: string;
    description: string;
    custom_link?: string;
}