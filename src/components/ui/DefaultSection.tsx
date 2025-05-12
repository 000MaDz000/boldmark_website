'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface DefaultSectionProps {
    title: string;
    children: React.ReactNode;
}

function DefaultSection({ title, children }: DefaultSectionProps) {

    return (
        <motion.div
            className="flex flex-col items-center gap-10 py-16 px-4 md:px-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-b from-purple-400 to-purple-200 shadow-md rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h3>
                <div className="w-12 h-12 bg-gradient-to-t from-purple-400 to-purple-200 shadow-md rounded-full"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full ">
                {children}
            </motion.div>
        </motion.div>
    );
}

export default DefaultSection;
