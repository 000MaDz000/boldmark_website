import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getSiteSettings } from "@/fetchers/getSiteSettings";
import ChatbotWidget from "@/components/ui/ChatbotWidget";
import { fetchAiChatbotOptions } from "@/fetchers/getAiChatbotOptions";



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const t = await getTranslations();
    const siteSettings = await getSiteSettings();
    const chatbotOptions = await fetchAiChatbotOptions();

    return (
        <html lang="en">
            <body className={` max-w-screen bg-page`} dir={t("locale_dir")}>
                <NextIntlClientProvider messages={await getMessages()}>
                    <div className="flex flex-col min-h-screen">
                        <Header siteSettings={siteSettings} />
                        <div className="flex grow">
                            {children}
                        </div>
                        <Footer siteSettings={siteSettings} />
                    </div>
                    <ChatbotWidget options={chatbotOptions} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
