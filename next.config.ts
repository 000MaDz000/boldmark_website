import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL(`${process.env.STRAPI_HOST}/uploads/**`)],
        dangerouslyAllowSVG: true
    }
};

export default withNextIntl(nextConfig);
