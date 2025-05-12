'use client';
import React from 'react'
import { getTranslations } from 'next-intl/server'
import { FaRocket, FaClock, FaCommentDots } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function WhyUs() {
    const t = useTranslations("whyUs");

    return (
        <motion.div
            className='flex flex-col gap-14 container mx-auto py-16 px-4 md:px-8'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* the title + subtitle */}
            <motion.div
                variants={fadeInUp}
                className="relative text-center mb-8"
            >
                <div className="flex items-center justify-center">
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                    <h2 className="px-4 text-2xl md:text-3xl font-extrabold text-purple-700">
                        {t("title")}
                    </h2>
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                    {t("subtitle") ?? ''}
                </p>
            </motion.div>

            {/* cards */}
            <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* Card 1 */}
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-2xl shadow-sm">
                        <FaRocket />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-lg font-semibold text-gray-700">{t("experience")}</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-sm">
                        <FaClock />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-lg font-semibold text-gray-700">{t("fastDelivery")}</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-2xl shadow-sm">
                        <FaCommentDots />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-lg font-semibold text-gray-700">{t("directContact")}</p>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default WhyUs
