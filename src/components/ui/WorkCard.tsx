'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import ClientImage from './ClientImage';
import Link from 'next/link';

interface WorkCardProps {
    data: Project;
}

const WorkCard: React.FC<WorkCardProps> = ({ data: project }) => {
    const cardContent = (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col aspect-square cursor-pointer"
        >
            <ClientImage
                src={project.thumbnail}
                alt={project.title}
                className="w-full object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h4 className="text-xl font-bold text-purple-700">{project.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
            </div>
        </motion.div>
    );

    const custom_link = project.custom_link;

    return custom_link ? (
        <Link href={custom_link} target="_blank" rel="noopener noreferrer">
            {cardContent}
        </Link>
    ) : (
        cardContent
    );
};

export default WorkCard;
