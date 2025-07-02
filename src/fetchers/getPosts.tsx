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