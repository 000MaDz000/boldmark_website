'use server';
import { WorksPageData } from "@/types/workspage";
import { readOnlyBackend } from "@/utils/backend";

export async function getWorksPageData(): Promise<WorksPageData> {
    const res = await readOnlyBackend.get("/works-page");
    const data = res.data.data;

    return data;
}