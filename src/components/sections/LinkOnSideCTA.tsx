'use client';

import { cn } from '@/utils/cn';
import ClientLink from '@/components/ui/ClientLink';
import ClientImage from '@/components/ui/ClientImage';
import { LinkOnSideCTA as IType } from '@/types/cms_components/sections/link_on_side_cta';
import Markdown from 'react-markdown';

interface LinkOnSideCTAProps {
    data: IType;
    className?: string;
    contentClassName?: string;
}

export default function LinkOnSideCTA({
    data,
    className,
    contentClassName,
}: LinkOnSideCTAProps) {
    const { title, text, link, background_image } = data;

    return (
        <section className={cn('relative py-14 overflow-hidden', className)}>
            {/* background */}
            <div className="absolute inset-0 z-0">
                <ClientImage
                    src={background_image}
                    alt={background_image?.alternativeText || ''}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-overlay" />
            </div>

            {/* content */}
            <div
                className={cn(
                    'relative z-10 max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8',
                    contentClassName
                )}
            >
                <div className="max-w-xl">
                    <h3 className="text-on-surface text-3xl font-semibold sm:text-4xl mb-3">
                        {title}
                    </h3>
                    <div className="prose prose-invert text-on-surface-soft">
                        <Markdown>{text}</Markdown>
                    </div>
                </div>

                {link && (
                    <div className="flex-none mt-6 md:mt-0">
                        <ClientLink
                            href={link}
                            className="bg-primary hover:bg-primary-hover transition-colors mt-7 px-6 py-3 text-on-primary rounded-md min-w-32 text-center block text-sm font-semibold"
                        >
                            {link.link_text}
                        </ClientLink>
                    </div>
                )}
            </div>
        </section>
    );
}
