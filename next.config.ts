import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: new URL(process.env.STRAPI_HOST).hostname,
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: '**'
            },
        ]
    }
    /* config options here */
};

if (process.env.NODE_ENV === "development") {
    nextConfig.images?.remotePatterns?.push(
        new URL(`${process.env.BACKEND_HOST}/uploads/**`)
    );
}
export default withNextIntl(nextConfig);
