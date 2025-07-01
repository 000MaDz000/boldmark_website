import { PortfolioOverview as IPortfolioOverview } from '@/types/cms_components/sections/portfolio_overview'
import React from 'react'
import WorkCard from '../ui/WorkCard'
// import WorkCard from '../ui/WorkCard';

function PortfolioOverview({ data }: { data: IPortfolioOverview }) {

    return (
        <section className='space-y-7 text-center'>
            <h3 className='text-4xl font-semibold'>اعمالنا</h3>
            <div className='grid grid-cols-3 gap-7 container mx-auto' >
                {data.items.map(({ project, id }) => (
                    <WorkCard data={project} key={id} />

                ))}
            </div>
        </section>
    )
}

export default PortfolioOverview