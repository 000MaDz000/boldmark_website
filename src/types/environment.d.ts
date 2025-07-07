declare namespace NodeJS {
    interface ProcessEnv {
        STRAPI_API_READONLY_TOKEN: string;
        STRAPI_HOST: string;
        GEMINI_API_KEY: string;
    }
}