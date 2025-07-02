'use server';

import { CMS_COMPONENT_ID } from "@/types/cms_components";
import { HomePageData } from "@/types/homepage";
import { readOnlyBackend } from "@/utils/backend";

export async function getHomePageData(): Promise<HomePageData> {
    const res = await readOnlyBackend.get("/homepage", {
        params: {
            populate: {
                content: {
                    on: {
                        [CMS_COMPONENT_ID.CENTERED_CTA]: {
                            populate: ['regular_link', "filled_link", "background_image"]
                        },
                        [CMS_COMPONENT_ID.CREDIBILITY_INDICATORS]: {
                            populate: ["background_image", "indicators"]
                        },
                        [CMS_COMPONENT_ID.FREQUENTLY_ASKED_QUESTIONS_CTA]: {
                            populate: ["questions", "side_image"]
                        },
                        [CMS_COMPONENT_ID.HERO_SECTION]: {
                            populate: ['regular_link', "filled_link", "background_video"]
                        },
                        [CMS_COMPONENT_ID.LINK_ON_SIDE_CTA]: {
                            populate: ["link", "background_image"]
                        },
                        [CMS_COMPONENT_ID.PORTFOLIO_OVERVIEW]: {
                            populate: {
                                items: {
                                    populate: {
                                        project: {
                                            populate: ["thumbnail"]
                                        }
                                    }
                                }
                            }
                        },
                        [CMS_COMPONENT_ID.CUSTOMER_REVIEWS]: {
                            populate: {
                                reviews: {
                                    populate: {
                                        customer_review: {
                                            populate: ["customer_picture"]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    const data = res.data.data;

    return data;
}