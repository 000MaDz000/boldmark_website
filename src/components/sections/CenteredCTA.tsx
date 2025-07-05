'use client';

import { CenteredCta } from '@/types/cms_components/sections/centered_cta';
import { cn } from '@/utils/cn';
import ClientLink from '@/components/ui/ClientLink';
import ClientImage from '../ui/ClientImage';
import Markdown from 'react-markdown';

interface CenteredCTAProps {
    data: CenteredCta;
    className?: string;
    contentClassName?: string;
}

export default function CenteredCTA({
    data,
    className,
    contentClassName,
}: CenteredCTAProps) {
    const {
        title,
        text,
        background_image,
        filled_link,
        regular_link,
    } = data;

    return (
        <section
            className={cn(
                'relative py-20 px-4 overflow-hidden bg-surface text-on-surface',
                className
            )}
        >
            {/* Background image */}
            {background_image && (
                <div className="absolute inset-0 z-0">
                    <ClientImage
                        src={background_image}
                        alt={background_image.alternativeText || ''}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-overlay" />
                </div>
            )}

            {/* Content */}
            <div className={cn(
                'relative z-10 max-w-screen-lg mx-auto text-center',
                contentClassName
            )}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-on-surface">
                    {title}
                </h2>

                {text && (
                    <div className="text-on-surface-muted text-lg mb-8 max-w-2xl mx-auto prose prose-invert">
                        <Markdown>{text}</Markdown>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {filled_link && (
                        <ClientLink
                            href={filled_link}
                            className="bg-inverted text-on-inverted hover:bg-inverted-hover px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300"
                        >
                            {filled_link.link_text}
                        </ClientLink>
                    )}
                    {regular_link && (
                        <ClientLink
                            href={regular_link}
                            className="border-2 border-inverted text-inverted hover:bg-inverted hover:text-on-inverted px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                        >
                            {regular_link.link_text}
                        </ClientLink>
                    )}
                </div>
            </div>
        </section>
    );
}
