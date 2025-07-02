import { CenteredCta } from "./cms_components/sections/centered_cta";
import { CredibilityIndecators } from "./cms_components/sections/credibility_indicators";
import { FrequentlyAskedQuestions } from "./cms_components/sections/frequently_asked_questions";
import { HeroSection } from "./cms_components/sections/hero_section";
import { LinkOnSideCTA } from "./cms_components/sections/link_on_side_cta";
import { CMS_COMPONENT_ID } from "./cms_components";
import { PortfolioOverview } from "./cms_components/sections/portfolio_overview";
import { CustomerReviews } from "./cms_components/sections/customer_reviews";
import { Locale } from "./schema";

export interface HomePageData {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;
    content: ((CenteredCta | CredibilityIndecators | FrequentlyAskedQuestions | HeroSection | LinkOnSideCTA | PortfolioOverview | CustomerReviews) & { __component: CMS_COMPONENT_ID, id: number })[];
}