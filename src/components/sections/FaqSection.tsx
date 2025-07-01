'use client';

import React from 'react';
import FaqsCard from '../ui/FaqCard';
import ClientImage from '../ui/ClientImage';
import { FrequentlyAskedQuestions } from '@/types/cms_components/sections/frequently_asked_questions';
import { cn } from '@/utils/cn';
import ReactMarkdown from 'react-markdown';

interface FaqsSectionProps {
    data: FrequentlyAskedQuestions;
    className?: string;
    contentClassName?: string;
}

export default function FaqsSection({
    data,
    className,
    contentClassName,
}: FaqsSectionProps) {
    const { title, text, questions, side_image } = data;

    return (
        <section
            className={cn(
                'flex flex-col-reverse items-center gap-10 md:flex-row px-4 py-12 max-w-screen-xl mx-auto',
                className
            )}
        >

            <div className={cn('flex-1 max-w-2xl space-y-8', contentClassName)}>
                <div className="space-y-3 text-center md:text-start">
                    <h2 className="text-3xl text-gray-800 font-semibold">{title}</h2>
                    {text && (
                        <ReactMarkdown>
                            {text}
                        </ReactMarkdown>
                    )}
                </div>

                <div className="space-y-6">
                    {questions.map((item, idx) => (
                        <FaqsCard key={idx} faqsList={{ q: item.question, a: item.answer }} />
                    ))}
                </div>
            </div>


            <div className="flex-1 max-w-xl w-full">
                <ClientImage
                    src={side_image}
                    alt={side_image.alternativeText || 'FAQ Illustration'}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
