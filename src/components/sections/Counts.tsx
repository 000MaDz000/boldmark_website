'use client';

import React from 'react';
import CountUp from 'react-countup';
import { cn } from '@/utils/cn';
import ClientImage from '@/components/ui/ClientImage';
import { CredibilityIndecators } from '@/types/cms_components/sections/credibility_indicators';

interface CountsProps {
    data: CredibilityIndecators;
    className?: string;
    contentClassName?: string;
}

export default function Counts({
    data,
    className,
    contentClassName,
}: CountsProps) {
    const { background_image, indicators } = data;

    return (
        <div
            className={cn(
                'relative min-h-[20rem] lg:h-[32rem] py-12 px-4 flex items-center justify-center overflow-hidden',
                className
            )}
        >
            {/* background */}
            <ClientImage
                src={background_image}
                alt={background_image.alternativeText || ''}
                className="absolute inset-0 object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* content */}
            <div
                className={cn(
                    'container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 text-center text-gray-200 place-items-center w-full z-10 relative',
                    contentClassName
                )}
            >
                {indicators.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-4xl md:text-5xl font-bold">
                            +<CountUp end={parseInt(item.count)} duration={2} />
                        </h3>
                        <p className="mt-2 text-lg md:text-xl">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
