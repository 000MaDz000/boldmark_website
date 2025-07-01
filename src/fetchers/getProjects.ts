'use server';

import { Project } from "@/types/project";
import { readOnlyBackend } from "@/utils/backend";

export async function getProjects({ page = 1, pageSize = 25 }: { page?: number, pageSize?: number }): Promise<Project[]> {
    const response = await readOnlyBackend.get("/projects", {
        params: {
            populate: ["post", "thumbnail"],
            pagination: {
                page,
                pageSize
            }
        }
    });

    return response.data.data;
}   