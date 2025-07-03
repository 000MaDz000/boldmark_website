import { Feature } from "@/types/Feature";
import ClientImage from "./ClientImage";

type Props = {
    feature: Feature;
};

const FeatureCard = ({ feature }: Props) => {
    return (
        <div className="rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full aspect-video relative overflow-hidden  shadow shadow-fuchsia-400">
                <ClientImage
                    src={feature.image}
                    alt={feature.image.alternativeText || feature.title}
                    className="object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
    );
};

export default FeatureCard;
