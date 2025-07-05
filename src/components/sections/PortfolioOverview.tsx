import { PortfolioOverview as IPortfolioOverview } from '@/types/cms_components/sections/portfolio_overview'
import React from 'react'
import WorkCard from '../ui/WorkCard'
import Link from 'next/link'
import { Links } from '@/types/links'
import { getTranslations } from 'next-intl/server'
import Slider from '../ui/Slider'
import { Settings } from 'react-slick'

async function PortfolioOverview({ data }: { data: IPortfolioOverview }) {
    const t = await getTranslations();
    const sliderSettings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1.3,
                },
            },
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 1280, // Desktop
                settings: {
                    slidesToShow: 3.3,
                },
            },
        ],
    };

    return (
        <section className='space-y-7 text-center'>
            <h3 className="relative inline-block text-4xl font-bold text-gray-900 after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto">
                {data.title}
            </h3>

            <div className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Slider settings={sliderSettings}>
                    {data.items.map(({ project, id }) => (
                        <div key={id} className="px-2">
                            <WorkCard data={project} />
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="mt-6">
                <Link
                    href={Links.PROJECTS}
                    className="inline-block px-6 py-2 rounded-full border border-sky-700 text-black hover:bg-sky-700 hover:text-white transition-colors duration-300"
                >
                    {t("View All")}
                </Link>
            </div>

        </section>
    )
}

export default PortfolioOverview
