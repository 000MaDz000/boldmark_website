'use client';

import React from 'react';
import Circle from '../ui/Circle';
import { FaBook, FaBrain, FaBrush, FaFile, FaGopuram } from 'react-icons/fa6';
import Feature from '../ui/Feature';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import DefaultSection from '../ui/DefaultSection';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const featureItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function WhatYouGet() {
    const t = useTranslations("WhatYouGet");

    return (
        <DefaultSection title={t("title")}>
            <div className="flex justify-between max-w-6xl mx-auto">
                <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                    <motion.div variants={featureItem}>
                        <Feature icon={<FaBrush className="text-purple-500 w-5 h-5" />} title={t("1")} />
                    </motion.div>
                    <motion.div variants={featureItem}>
                        <Feature icon={<FaBook className="text-blue-500 w-5 h-5" />} title={t("2")} />
                    </motion.div>
                    <motion.div variants={featureItem}>
                        <Feature icon={<FaFile className="text-teal-500 w-5 h-5" />} title={t("3")} />
                    </motion.div>
                    <motion.div variants={featureItem}>
                        <Feature icon={<FaGopuram className="text-emerald-500 w-5 h-5" />} title={t("4")} />
                    </motion.div>
                    <motion.div variants={featureItem}>
                        <Feature icon={<FaBrain className="text-indigo-500 w-5 h-5" />} title={t("5")} />
                    </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex justify-center">
                    <Image
                        src="/circles_wave.jpg"
                        width={500}
                        height={500}
                        alt="Decorative Circles"
                        className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                </motion.div>
            </div>
        </DefaultSection>
    );
}

export default WhatYouGet;
