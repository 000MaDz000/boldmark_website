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
            icon: <FaEnvelope className="text-purple-600" />,
            label: t('email'),
            value: contact.email,
        },
        contact.phone_number && {
            icon: <FaPhone className="text-purple-600" />,
            label: t('phone'),
            value: contact.phone_number,
        },
        contact.address && {
            icon: <FaMarker className="text-purple-600" />,
            label: t('address'),
            value: contact.address,
        },
        contact.work_time && {
            icon: <FaClock className="text-purple-600" />,
            label: t('hours'),
            value: contact.work_time,
        },
        contact.whatsapp_number && {
            icon: <FaWhatsapp className="text-purple-600" />,
            label: t('whatsapp'),
            value: contact.whatsapp_number,
        },
    ].filter(Boolean); // remove undefined's


    return (
        <section className="container mx-auto px-4 py-16" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact informations */}
                <div className=''>
                    <h2 className="text-2xl font-bold text-purple-700 mb-6">{t('title')}</h2>
                    <div className="space-y-5 text-gray-800">
                        {items.map((item: any, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <p className="font-semibold">{item.label}</p>
                                    <p className="text-sm text-gray-600">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <SocialLinks contact={contact} />
                </div>

                {/* Contact form */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">{t('formTitle')}</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
