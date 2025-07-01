import Header from '@/components/sections/Header'
import WorksSection from '@/components/sections/WorksSection'
import { getProjects } from '@/fetchers/getProjects'
import React from 'react'

async function WorksPage() {
    const projects = await getProjects({});

    return (
        <div className='flex flex-col gap-14 my-32'>
            <Header />
            <WorksSection projects={projects} />
        </div>
    )
}

export default WorksPage