'use server';
import { BlogPageData } from "@/types/blogpage";
import { readOnlyBackend } from "@/utils/backend";

export async function getBlogPageData(): Promise<BlogPageData> {
    const res = await readOnlyBackend.get("/blog-page", {
        params: {
            populate: ["blog_logo"]
        }
    });
    const data = res.data.data;

    return data;
}