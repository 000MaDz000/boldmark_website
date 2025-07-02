// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/fetchers/getPosts';
import { notFound } from 'next/navigation';
import ClientImage from '@/components/ui/ClientImage';
import { format } from 'date-fns';
import React from 'react';
import { getTranslations } from 'next-intl/server';

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params: paramsPromise }: PostPageProps) {
    const t = await getTranslations();
    const params = await paramsPromise;
    const post = await getPostBySlug(params.slug);

    if (!post) return notFound();

    return (
        <article className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

            <p className="text-sm text-gray-500 mb-6">
                {t("published at", { date: format(new Date(post.publishedAt), 'yyyy, MM, dd') })}
            </p>

            <ClientImage
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-72 object-cover rounded-lg mb-8"
            />

            <div
                className="prose prose-purple max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
