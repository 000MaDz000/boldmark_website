'use client';

import React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ResponseMeta } from '@/types/schema';
import { useTranslations } from 'next-intl';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface PaginationProps {
    meta: ResponseMeta;
}

const Pagination: React.FC<PaginationProps> = ({ meta }) => {
    const t = useTranslations("Pagination");
    const { page, pageCount } = meta;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    if (pageCount <= 1) return null;

    const createPageURL = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        return `${pathname}?${params.toString()}`;
    };

    const handlePageChange = (newPage: number) => {
        router.push(createPageURL(newPage));
    };

    // -------- Pagination logic with ellipsis --------
    const getPages = () => {
        const pages: (number | 'dots')[] = [];
        const visiblePages = 2;

        const addRange = (start: number, end: number) => {
            for (let i = start; i <= end; i++) pages.push(i);
        };

        if (pageCount <= 7) {
            addRange(1, pageCount);
        } else {
            addRange(1, 1); // always show first

            if (page > visiblePages + 2) pages.push('dots');

            const start = Math.max(2, page - visiblePages);
            const end = Math.min(pageCount - 1, page + visiblePages);
            addRange(start, end);

            if (page < pageCount - visiblePages - 1) pages.push('dots');

            addRange(pageCount, pageCount); // always show last
        }

        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap" dir={"ltr"}>
            {/* Prev Button */}
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded-md border text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 flex gap-2 cursor-pointer items-center"
            >
                {t("prev")} <BsArrowLeft />
            </button>

            {/* Page Numbers */}
            {getPages().map((p, idx) =>
                p === 'dots' ? (
                    <span key={idx} className="px-2 text-gray-400">
                        ...
                    </span>
                ) : (
                    <button
                        key={p}
                        onClick={() => handlePageChange(p)}
                        className={`px-3 py-1 rounded-md border text-sm cursor-pointer ${p === page
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {p}
                    </button>
                )
            )}

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === pageCount}
                className="px-3 py-1 rounded-md border text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 flex gap-2 cursor-pointer items-center"
            >
                {t("next")} <BsArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
