import { Feature } from "@/types/Feature";
import ClientImage from "./ClientImage";
import { cn } from "@/utils/cn";
import { Picture } from "@/types/picture";

type Props = {
    feature: Feature;
    variant?: "default" | "card";
};

const FeatureCard = ({ feature, variant = "default" }: Props) => {
    const hasImage = !!feature.image;

    return (
        <div
            className={cn(
                "rounded-2xl p-6 flex flex-col items-center gap-4 text-center",
                variant === "card" && "bg-surface-light shadow-md max-w-md mx-auto"
            )}
        >
            {hasImage && (
                <div
                    className={cn(
                        "relative overflow-hidden shadow",
                        variant === "default"
                            ? "w-20 h-20 rounded-full shadow-secondary-muted"
                            : "w-full h-48 rounded-md"
                    )}
                >
                    <ClientImage
                        src={feature.image as Picture}
                        alt={(feature.image as Picture).alternativeText || feature.title}
                        className={cn(
                            "object-cover",
                            variant === "default" ? "w-full h-full" : "w-full h-48"
                        )}
                    />
                </div>
            )}

            <h3
                className={cn(
                    "font-semibold",
                    variant === "default" ? "text-lg text-heading" : "text-xl text-heading"
                )}
            >
                {feature.title}
            </h3>
            <p className="text-sm text-text-muted">{feature.description}</p>
        </div>
    );
};

export default FeatureCard;
