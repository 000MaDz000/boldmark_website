'use client';

import { useTranslations } from 'next-intl';
import React from 'react'
import CountUp from 'react-countup'

function Counts() {
    const t = useTranslations("Counts");
    const stats = [
        { value: 1200, label: t("happy_clients") },
        { value: 350, label: t("completed_projects") },
        { value: 45, label: t("team_member") },
        { value: 10, label: t("experience_years") },
    ];

    return (
        <div className='bg-[url("/circles_wave.jpg")] bg-cover bg-center min-h-[20rem] lg:h-[32rem] py-12 px-4 flex items-center'>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 text-center text-gray-700 place-items-center w-full'>
                {stats.map((stat, index) => (
                    <div key={index}>
                        <h3 className='text-4xl md:text-5xl font-bold'>
                            +<CountUp end={stat.value} duration={2} />
                        </h3>
                        <p className='mt-2 text-lg md:text-xl'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Counts
