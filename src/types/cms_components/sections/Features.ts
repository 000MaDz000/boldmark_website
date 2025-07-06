import { FeatureType } from "../types/FeatureType";

export interface FeaturesSection {
    id: number;
    title: string;
    subtitle?: string | null;
    text?: string | null;
    variant: "card" | "default" | "icon-card";
    features: FeatureType[];
}