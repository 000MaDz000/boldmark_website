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

    const hasImage = !!side_image;

    return (
        <section
            className={cn(
                'flex flex-col-reverse gap-10 md:flex-row px-4 py-12 max-w-screen-xl mx-auto',
                hasImage ? 'items-center' : 'items-center justify-center',
                className
            )}
        >
            <div
                className={cn(
                    'space-y-8',
                    hasImage ? 'flex-1 max-w-2xl' : 'w-full max-w-3xl text-center',
                    contentClassName
                )}
            >
                <div className={cn('space-y-3', hasImage ? 'md:text-start text-center' : 'text-center')}>
                    <h2 className="text-3xl text-heading font-semibold">{title}</h2>
                    {text && (
                        <div className="prose text-text-muted prose-headings:text-heading prose-p:text-text-muted">
                            <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    {questions.map((item, idx) => (
                        <FaqsCard key={idx} faqsList={{ q: item.question, a: item.answer }} />
                    ))}
                </div>
            </div>

            {hasImage && (
                <div className="flex-1 max-w-xl w-full">
                    <ClientImage
                        src={side_image}
                        alt={side_image.alternativeText || 'FAQ Illustration'}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>
            )}
        </section>
    );
}
