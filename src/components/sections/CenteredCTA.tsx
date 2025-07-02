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
                'relative py-20 px-4 text-white overflow-hidden',
                className
            )}
        >
            {/* background */}
            <div className="absolute inset-0 z-0">
                <ClientImage
                    src={background_image}
                    alt={background_image.alternativeText || ''}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* content */}
            <div className={cn('relative z-10 max-w-screen-xl mx-auto text-center', contentClassName)}>
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
                <div className="mt-4 max-w-2xl mx-auto prose">
                    <Markdown >
                        {text}
                    </Markdown>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    {filled_link && (
                        <ClientLink
                            href={filled_link}
                            className='bg-sky-800/95 hover:bg-sky-700 transition-colors mt-7 p-4 text-white rounded-md'
                        >
                            {filled_link.link_text}
                        </ClientLink>
                    )}
                    {regular_link && (
                        <ClientLink
                            href={regular_link}
                            className='border-2 border-sky-800 hover:bg-sky-700 transition-colors mt-7 p-4 text-white rounded-md'
                        >
                            {regular_link.link_text}
                        </ClientLink>
                    )}
                </div>
            </div>
        </section>
    );
}
