// import CustomersCount from "@/components/sections/CustomersCount";
import CenteredCTA from "@/components/sections/CenteredCTA";
import Contact from "@/components/sections/Contact";
import Counts from "@/components/sections/Counts";
import FaqsSection from "@/components/sections/FaqsSection";
import FeaturesSection from "@/components/sections/FeatureSection";
import Hero from "@/components/sections/Hero";
import LinkOnSideCTA from "@/components/sections/LinkOnSideCTA";
import PortfolioOverview from "@/components/sections/PortfolioOverview";
import Reviews from "@/components/sections/Reviews";
import WhatYouGet from "@/components/sections/WhatYouGet";
import WhyUs from "@/components/sections/WhyUs";
import { getHomePageData } from "@/fetchers/getHomepage";
import getFullMediaURL from "@/server_helpers/getFullMediaURL";
import { CMS_COMPONENT_ID } from "@/types/cms_components";
import { CenteredCta } from "@/types/cms_components/sections/centered_cta";
import { CredibilityIndecators } from "@/types/cms_components/sections/credibility_indicators";
import { CustomerReviews } from "@/types/cms_components/sections/customer_reviews";
import { FrequentlyAskedQuestions } from "@/types/cms_components/sections/frequently_asked_questions";
import { HeroSection } from "@/types/cms_components/sections/hero_section";
import { LinkOnSideCTA as ILinkOnSideCTA } from "@/types/cms_components/sections/link_on_side_cta";
import { PortfolioOverview as IPortfolioOverview } from "@/types/cms_components/sections/portfolio_overview";
import { FeaturesSection as IFeaturesSection } from '@/types/cms_components/sections/Features';
import { BlogHightlightSection as IBlogHightlightSection } from "@/types/cms_components/sections/blog_hightlight_section";
import BlogHightlightsSection from "@/components/sections/BlogHightlights";

export default async function Home() {
    const data = await getHomePageData();

    return (
        <div className="my-14 space-y-16 grow">
            {
                data.content.map(item => {
                    switch (item.__component) {
                        case CMS_COMPONENT_ID.HERO_SECTION:
                            const hero = item as HeroSection;
                            hero.background_video.url = getFullMediaURL(hero.background_video.url);
                            return <Hero heroSectionData={hero} key={item.id} />
                        case CMS_COMPONENT_ID.CENTERED_CTA:
                            const centeredCta = item as CenteredCta;
                            return <CenteredCTA data={centeredCta} key={item.id} />

                        case CMS_COMPONENT_ID.LINK_ON_SIDE_CTA:
                            const linkOnSideCTA = item as ILinkOnSideCTA;
                            return <LinkOnSideCTA data={linkOnSideCTA} key={item.id} />

                        case CMS_COMPONENT_ID.CREDIBILITY_INDICATORS:
                            const credibilityIndicators = item as CredibilityIndecators;
                            return <Counts data={credibilityIndicators} key={item.id} />

                        case CMS_COMPONENT_ID.FREQUENTLY_ASKED_QUESTIONS_CTA:
                            const Faqs = item as FrequentlyAskedQuestions;
                            return <FaqsSection data={Faqs} key={item.id} />

                        case CMS_COMPONENT_ID.PORTFOLIO_OVERVIEW:
                            const projects = item as IPortfolioOverview;
                            return <PortfolioOverview data={projects} key={item.id} />
                        case CMS_COMPONENT_ID.CUSTOMER_REVIEWS:
                            const customerReviews = item as CustomerReviews;
                            return <Reviews data={customerReviews} key={item.id} />
                        case CMS_COMPONENT_ID.FEATURES_SECTION:
                            const features = item as IFeaturesSection;
                            return <FeaturesSection key={features.id} section={features} />
                        case CMS_COMPONENT_ID.BLOG_HIGHTLIGHTS:
                            const hightlights = item as IBlogHightlightSection;
                            return <BlogHightlightsSection key={item.id} data={hightlights} />

                    }

                    return null
                })
            }

            {/* <div className='bg-gradient-to-tr from-slate-200 to-slate-400'>
                <Hero />
            </div>

            <div className="mt-16">
                <WhatYouGet />
            </div>

            <div className="my-16">
                <PortfolioOverview />
            </div>

            <Counts />

            <div className="mt-16">
                <WhyUs />
            </div>

            <div className="mt-16">
                <Reviews />
            </div>

            <div className="mt-16">
                <FaqSection />
            </div>

            <div className="mt-16">
                <Contact />
            </div> */}
        </div>
    );
}
