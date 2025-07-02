

export interface ResponseMeta {
    page: number,
    pageSize: number,
    pageCount: number;
    total: number;
}

// export interface LocaleDocument {
//     id: number;
//     documentId: string;
//     name: string;
//     code: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     isDefault: boolean;
// }

export interface ResponseSchema<T> {
    data: T[],
    meta: { pagination: ResponseMeta };
}


export type Locale = string;