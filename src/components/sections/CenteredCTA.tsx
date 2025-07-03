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
                'relative py-20 px-4 overflow-hidden bg-slate-900 text-white',
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
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            )}

            {/* Content */}
            <div className={cn(
                'relative z-10 max-w-screen-lg mx-auto text-center',
                contentClassName
            )}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

                {text && (
                    <div className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto prose prose-invert">
                        <Markdown>{text}</Markdown>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {filled_link && (
                        <ClientLink
                            href={filled_link}
                            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300"
                        >
                            {filled_link.link_text}
                        </ClientLink>
                    )}
                    {regular_link && (
                        <ClientLink
                            href={regular_link}
                            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                        >
                            {regular_link.link_text}
                        </ClientLink>
                    )}
                </div>
            </div>
        </section>
    );
}
