export enum NativeLinkEnumeration {
    contact = "contact",
    reviews = "reviews",
    projects = "projects",
    blog = "blog",
    pricing = "pricing",
}

export interface Link {
    id: number;
    native_link?: NativeLinkEnumeration | null;
    custom_link?: string | null;
    link_text: string;
}