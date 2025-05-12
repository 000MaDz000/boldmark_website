'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WorkCardProps {
    image: string;
    title: string;
    description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ image, title, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h4 className="text-xl font-bold text-purple-700">{title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
            </div>
        </motion.div>
    );
};

export default WorkCard;
