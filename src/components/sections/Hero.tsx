'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
};

function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* فيديو الخلفية */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/designer.mp4" type="video/mp4" />
                {t("Your browser does not support the video tag")}
            </video>

            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-between gap-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeDown}
                    className="text-center text-white w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">{t('title')}</h2>
                    <h3 className="text-lg md:text-2xl mt-4">{t('subtitle')}</h3>
                </motion.div>

                <div className='flex gap-3'>
                    <Link href="/pricing" className='bg-sky-800/95 hover:bg-sky-700 transition-colors mt-7 p-4 text-white rounded-md'>{t("pricing")}</Link>
                    <Link href="/works" className='border-2 border-sky-800 hover:bg-sky-700 transition-colors mt-7 p-4 text-white rounded-md'>{t("see portfolio")}</Link>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />
        </div>
    );
}

export default Hero;
