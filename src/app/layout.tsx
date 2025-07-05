import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getSiteSettings } from "@/fetchers/getSiteSettings";

const cairo = Cairo();


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const t = await getTranslations();
    const siteSettings = await getSiteSettings();

    return (
        <html lang="en">
            <body className={`${cairo.className} max-w-screen bg-page`} dir={t("locale_dir")}>
                <NextIntlClientProvider messages={await getMessages()}>
                    <div className="flex flex-col min-h-screen">
                        <Header siteSettings={siteSettings} />
                        <div className="flex grow">
                            {children}
                        </div>
                        <Footer siteSettings={siteSettings} />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
