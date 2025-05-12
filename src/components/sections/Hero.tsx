'use client';

import Image from 'next/image';
import GirlDrawerAvatar from '@/images/girl_drawer_avatar.png';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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
        <div className="container mx-auto min-h-[70vh] px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeDown}
                className="text-center md:text-start"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">{t('title')}</h2>
                <h3 className="text-lg md:text-2xl text-gray-600 mt-4">{t('subtitle')}</h3>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
                className="w-60 md:w-80"
            >
                <Image
                    src={GirlDrawerAvatar}
                    width={1024}
                    height={1024}
                    alt="Illustration"
                    className="w-full h-auto rounded-xl shadow-md"
                />
            </motion.div>
        </div>
    );
}

export default Hero;
