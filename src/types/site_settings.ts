import { ContactData } from "./cms_components/types/contact_data";
import { FooterLink } from "./cms_components/types/footer_link";
import { Identity } from "./identity";
import { Locale } from "./schema";

export interface SiteSettings {
    id: number,
    documentId: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: Locale;

    site_identity: { id: number, identity: Identity };
    contact?: ContactData;
    footer_links: FooterLink[];
}