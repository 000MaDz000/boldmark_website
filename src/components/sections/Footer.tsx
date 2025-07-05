import React from 'react';
import ClientImage from '../ui/ClientImage';
import ClientLink from '../ui/ClientLink';
import { SiteSettings } from '@/types/site_settings';
import SocialLinks from '../ui/SocialLinks';

function Footer({ siteSettings: data }: { siteSettings: SiteSettings }) {
    return (
        <footer className="bg-surface-light border-t border-border text-surface">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                    {/* Logo and Description */}
                    <div className="md:max-w-sm">
                        <ClientImage
                            src={data.site_identity.identity.logo}
                            alt={
                                data.site_identity.identity.logo.alternativeText ||
                                data.site_identity.identity.name
                            }
                            className="max-w-20"
                        />
                        <p className="mt-4 text-text-muted">
                            {data.site_identity.identity.description}
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {data.footer_links?.map((link) => (
                            <div key={link.id}>
                                <h4 className="text-sm font-semibold mb-4 text-on-surface">
                                    {link.title}
                                </h4>
                                <ul className="space-y-2 text-sm text-text-subtle">
                                    {link.links.map((item) => (
                                        <li key={item.id}>
                                            <ClientLink href={item}>{item.link_text}</ClientLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-muted">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
                    </p>

                    <SocialLinks contact={data.contact || { id: NaN }} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
