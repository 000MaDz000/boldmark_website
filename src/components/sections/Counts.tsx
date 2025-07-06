'use client';

import React from 'react';
import CountUp from 'react-countup';
import { cn } from '@/utils/cn';
import ClientImage from '@/components/ui/ClientImage';
import { CredibilityIndecators } from '@/types/cms_components/sections/credibility_indicators';
import { getImgURL } from '@/helpers/getImgURL';

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
    const bgURL = getImgURL(background_image);

    return (
        <div
            className={cn(
                'relative min-h-[20rem] lg:h-[32rem] py-12 px-4 flex items-center justify-center overflow-hidden',
                className
            )}
            style={{
                backgroundImage: `url("${bgURL}")`,
                backgroundSize: "cover"
            }}
        >
            {/* background image overlay */}
            <div className="absolute inset-0 bg-overlay z-0" />

            {/* content */}
            <div
                className={cn(
                    'container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 text-center text-on-surface-muted place-items-center w-full z-10 relative',
                    contentClassName
                )}
            >
                {indicators.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-4xl md:text-5xl font-bold text-on-surface">
                            +<CountUp end={parseInt(item.count)} duration={2} />
                        </h3>
                        <p className="mt-2 text-lg md:text-xl">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
