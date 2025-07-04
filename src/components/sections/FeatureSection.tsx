import { FeaturesSection as IFeaturesSection } from "@/types/cms_components/sections/Features";
import FeatureCard from "../ui/FeatureCard";

type Props = {
    section: IFeaturesSection;
};

const FeaturesSection = ({ section }: Props) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                    {section.subtitle && (
                        <p className="text-xl text-gray-600 mt-2">{section.subtitle}</p>
                    )}
                    {section.text && (
                        <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
                            {section.text}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {section.features.map((featureObj) => (
                        <FeatureCard key={featureObj.id} feature={featureObj.data} variant={section.variant} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
