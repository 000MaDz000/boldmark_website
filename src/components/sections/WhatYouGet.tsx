'use client';

import React from 'react';
import { FaBook, FaBrain, FaBrush, FaFile, FaGopuram } from 'react-icons/fa6';
import Feature from '../ui/Feature';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import DefaultSection from '../ui/DefaultSection';
import WhyusPic from "@/images/whyuspic.jpg";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function WhatYouGet() {
    const t = useTranslations("WhatYouGet");

    return (
        <DefaultSection title={t("title")} className='bg-gradient-to-l from gray-200 to-gray-200 via-gray-300 my-7 md:items-center'>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
            >
                {/* Features Grid */}
                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <motion.div variants={featureItem} className="sm:col-span-2">
                        <Feature icon={<FaBrain className="text-indigo-500 w-5 h-5" />} title={t("5")} />
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div variants={fadeInUp} className="flex justify-center">
                    <Image
                        src={WhyusPic}
                        width={500}
                        height={500}
                        alt="Decorative Circles"
                        className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                </motion.div>
            </motion.div>
        </DefaultSection>
    );
}

export default WhatYouGet;
