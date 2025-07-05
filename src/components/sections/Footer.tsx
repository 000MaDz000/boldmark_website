import React from 'react'
// import Logo from '../ui/Logo'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import ClientImage from '../ui/ClientImage';
import ClientLink from '../ui/ClientLink';
import Link from 'next/link';
import { SiteSettings } from '@/types/site_settings';

function Footer({ siteSettings: data }: { siteSettings: SiteSettings }) {

    return (
        <footer className="bg-white border-t text-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                    {/* Logo and Description */}
                    <div className="md:max-w-sm">
                        <ClientImage src={data.site_identity.identity.logo} alt={data.site_identity.identity.logo.alternativeText || data.site_identity.identity.name} className='max-w-20' />
                        <p className="mt-4 text-gray-500">
                            {data.site_identity.identity.description}
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {
                            data.footer_links?.map(link => (
                                <div key={link.id}>
                                    <h4 className="text-sm font-semibold mb-4">{link.title}</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {
                                            link.links.map(item => (
                                                <li key={item.id}><ClientLink href={item}>{item.link_text}</ClientLink></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
                    </p>
                    <div className="flex gap-4 text-gray-500">
                        {data.contact?.facebook && (
                            <Link
                                href={data.contact.facebook}
                                className="hover:text-[#1877F2]"
                            >
                                <FaFacebookF />
                            </Link>
                        )}

                        {data.contact?.linkedin && (
                            <Link
                                href={data.contact.linkedin}
                                className="hover:text-[#0A66C2]"
                            >
                                <FaLinkedinIn />
                            </Link>
                        )}

                        {data.contact?.instagram && (
                            <Link
                                href={data.contact.instagram}
                                className="hover:text-[#E1306C]"
                            >
                                <FaInstagram />
                            </Link>
                        )}

                        {data.contact?.x && (
                            <Link
                                href={data.contact.x}
                                className="hover:text-[#000000]"
                            >
                                <FaXTwitter />
                            </Link>
                        )}

                        {data.contact?.whatsapp_number && (
                            <Link
                                href={`https://wa.me/${data.contact.whatsapp_number}`}
                                className="hover:text-[#25D366]"
                            >
                                <FaWhatsapp />
                            </Link>
                        )}

                        {data.contact?.phone_number && (
                            <Link
                                href={`tel:${data.contact.phone_number}`}
                                className="hover:text-[#3B82F6]"
                            >
                                <FaPhone />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
