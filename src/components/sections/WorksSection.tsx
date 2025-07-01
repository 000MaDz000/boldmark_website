'use client';

import React from 'react';
import WorkCard from '@/components/ui/WorkCard';
import { useTranslations } from 'next-intl';
import { Project } from '@/types/project';

function WorksSection({ projects }: { projects: Project[] }) {
    const t = useTranslations('works');

    return (
        <div className="flex flex-col gap-14 container mx-auto py-16 px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center">
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                    <WorkCard key={proj.id} data={proj} />
                ))}
            </div>
        </div>
    );
}

export default WorksSection;
