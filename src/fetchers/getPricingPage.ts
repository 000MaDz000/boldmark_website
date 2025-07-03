'use server';
import { PricingPageData } from "@/types/pricing";
import { readOnlyBackend } from "@/utils/backend";

export async function getPricingPageData(): Promise<PricingPageData> {
    const res = await readOnlyBackend.get("/pricing-page", {
        params: {
            populate: {
                plans: {
                    populate: ["features", "deliverables"]
                },
                cta: {
                    populate: ["background_image", "filled_link", "regular_link"]
                }
            }
        }
    });
    const data = res.data.data;

    return data;
}