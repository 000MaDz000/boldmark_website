import { FeaturesSection as IFeaturesSection } from "@/types/cms_components/sections/Features";
import FeatureCard from "../ui/FeatureCard";

type Props = {
    section: IFeaturesSection;
};

const FeaturesSection = ({ section }: Props) => {
    return (
        <section className="py-16 bg-surface-soft">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-heading">{section.title}</h2>

                    {section.subtitle && (
                        <p className="text-xl text-text-subtle mt-2">{section.subtitle}</p>
                    )}

                    {section.text && (
                        <p className="text-base text-text-muted mt-4 max-w-2xl mx-auto">
                            {section.text}
                        </p>
                    )}
                </div>

                {section.variant === "default" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {section.features.map((featureObj) => (
                            <FeatureCard
                                key={featureObj.id}
                                feature={featureObj.data}
                                variant={section.variant}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto">
                        {section.features.map((featureObj) => (
                            <FeatureCard
                                key={featureObj.id}
                                feature={featureObj.data}
                                variant={section.variant}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturesSection;
