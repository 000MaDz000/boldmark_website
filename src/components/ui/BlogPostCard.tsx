'use client';

import React from 'react';
import { Post } from '@/types/post';
import ClientImage from '@/components/ui/ClientImage';
import Link from 'next/link';
import { format } from 'date-fns';
import { Picture } from '@/types/picture';
import { FaUser } from 'react-icons/fa';

interface BlogPostCardProps {
    post: Post;
    publisherPicture?: Picture | null;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, publisherPicture }) => {
    return (
        <article className="max-w-md mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm">
            <Link href={`/blog/${post.slug}`}>
                <ClientImage
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-md"
                />

                {/* Author section (placeholder since author is not part of Post) */}
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2 gap-3">
                    <div className="flex-none w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        {(publisherPicture || post.publisher_picture) ? (
                            <ClientImage
                                src={(post.publisher_picture || publisherPicture) as any}
                                alt="Author"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <FaUser className="w-full h-full object-cover rounded-full" />
                        )}
                    </div>
                    <div className="ml-3">
                        <span className="block text-gray-900">{post.publisher_name}</span>
                        <span className="block text-gray-400 text-sm">
                            {format(new Date(post.publishedAt), 'yyyy, MM, dd')}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">{post.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{post.description}</p>
                </div>
            </Link>
        </article>
    );
};

export default BlogPostCard;
