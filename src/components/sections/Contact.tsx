'use client';
import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

function Contact() {
    const t = useTranslations('contact');

    const items = [
        { icon: <FaEnvelope className="text-purple-600" />, label: t('email'), value: 'contact@example.com' },
        { icon: <FaPhoneAlt className="text-purple-600" />, label: t('phone'), value: '+966 555 555 555' },
        { icon: <FaMapMarkerAlt className="text-purple-600" />, label: t('address'), value: 'الرياض، المملكة العربية السعودية' },
        { icon: <FaClock className="text-purple-600" />, label: t('hours'), value: 'من الأحد إلى الخميس، 9 صباحًا – 5 مساءً' }
    ];

    return (
        <section className="container mx-auto px-4 py-16" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* cotact informations */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-6">{t('title')}</h2>
                    <div className="space-y-5 text-gray-800">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <p className="font-semibold">{item.label}</p>
                                    <p className="text-sm text-gray-600">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* contact form */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">{t('formTitle')}</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;