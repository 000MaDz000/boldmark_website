// import CustomersCount from "@/components/sections/CustomersCount";
import Contact from "@/components/sections/Contact";
import Counts from "@/components/sections/Counts";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
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

            <Counts />

            <div className="mt-16">
                <WhyUs />
            </div>

            <div className="mt-16">
                <Contact />
            </div>
        </div>
    );
}
