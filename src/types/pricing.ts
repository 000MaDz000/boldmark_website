import { CenteredCta } from "./cms_components/sections/centered_cta";
import { PricingTier } from "./cms_components/types/PricingTier";
import { Locale } from "./schema";


export interface PricingPageData {
    id: number;
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    plans: PricingTier[];
    cta: CenteredCta;

}