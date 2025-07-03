
import { LuCheck, LuX, LuArrowRight } from 'react-icons/lu';
import { getPricingPageData } from '@/fetchers/getPricingPage';
import CenteredCTA from '@/components/sections/CenteredCTA';
import { getTranslations } from 'next-intl/server';

export default async function PricingPage() {
    const pageData = await getPricingPageData();
    const t = await getTranslations();

    return (
        <div className="grow bg-gradient-to-br from-slate-50 via-white to-slate-100 mt-20">
            {/* Header Section */}
            {/* <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="text-center space-y-4">

                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                        Pricing That Scales
                        <br />
                        With Your Vision
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Choose the perfect package to bring your brand to life. From startups to enterprises,
                        we have the expertise to create identities that resonate and perform.
                    </p>
                </div>
            </div> */}

            {/* Pricing Cards */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pageData.plans.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative bg-white rounded-2xl transition-all duration-300 hover:shadow-2xl cursor-pointer ${tier.popular
                                ? 'border-2 border-slate-900 shadow-xl scale-105'
                                : 'border border-slate-200 hover:border-slate-300 shadow-lg'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-slate-900 text-white px-4 py-2 text-sm font-semibold rounded-full">
                                        {t("Most Popular")}
                                    </span>
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {tier.description}
                                </p>
                                <div className="pt-4">
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-4xl font-bold text-slate-900">
                                            <span>{tier.price.toLocaleString()}</span>
                                            <span>{tier.currency}</span>
                                        </span>
                                        <span className="text-slate-500">/{tier.period}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-600 mt-2 space-x-4">
                                        <span className="font-medium">{t("Timeline:")}</span>
                                        <span className="ml-2">{tier.timeline}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-600 mt-1 space-x-4">
                                        <span className="font-medium">{t("Revisions:")}</span>
                                        <span className="ml-2">{tier.revisions || t("not configured")}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="px-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-3">{t("Features Included")}</h4>
                                    <div className="space-y-2">
                                        {tier.features.map((feature, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    {feature.included ? (
                                                        <LuCheck className="w-4 h-4 text-green-600" />
                                                    ) : (
                                                        <LuX className="w-4 h-4 text-slate-400" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <span className={`text-sm ${feature.included ? 'text-slate-900' : 'text-slate-500'
                                                        }`}>
                                                        {feature.name}
                                                    </span>
                                                    {feature.description && (
                                                        <p className="text-xs text-slate-500 mt-1">
                                                            {feature.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-slate-200"></div>

                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-3">{t("Deliverables")}</h4>
                                    <ul className="space-y-1">
                                        {tier.deliverables.map((deliverable, index) => (
                                            <li key={index} className="text-sm text-slate-600 flex items-start">
                                                <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {deliverable.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 pt-6">
                                <button
                                    className={`cursor-pointer w-full py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center ${tier.popular
                                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                                        : 'bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-900'
                                        }`}
                                >
                                    {tier.cta}
                                    <LuArrowRight className="w-5 h-5 ml-2 rtl:rotate-180 mx-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            {/* <Reviews data={testimintions}/> */}

            {/* CTA Section */}
            <CenteredCTA data={pageData.cta} />
        </div>
    );
}