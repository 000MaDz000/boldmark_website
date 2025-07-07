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

    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setResult(null);

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('message', form.message);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                setResult({ success: true });
                setForm({ name: '', email: '', phone: '', message: '' });
            } else {
                setResult({ success: false, error: data.error });
            }
        } catch (err) {
            setResult({ success: false, error: 'server_error' });
        }

        setSubmitting(false);
    };

    const errorMessages: Record<string, string> = {
        invalid_name: t('errors.invalid_name'),
        invalid_email: t('errors.invalid_email'),
        invalid_message: t('errors.invalid_message'),
        submission_failed: t('errors.submission_failed'),
        server_error: t('errors.server_error'),
    };

    return (
        <div className="space-y-4 w-full">
            {result?.success && (
                <p className="text-green-600">{t('success')}</p>
            )}
            {result?.success === false && result.error && (
                <p className="text-red-600">{errorMessages[result.error] || t('errors.unknown')}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <input
                    type="text"
                    name="name"
                    placeholder={t('name')}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={result?.success}
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t('your_email')}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={result?.success}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder={t('your_phone')}
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={result?.success}
                />
                <textarea
                    name="message"
                    placeholder={t('message')}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={result?.success}
                ></textarea>
                <button
                    type="submit"
                    disabled={submitting || result?.success}
                    className="w-full bg-primary text-on-primary py-2 rounded hover:bg-primary-hover transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {submitting ? t('sending') : t('send')}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
