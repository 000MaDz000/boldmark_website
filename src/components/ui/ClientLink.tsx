import { Link as ILink, NativeLinkEnumeration } from '@/types/cms_components/types/link'
import { Links } from '@/types/links';
import Link, { LinkProps } from 'next/link'
import React, { HTMLAttributes } from 'react'

function ClientLink({ href, ...rest }: { href: ILink } & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    let proccessedLink = href.custom_link;
    if (!href.custom_link && href.native_link) {
        switch (href.native_link) {
            case NativeLinkEnumeration.blog:
                proccessedLink = Links.BLOG;
                break;

            case NativeLinkEnumeration.contact:
                proccessedLink = Links.CONTACT;
                break;

            case NativeLinkEnumeration.pricing:
                proccessedLink = Links.PRICING;
                break;

            case NativeLinkEnumeration.projects:
                proccessedLink = Links.PROJECTS;
                break;

            case NativeLinkEnumeration.reviews:
                proccessedLink = Links.REVIEWS;
                break;
            case NativeLinkEnumeration.home:
                proccessedLink = Links.HOME;
                break;

        }
    }

    return (
        <Link href={proccessedLink || ""} {...rest} />
    )
}

export default ClientLink