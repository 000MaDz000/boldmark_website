import { SiteSettings } from '@/types/site_settings'
import React from 'react'
import ClientImage from './ClientImage'

function Logo({ siteSettings }: { siteSettings: SiteSettings }) {
    return siteSettings.site_identity.identity.logo ? (
        <ClientImage
            src={siteSettings.site_identity.identity.logo}
            alt={
                siteSettings.site_identity.identity.logo.alternativeText ||
                siteSettings.site_identity.identity.name
            }
            className="max-w-20"
        />
    )
        : (
            <h4>
                {siteSettings.site_identity.identity.name}
            </h4>
        )
}

export default Logo