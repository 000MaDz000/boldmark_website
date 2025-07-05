'use client';
import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import {
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaPhone,
} from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import { ContactData } from '@/types/cms_components/types/contact_data';
import { FaMarker } from 'react-icons/fa';
import SocialLinks from '../ui/SocialLinks';

interface Props {
    contact: ContactData;
}

function Contact({ contact }: Props) {
    const t = useTranslations('contact');

    const items = [
        contact.email && {
            icon: <FaEnvelope className="text-primary" />,
            label: t('email'),
            value: contact.email,
        },
        contact.phone_number && {
            icon: <FaPhone className="text-primary" />,
            label: t('phone'),
            value: contact.phone_number,
        },
        contact.address && {
            icon: <FaMarker className="text-primary" />,
            label: t('address'),
            value: contact.address,
        },
        contact.work_time && {
            icon: <FaClock className="text-primary" />,
            label: t('hours'),
            value: contact.work_time,
        },
        contact.whatsapp_number && {
            icon: <FaWhatsapp className="text-primary" />,
            label: t('whatsapp'),
            value: contact.whatsapp_number,
        },
    ].filter(Boolean);

    return (
        <section className="container mx-auto px-4 py-16" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact informations */}
                <div>
                    <h2 className="text-2xl font-bold text-heading mb-6">{t('title')}</h2>
                    <div className="space-y-5 text-text">
                        {items.map((item: any, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <p className="font-semibold text-heading">{item.label}</p>
                                    <p className="text-sm text-text-muted">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <SocialLinks contact={contact} />
                </div>

                {/* Contact form */}
                <div>
                    <h2 className="text-2xl font-bold text-heading mb-4">{t('formTitle')}</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
