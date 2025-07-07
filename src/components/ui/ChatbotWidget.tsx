"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaCommentDots, FaXmark, FaPaperPlane, FaSpinner } from "react-icons/fa6"
import type { AiChatbotOptions } from "@/types/ai_chatbot"
import { useTranslations } from "next-intl"
import { sendMessageToChatbot } from "@/actions/chatbot/sendMessage"
import ReactMarkdown from "react-markdown"

interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
}

interface ChatbotWidgetProps {
    options?: AiChatbotOptions | null
}

export default function ChatbotWidget({ options }: ChatbotWidgetProps) {
    const t = useTranslations()
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Auto-scroll to bottom when new messages are added
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    useEffect(() => {
        // Add welcome message when chat opens for the first time
        if (isOpen && messages.length === 0) {
            const welcomeMessage: Message = {
                id: "welcome",
                content: t("chatbot.welcome"),
                isUser: false,
                timestamp: new Date(),
            }
            setMessages([welcomeMessage])
        }
    }, [isOpen, messages.length, t])

    const handleSendMessage = async (messageContent: string) => {
        if (!messageContent.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content: messageContent,
            isUser: true,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)

        try {
            const response = await sendMessageToChatbot(messageContent)

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response,
                isUser: false,
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: t("chatbot.error"),
                isUser: false,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const handleSuggestedQuestion = (question: string) => {
        handleSendMessage(question)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleSendMessage(inputValue)
    }

    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-on-primary)] border-none cursor-pointer flex items-center justify-center"
                    aria-label={t("chatbot.open")}
                >
                    <FaCommentDots className="text-xl" />
                </button>
            </div>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-[var(--color-overlay)]" onClick={() => setIsOpen(false)} />

                    {/* Chat Window */}
                    <div className="relative w-full max-w-md h-[600px] max-h-[80vh] flex flex-col bg-[var(--color-surface-light)] border border-[var(--color-border)] shadow-2xl rounded-lg overflow-y-auto">
                        {/* Header */}
                        <div className="flex flex-row items-center justify-between p-4 bg-[var(--color-primary)] text-[var(--color-on-primary)]">
                            <h3 className="text-lg font-semibold m-0">{t("chatbot.title")}</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 p-0 bg-transparent hover:bg-[var(--color-primary-hover)] text-[var(--color-on-primary)] border-none cursor-pointer rounded flex items-center justify-center transition-colors"
                            >
                                <FaXmark className="text-sm" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Messages Area */}
                            <div className="flex-1 overflow-auto p-4">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                                            <div
                                                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${message.isUser
                                                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                                                    : "bg-[var(--color-surface-soft)] text-[var(--color-text)] border border-[var(--color-border)]"
                                                    }`}
                                            >
                                                {message.isUser ? (
                                                    message.content
                                                ) : (
                                                    <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                                                        <ReactMarkdown
                                                            components={{
                                                                p: ({ children }) => (
                                                                    <p className="mb-2 last:mb-0 text-[var(--color-text)]">{children}</p>
                                                                ),
                                                                ul: ({ children }) => (
                                                                    <ul className="mb-2 last:mb-0 pl-4 list-disc text-[var(--color-text)]">{children}</ul>
                                                                ),
                                                                ol: ({ children }) => (
                                                                    <ol className="mb-2 last:mb-0 pl-4 list-decimal text-[var(--color-text)]">
                                                                        {children}
                                                                    </ol>
                                                                ),
                                                                li: ({ children }) => <li className="mb-1 text-[var(--color-text)]">{children}</li>,
                                                                strong: ({ children }) => (
                                                                    <strong className="font-semibold text-[var(--color-text)]">{children}</strong>
                                                                ),
                                                                em: ({ children }) => <em className="italic text-[var(--color-text)]">{children}</em>,
                                                                code: ({ children }) => (
                                                                    <code className="bg-[var(--color-surface-hover)] text-[var(--color-text)] px-1 py-0.5 rounded text-xs">
                                                                        {children}
                                                                    </code>
                                                                ),
                                                                pre: ({ children }) => (
                                                                    <pre className="bg-[var(--color-surface-hover)] text-[var(--color-text)] p-2 rounded text-xs overflow-x-auto">
                                                                        {children}
                                                                    </pre>
                                                                ),
                                                                h1: ({ children }) => (
                                                                    <h1 className="text-lg font-bold mb-2 text-[var(--color-text)]">{children}</h1>
                                                                ),
                                                                h2: ({ children }) => (
                                                                    <h2 className="text-base font-bold mb-2 text-[var(--color-text)]">{children}</h2>
                                                                ),
                                                                h3: ({ children }) => (
                                                                    <h3 className="text-sm font-bold mb-1 text-[var(--color-text)]">{children}</h3>
                                                                ),
                                                                blockquote: ({ children }) => (
                                                                    <blockquote className="border-l-2 border-[var(--color-border)] pl-2 italic text-[var(--color-text-muted)]">
                                                                        {children}
                                                                    </blockquote>
                                                                ),
                                                                a: ({ children, href }) => (
                                                                    <a
                                                                        href={href}
                                                                        className="text-[var(--color-primary)] hover:underline"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        {children}
                                                                    </a>
                                                                ),
                                                            }}
                                                        >
                                                            {message.content}
                                                        </ReactMarkdown>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-[var(--color-surface-soft)] text-[var(--color-text)] rounded-lg px-3 py-2 border border-[var(--color-border)]">
                                                <FaSpinner className="text-sm animate-spin" />
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Suggested Questions */}
                            {options?.suggested_questions && messages.length <= 1 && (
                                <div className="p-4 border-t border-[var(--color-border)]">
                                    <p className="text-sm text-[var(--color-text-muted)] mb-2 m-0">{t("chatbot.suggested_questions")}</p>
                                    <div className="space-y-2">
                                        {options.suggested_questions.map((suggestion) => (
                                            <button
                                                key={suggestion.id}
                                                onClick={() => handleSuggestedQuestion(suggestion.question)}
                                                disabled={isLoading}
                                                className="w-full text-left py-2 px-3 text-sm border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text)] bg-transparent rounded cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {suggestion.question}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input Area */}
                            <div className="p-4 border-t border-[var(--color-border)]">
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder={t("chatbot.placeholder")}
                                        disabled={isLoading}
                                        className="flex-1 px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isLoading}
                                        className="px-3 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-on-primary)] border-none rounded cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        <FaPaperPlane className="text-sm" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
