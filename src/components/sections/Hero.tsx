'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeroSection } from '@/types/cms_components/sections/hero_section';
import ClientVideoSrc from '../ui/ClientVideo';
import ClientLink from '../ui/ClientLink';

const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero({ heroSectionData }: { heroSectionData: HeroSection }) {
    const t = useTranslations('Hero');

    return (
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <ClientVideoSrc src={heroSectionData.background_video} />
                {t("Your browser does not support the video tag")}
            </video>

            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-overlay z-0" />

            {/* content */}
            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-between gap-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeDown}
                    className="text-center text-on-surface w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-on-surface">{heroSectionData.title}</h2>
                    <h3 className="text-lg md:text-2xl mt-4 text-on-surface-muted">{heroSectionData.subtitle}</h3>
                </motion.div>

                <div className="flex gap-3">
                    {heroSectionData.filled_link && (
                        <ClientLink
                            href={heroSectionData.filled_link}
                            className="bg-primary hover:bg-primary-hover transition-colors mt-7 px-6 py-3 text-on-surface rounded-md text-sm font-semibold"
                        >
                            {heroSectionData.filled_link.link_text}
                        </ClientLink>
                    )}

                    {heroSectionData.regular_link && (
                        <ClientLink
                            href={heroSectionData.regular_link}
                            className="border-2 border-primary hover:bg-primary-hover transition-colors mt-7 px-6 py-3 text-on-surface rounded-md text-sm font-semibold"
                        >
                            {heroSectionData.regular_link.link_text}
                        </ClientLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;
