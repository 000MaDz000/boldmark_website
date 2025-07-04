// import CustomersCount from "@/components/sections/CustomersCount";
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

export default function Home() {
    return (
        <div className="my-14">
            <Header />
            <div className='bg-gradient-to-tr from-slate-200 to-slate-400'>
                <Hero />
            </div>

            {/* <CustomersCount /> */}
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
            </div>

            <Footer />
        </div>
    );
}
