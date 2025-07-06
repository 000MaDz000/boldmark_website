"use client"

import { useState, useEffect } from "react"
import { cn } from "@/utils/cn";
import { FaMoon, FaSun } from "react-icons/fa6";

interface ThemeSwitcherProps {
    className?: string
    size?: "sm" | "md" | "lg"
    variant?: "button" | "toggle" | "icon"
}

const ThemeSwitcher = ({ className, size = "md", variant = "button" }: ThemeSwitcherProps) => {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Check initial theme and set mounted state
    useEffect(() => {
        const isDarkMode = document.body.classList.contains("dark")
        setIsDark(isDarkMode)
        setMounted(true)
    }, [])

    // Toggle theme function
    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        if (newIsDark) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }

        // Optional: Save preference to localStorage
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div
                className={cn(
                    "animate-pulse bg-gray-200 rounded-full",
                    size === "sm" && "w-8 h-8",
                    size === "md" && "w-10 h-10",
                    size === "lg" && "w-12 h-12",
                    className,
                )}
            />
        )
    }

    const sizeClasses = {
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
    }

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
    }

    if (variant === "toggle") {
        return (
            <button
                onClick={toggleTheme}
                className={cn(
                    "relative inline-flex items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "bg-gray-200 dark:bg-gray-700",
                    size === "sm" && "h-6 w-11",
                    size === "md" && "h-7 w-12",
                    size === "lg" && "h-8 w-14",
                    className,
                )}
                role="switch"
                aria-checked={isDark}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
                <span
                    className={cn(
                        "inline-block transform rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center",
                        size === "sm" && "h-5 w-5",
                        size === "md" && "h-6 w-6",
                        size === "lg" && "h-7 w-7",
                        isDark ? "translate-x-5" : "translate-x-0.5",
                    )}
                >
                    {isDark ? (
                        <FaMoon size={iconSizes[size] - 8} className="text-gray-700" />
                    ) : (
                        <FaSun size={iconSizes[size] - 8} className="text-yellow-500" />
                    )}
                </span>
            </button>
        )
    }

    if (variant === "icon") {
        return (
            <button
                onClick={toggleTheme}
                className={cn(
                    "rounded-full p-2 transition-all duration-300 hover:scale-110",
                    "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
                    "text-gray-700 dark:text-gray-300",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    className,
                )}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
                {isDark ? (
                    <FaSun size={iconSizes[size]} className="transition-transform duration-300 rotate-0 hover:rotate-12" />
                ) : (
                    <FaMoon size={iconSizes[size]} className="transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )}
            </button>
        )
    }

    // Default button variant
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300",
                "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
                "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100",
                "border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                "shadow-sm hover:shadow-md",
                sizeClasses[size],
                size === "sm" && "px-3 py-1.5",
                size === "md" && "px-4 py-2",
                size === "lg" && "px-5 py-2.5",
                className,
            )}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
            {isDark ? (
                <>
                    <FaSun size={iconSizes[size]} className="transition-transform duration-300" />
                    <span className="hidden sm:inline">Light</span>
                </>
            ) : (
                <>
                    <FaMoon size={iconSizes[size]} className="transition-transform duration-300" />
                    <span className="hidden sm:inline">Dark</span>
                </>
            )}
        </button>
    )
}

export default ThemeSwitcher
