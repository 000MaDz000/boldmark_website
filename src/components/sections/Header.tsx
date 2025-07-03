'use client';

import React, { useState } from 'react';
import Logo from '../ui/Logo';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Links } from '@/types/links';
import Link from 'next/link';

function Header() {
    const t = useTranslations('Header');
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: t('pricing'), href: Links.PRICING },
        { label: t('reviews'), href: Links.REVIEWS },
        { label: t('works'), href: Links.PROJECTS },
        { label: t('contact'), href: Links.CONTACT },
        { label: t('blog'), href: Links.BLOG },
    ];

    const fadeDown = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const mobileMenuAnim = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    return (
        <motion.header
            className="w-full px-6 md:px-16 py-4 shadow-sm bg-white fixed top-0 z-50"
            initial="hidden"
            animate="show"
            variants={fadeDown}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-purple-600 transition">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 cursor-pointer">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="md:hidden mt-3 flex flex-col gap-4 bg-white shadow px-4 py-3 rounded-md"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        variants={mobileMenuAnim}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-purple-600 transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
