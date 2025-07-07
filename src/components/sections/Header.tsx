'use client';

import React, { useState } from 'react';
import Logo from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SiteSettings } from '@/types/site_settings';
import ClientLink from '../ui/ClientLink';
import ThemeSwitcher from '../ui/ThemeSwitcher';

function Header({ siteSettings }: { siteSettings: SiteSettings }) {
    const [isOpen, setIsOpen] = useState(false);

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
            className="w-full px-6 md:px-16 py-4 shadow-sm bg-surface-light sticky top-0 z-50"
            initial="hidden"
            animate="show"
            variants={fadeDown}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className='flex gap-3 items-center'>
                    <Logo siteSettings={siteSettings} />
                    <div className='flex items-center' dir="ltr">
                        <ThemeSwitcher variant="icon" className='cursor-pointer' />
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-heading font-medium">
                    {siteSettings.header_links?.map((link) => (
                        <ClientLink
                            key={link.id}
                            href={link}
                            className="hover:text-accent transition"
                        >
                            {link.link_text}
                        </ClientLink>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-text-subtle cursor-pointer">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="md:hidden mt-3 flex flex-col gap-4 bg-surface-light shadow px-4 py-3 rounded-md"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        variants={mobileMenuAnim}
                    >
                        {siteSettings.header_links?.map((link) => (
                            <ClientLink
                                key={link.id}
                                href={link}
                                onClick={() => setIsOpen(false)}
                                className="text-text-subtle hover:text-accent transition"
                            >
                                {link.link_text}
                            </ClientLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
