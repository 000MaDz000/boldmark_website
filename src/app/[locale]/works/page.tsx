import WorksSection from '@/components/sections/WorksSection'
import Pagination from '@/components/ui/Pagination';
import { getProjects } from '@/fetchers/getProjects'
import { getWorksPageData } from '@/fetchers/getWorkspage';
import React from 'react'

async function WorksPage({ searchParams: searchParamsPromise }: { searchParams: Promise<{ page?: number }> }) {
    const searchParams = await searchParamsPromise;
    const projects = await getProjects({ page: searchParams.page });
    const pagedata = await getWorksPageData();

    return (
        <div className='flex flex-col gap-14 grow'>
            <WorksSection projects={projects.data} pagedata={pagedata} />
            <Pagination meta={projects.meta.pagination} />
        </div>
    )
}

export default WorksPage