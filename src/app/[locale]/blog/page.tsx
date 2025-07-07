import React from 'react';
import BlogPostCard from '@/components/ui/BlogPostCard';
import { getPosts } from '@/fetchers/getPosts';
import { getBlogPageData } from '@/fetchers/getBlogPage';
import Pagination from '@/components/ui/Pagination';

export default async function BlogPage({
    searchParams: searchParamsPromise,
}: {
    searchParams: Promise<{ page?: number }>;
}) {
    const searchParams = await searchParamsPromise;
    const posts = await getPosts({ page: searchParams.page });
    const pagedata = await getBlogPageData().catch(() => null);

    return (
        <section className="mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center mt-7">
                <h1 className="text-3xl font-semibold text-heading">
                    {pagedata?.title}
                </h1>
                <p className="mt-3 text-text-muted">
                    {pagedata?.subtitle}
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.data.map((post) => (
                    <BlogPostCard
                        key={post.id}
                        post={post}
                        publisherPicture={pagedata?.blog_logo}
                    />
                ))}
            </div>

            <Pagination meta={posts.meta.pagination} />
        </section>
    );
}
