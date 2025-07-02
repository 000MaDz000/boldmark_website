import { Picture } from "./picture";

export interface BlogPageData {
    title?: string | null;
    subtitle?: string | null;
    blog_logo?: Picture | null;
}