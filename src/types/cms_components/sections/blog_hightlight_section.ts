import { BlogHighlightType } from "../types/blog_highlight";

export interface BlogHightlightSection {
    title: string;
    // subtitle?: string | null;
    // text?: string | null;
    highlights: BlogHighlightType[];
}