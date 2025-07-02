'use server';

import { Project } from "@/types/project";
import { ResponseSchema } from "@/types/schema";
import { readOnlyBackend } from "@/utils/backend";

export async function getProjects({ page = 1, pageSize = 25 }: { page?: number, pageSize?: number }): Promise<ResponseSchema<Project>> {
    const response = await readOnlyBackend.get("/projects", {
        params: {
            populate: ["post", "thumbnail"],
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