import { ContactData } from '@/types/cms_components/types/contact_data'
import Link from 'next/link'
import React from 'react'
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaXTwitter,
    FaPhone,
} from 'react-icons/fa6';

function SocialLinks({ contact }: { contact: ContactData }) {
    return (
        <div className="mt-6 flex gap-4 text-xl text-gray-500">
            {contact.facebook && (
                <Link
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1877F2] transition-colors"
                >
                    <FaFacebook />
                </Link>
            )}
            {contact.linkedin && (
                <Link
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] transition-colors"
                >
                    <FaLinkedin />
                </Link>
            )}
            {contact.instagram && (
                <Link
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E1306C] transition-colors"
                >
                    <FaInstagram />
                </Link>
            )}
            {contact.x && (
                <Link
                    href={contact.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                >
                    <FaXTwitter />
                </Link>
            )}
            {contact.whatsapp_number && (
                <Link
                    href={`https://wa.me/${contact.whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                >
                    <FaWhatsapp />
                </Link>
            )}
            {contact.phone_number && (
                <Link
                    href={`tel:${contact.phone_number}`}
                    className="hover:text-[#3B82F6] transition-colors"
                >
                    <FaPhone />
                </Link>
            )}
        </div>
    )
}

export default SocialLinks