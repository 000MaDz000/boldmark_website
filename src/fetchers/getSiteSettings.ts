'use server';

import { SiteSettings } from "@/types/site_settings";
import { readOnlyBackend } from "@/utils/backend";

export async function getSiteSettings(): Promise<SiteSettings> {
    const res = await readOnlyBackend.get("/site-setting", {
        params: {
            populate: {
                contact: true,
                header_links: true,
                site_identity: {
                    populate: {
                        identity: {
                            populate: ["logo"]
                        }
                    }
                },
                footer_links: {
                    populate: ["links"]
                }
            }
        }
    });
    const data = res.data.data;

    return data;
}

