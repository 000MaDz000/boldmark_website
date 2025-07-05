import CenteredCTA from '@/components/sections/CenteredCTA';
import Contact from '@/components/sections/Contact';
import { getContactPageData } from '@/fetchers/getContactPage';
import { getSiteSettings } from '@/fetchers/getSiteSettings';
import { ContactData } from '@/types/cms_components/types/contact_data';
import { notFound } from 'next/navigation';
import React from 'react';

async function page() {
    const siteSettings = await getSiteSettings();
    const contactPage = await getContactPageData();
    if (!siteSettings) notFound();

    return (
        <div className="grow my-14 space-y-10 px-4 sm:px-6 lg:px-8">

            {contactPage?.start_cta ? (
                <CenteredCTA data={contactPage.start_cta} />
            ) : null}

            {/* Contact Content */}
            <Contact contact={siteSettings.contact as ContactData} />

            {contactPage?.end_cta ? (
                <CenteredCTA data={contactPage.end_cta} />
            ) : null}
        </div>
    );
}

export default page;
