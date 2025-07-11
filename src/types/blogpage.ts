import { Picture } from "./picture";
import { Locale } from "./schema";

export interface BlogPageData {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    title?: string | null;
    subtitle?: string | null;
    blog_logo?: Picture | null;
}