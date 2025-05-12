'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

function ContactForm() {
    const t = useTranslations('contact');

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
                type="text"
                name="name"
                placeholder={t('name')}
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
            />
            <input
                type="email"
                name="email"
                placeholder={t('your_email')}
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder={t('your_phone')}
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
                name="message"
                placeholder={t('message')}
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
            ></textarea>
            <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition cursor-pointer"
            >
                {t('send')}
            </button>
        </form>
    );
}

export default ContactForm;
