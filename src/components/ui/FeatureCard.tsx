import { Feature } from "@/types/Feature";
import ClientImage from "./ClientImage";
import { cn } from "@/utils/cn"; // تأكد من وجود هذا المساعد أو استبدله بـ classnames أو ترك الشروط داخل JSX
import { Picture } from "@/types/picture";

type Props = {
    feature: Feature;
    variant?: "default" | "card"; // يمكنك إضافة المزيد لاحقًا
};

const FeatureCard = ({ feature, variant = "default" }: Props) => {
    const hasImage = !!feature.image;

    return (
        <div
            className={cn(
                "rounded-2xl p-6 flex flex-col items-center gap-4 text-center",
                variant === "card" && "bg-white shadow-md max-w-md mx-auto"
            )}
        >
            {hasImage && (
                <div
                    className={cn(
                        "relative overflow-hidden shadow",
                        variant === "default"
                            ? "w-20 h-20 rounded-full shadow-fuchsia-400"
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
                    variant === "default" ? "text-lg" : "text-xl text-gray-900"
                )}
            >
                {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
    );
};

export default FeatureCard;
