'use server';

import { ContactPageData } from "@/types/contactpage";
import { readOnlyBackend } from "@/utils/backend";

export async function getContactPageData(): Promise<ContactPageData | null> {
    try {
        const res = await readOnlyBackend.get("/contact-page", {
            params: {
                populate: {
                    start_cta: {
                        populate: ['regular_link', "filled_link", "background_image"]
                    },
                    end_cta: {
                        populate: ['regular_link', "filled_link", "background_image"]
                    }
                }
            }
        });

        return res.data.data
    }
    catch {
        return null;
    }
}