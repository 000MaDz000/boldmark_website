import Image from "next/image";
import FaqsCard from "../ui/FaqCard";
import faq from "@/images/faq.jpg";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Links } from "@/types/links";

type Faq = {
    q: string
    a: string
}

const FaqsSection = async () => {
    const t = await getTranslations("Faqs");

    const faqsList: Faq[] = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator..."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions..."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator..."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral..."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions..."
        }
    ]

    return (
        <section className="flex flex-col items-center gap-4 md:flex-row max-h-min px-4">

            <div className="leading-relaxed max-w-screen-xl mt-6 mx-auto px-4 md:px-8">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        {t("Frequently Asked Questions")}
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        {t("Answered all frequently asked questions, Still confused? feel free to")} <Link href={Links.CONTACT} className="inline hover:text-sky-600 text-sky-800 transition-colors">{t("contact us")}</Link>
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto">
                    {faqsList.map((item, idx) => (
                        <FaqsCard key={idx} faqsList={item} />
                    ))}
                </div>
            </div>

            <div className="w-full max-w-2xl mx-auto mt-6">
                <Image
                    src={faq}
                    width={faq.width}
                    height={faq.height}
                    alt="FAQ Illustration"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>

    )
}

export default FaqsSection
