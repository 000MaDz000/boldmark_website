import { PortfolioOverview as IPortfolioOverview } from '@/types/cms_components/sections/portfolio_overview'
import React from 'react'
import WorkCard from '../ui/WorkCard'
import Link from 'next/link'
import { Links } from '@/types/links'
import { getTranslations } from 'next-intl/server'

async function PortfolioOverview({ data }: { data: IPortfolioOverview }) {
    const t = await getTranslations();
    return (
        <section className='space-y-7 text-center'>
            <h3 className="relative inline-block text-4xl font-bold text-gray-900 after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto">
                {data.title}
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 container mx-auto'>
                {data.items.map(({ project, id }) => (
                    <WorkCard data={project} key={id} />
                ))}
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
