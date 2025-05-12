'use client';

import React from 'react';
import WorkCard from '@/components/ui/WorkCard';
import { useTranslations } from 'next-intl';

function WorksSection() {
    const t = useTranslations('works');

    const projects = [
        {
            image: '/circles_wave2.jpg',
            title: t('project1_title'),
            description: t('project1_desc'),
        },
        {
            image: '/circles_wave.jpg',
            title: t('project2_title'),
            description: t('project2_desc'),
        },
        {
            image: '/bg.png',
            title: t('project3_title'),
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam pariatur sint, laudantium amet, dolores aspernatur ab minus libero odit porro recusandae veniam fugiat ipsum labore autem velit, voluptatem modi?",
        },
    ];

    return (
        <div className="flex flex-col gap-14 container mx-auto py-16 px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center">
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <WorkCard key={idx} {...proj} />
                ))}
            </div>
        </div>
    );
}

export default WorksSection;
