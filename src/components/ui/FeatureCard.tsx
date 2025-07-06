'use client';
import type { Feature } from "@/types/Feature"
import ClientImage from "./ClientImage"
import { cn } from "@/utils/cn"
import type { Picture } from "@/types/picture"
import { motion } from 'framer-motion';

type Props = {
    feature: Feature
    variant?: "default" | "card" | "icon-card"
    index: number
}

const slideVariants = {
    hidden: (isEven: boolean) => ({
        opacity: 0,
        x: isEven ? -100 : 100,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
    exit: (isEven: boolean) => ({
        opacity: 0,
        x: isEven ? -100 : 100,
        transition: {
            duration: 0.4,
            ease: 'easeIn',
        },
    }),
};

const FeatureCard = ({ feature, variant = "default", index }: Props) => {
    const hasImage = !!feature.image;
    const isEven = index % 2 === 0;

    return (
        <motion.div
            custom={isEven}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
                "rounded-2xl flex flex-col items-center gap-4 text-center transition-all duration-300 relative",
                variant === "default" && "p-6",
                variant === "card" && [
                    "bg-white border border-gray-100 shadow-lg hover:shadow-xl",
                    "max-w-sm mx-auto overflow-hidden",
                    "hover:-translate-y-1 hover:border-gray-200",
                    "group cursor-pointer",
                ],
            )}
        >
            {hasImage && (
                <div
                    className={cn(
                        "relative",
                        variant === "default" && "w-20 h-20 rounded-full overflow-hidden shadow-secondary-muted shadow",
                        variant === "card" && [
                            "w-full h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden",
                            "group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300",
                        ],
                        variant === "icon-card" && [
                            "w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white",
                            "-mt-12 mb-2 z-10",
                            "absolute left-1/2 -translate-x-1/2 -translate-y-3/4",
                        ]
                    )}
                >
                    <ClientImage
                        src={feature.image as Picture}
                        alt={(feature.image as Picture).alternativeText || feature.title}
                        className={cn(
                            "object-cover",
                            variant === "default" && "w-full h-full",
                            variant === "card" && "w-full h-52 group-hover:scale-105 transition-transform duration-300",
                            variant === "icon-card" && "w-full h-full"
                        )}
                    />
                </div>
            )}


            <div className={cn(variant === "card" && "p-6 pt-4 flex flex-col gap-3 flex-1")}>
                <h3
                    className={cn(
                        "font-semibold transition-colors duration-300",
                        variant === "default" && "text-lg text-heading",
                        variant === "card" && ["text-xl text-gray-900 leading-tight"],
                    )}
                >
                    {feature.title}
                </h3>

                <p
                    className={cn(
                        "text-text-muted leading-relaxed",
                        variant === "default" && "text-sm",
                        variant === "card" && "text-gray-600 text-sm flex-1",
                    )}
                >
                    {feature.description}
                </p>

                {variant === "card" && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                        <span className="text-xs font-medium uppercase tracking-wide transition-colors duration-300">
                            {/* Learn More → */}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default FeatureCard;
