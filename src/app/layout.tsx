import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const cairo = Cairo();


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const t = await getTranslations();
    return (
        <html lang="en">
            <body className={`${cairo.className}`} dir={t("locale_dir")}>
                <NextIntlClientProvider messages={await getMessages()}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
