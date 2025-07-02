'use server';

import { Post } from "@/types/post";
import { ResponseSchema } from "@/types/schema";
import { readOnlyBackend } from "@/utils/backend";

export async function getPosts({ page = 1, pageSize = 25 }: { page?: number, pageSize?: number }): Promise<ResponseSchema<Post>> {
    const response = await readOnlyBackend.get("/posts", {
        params: {
            populate: ["thumbnail", "publisher_picture"],
            sort: {
                publishedAt: "desc"
            },
            pagination: {
                page,
                pageSize
            }
        }
    });

    return response.data;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const response = await readOnlyBackend.get("/posts", {
            params: {
                populate: ["thumbnail", "publisher_picture"],
                filters: {
                    slug: {
                        $eq: slug,
                    },
                },
                pagination: {
                    page: 1,
                    pageSize: 1,
                },
            },
        });

        return response.data?.data?.[0] ?? null;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}
