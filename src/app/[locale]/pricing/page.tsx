import { LuCheck, LuX, LuArrowRight } from 'react-icons/lu';
import { getPricingPageData } from '@/fetchers/getPricingPage';
import CenteredCTA from '@/components/sections/CenteredCTA';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Links } from '@/types/links';

export default async function PricingPage() {
    const pageData = await getPricingPageData();
    const t = await getTranslations();

    return (
        <div className="grow bg-surface-soft mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pageData.plans.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative bg-surface-light rounded-2xl transition-all duration-300 hover:shadow-2xl cursor-pointer ${tier.popular
                                ? 'border-2 border-heading shadow-xl scale-105'
                                : 'border border-border hover:border-border/80 shadow-lg'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-heading text-on-surface px-4 py-2 text-sm font-semibold rounded-full">
                                        {t("Most Popular")}
                                    </span>
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                <h3 className="text-2xl font-bold text-heading mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    {tier.description}
                                </p>
                                <div className="pt-4">
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-4xl font-bold text-heading">
                                            <span>{tier.price.toLocaleString()}</span>
                                            <span>{tier.currency}</span>
                                        </span>
                                        <span className="text-text-muted">/{tier.period}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-text-subtle mt-2 space-x-4">
                                        <span className="font-medium">{t("Timeline:")}</span>
                                        <span className="ml-2">{tier.timeline}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-text-subtle mt-1 space-x-4">
                                        <span className="font-medium">{t("Revisions:")}</span>
                                        <span className="ml-2">{tier.revisions || t("not configured")}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="px-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold text-heading mb-3">{t("Features Included")}</h4>
                                    <div className="space-y-2">
                                        {tier.features.map((feature, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    {feature.included ? (
                                                        <LuCheck className="w-4 h-4 text-green-600" />
                                                    ) : (
                                                        <LuX className="w-4 h-4 text-text-disabled" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <span className={`text-sm ${feature.included ? 'text-heading' : 'text-text-muted'}`}>
                                                        {feature.name}
                                                    </span>
                                                    {feature.description && (
                                                        <p className="text-xs text-text-muted mt-1">
                                                            {feature.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-border"></div>

                                <div>
                                    <h4 className="font-semibold text-heading mb-3">{t("Deliverables")}</h4>
                                    <ul className="space-y-1">
                                        {tier.deliverables.map((deliverable, index) => (
                                            <li key={index} className="text-sm text-text-subtle flex items-start">
                                                <span className="w-2 h-2 bg-text-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {deliverable.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 pt-6">
                                <Link
                                    href={Links.CONTACT}
                                    className={`cursor-pointer w-full py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center ${tier.popular
                                        ? 'bg-primary hover:bg-primary-hover text-on-primary'
                                        : 'bg-surface-light hover:bg-surface-hover text-heading border-2 border-heading'
                                        }`}
                                >
                                    {tier.cta}
                                    <LuArrowRight className="w-5 h-5 ml-2 rtl:rotate-180 mx-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <CenteredCTA data={pageData.cta} />
        </div>
    );
}
