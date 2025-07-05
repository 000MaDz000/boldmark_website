'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CustomerReviews } from '@/types/cms_components/sections/customer_reviews';
import ClientImage from '../ui/ClientImage';
import Slider from '@/components/ui/Slider';
import { Settings } from 'react-slick';
import { FaStar, FaRegStar } from 'react-icons/fa';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Reviews({ data }: { data: CustomerReviews }) {
    const sliderSettings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1.3,
                },
            },
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 1280, // Desktop
                settings: {
                    slidesToShow: 3.3,
                },
            },
        ],
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 md:px-8 container mx-auto"
            id="reviews"
        >
            <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
                    {data.title}
                </h2>
                <p className="text-gray-500 mt-2">{data.subtitle}</p>
            </motion.div>

            <div className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Slider settings={sliderSettings}>
                    {data.reviews.map(review => {
                        const rate = review.customer_review.rate ?? 0;
                        const fullStars = Math.floor(rate);
                        const emptyStars = 5 - fullStars;

                        return (
                            <motion.div
                                key={review.id}
                                variants={fadeInUp}
                                className="bg-white shadow-xl rounded-lg p-8 text-center flex flex-col items-center gap-4 mx-4"
                            >
                                <ClientImage
                                    src={review.customer_review.customer_picture}
                                    alt={review.customer_review.customer_name}
                                    className="w-20 h-20 rounded-full object-cover mx-auto"
                                />
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {review.customer_review.customer_name}
                                </p>

                                {/* Stars */}
                                <div className="flex gap-1 text-yellow-400 justify-center">
                                    {[...Array(fullStars)].map((_, i) => (
                                        <FaStar key={`full-${i}`} />
                                    ))}
                                    {[...Array(emptyStars)].map((_, i) => (
                                        <FaRegStar key={`empty-${i}`} />
                                    ))}
                                </div>

                                <span className="font-semibold text-purple-600 mt-2">
                                    {review.customer_review.text}
                                </span>
                            </motion.div>
                        );
                    })}
                </Slider>
            </div>
        </motion.div>
    );
}

export default Reviews;
