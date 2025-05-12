'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const reviews = [
    {
        nameKey: 'client1_name',
        reviewKey: 'client1_review',
    },
    {
        nameKey: 'client2_name',
        reviewKey: 'client2_review',
    },
    {
        nameKey: 'client3_name',
        reviewKey: 'client3_review',
    },
];

function Reviews() {
    const t = useTranslations('reviews');

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 md:px-8 container mx-auto"
            id="reviews"
        >
            <motion.div
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
                    {t('title')}
                </h2>
                <p className="text-gray-500 mt-2">{t('subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white shadow-xl rounded-lg p-6 text-center flex flex-col items-center gap-4"
                    >
                        <FaUserCircle className="text-6xl text-purple-400" />
                        <p className="text-gray-700 text-sm leading-relaxed">{t(item.reviewKey)}</p>
                        <span className="font-semibold text-purple-600 mt-2">{t(item.nameKey)}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Reviews;
