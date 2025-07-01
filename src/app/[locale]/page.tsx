// import CustomersCount from "@/components/sections/CustomersCount";
import CenteredCTA from "@/components/sections/CenteredCTA";
import Contact from "@/components/sections/Contact";
import Counts from "@/components/sections/Counts";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PortfolioOverview from "@/components/sections/PortfolioOverview";
import Reviews from "@/components/sections/Reviews";
import WhatYouGet from "@/components/sections/WhatYouGet";
import WhyUs from "@/components/sections/WhyUs";
import { getHomePageData } from "@/fetchers/getHomepage";
import getFullMediaURL from "@/server_helpers/getFullMediaURL";
import { CMS_COMPONENT_ID } from "@/types/cms_components";
import { CenteredCta } from "@/types/cms_components/sections/centered_cta";
import { HeroSection } from "@/types/cms_components/sections/hero_section";

export default async function Home() {
    const data = await getHomePageData();

    return (
        <div className="my-14 space-y-16">
            <Header />
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

            <Footer />
        </div>
    );
}
