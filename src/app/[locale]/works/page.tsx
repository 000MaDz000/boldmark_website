import Header from '@/components/sections/Header'
import WorksSection from '@/components/sections/WorksSection'
import React from 'react'

function WorksPage() {
    return (
        <div className='flex flex-col gap-14 my-32'>
            <Header />
            <WorksSection />
        </div>
    )
}

export default WorksPage