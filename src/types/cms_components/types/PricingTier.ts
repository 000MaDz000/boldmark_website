


export interface PricingDeliverable {
    id: number;
    text: string;
}

export interface PricingFeature {
    id: number;
    name: string;
    included: boolean;
    description?: string;
}

export interface PricingTier {
    id: number,
    name: string;
    description: string;
    price: number;
    currency: string;
    period: string; // e.g., "project", "monthly", etc.
    timeline: string;
    revisions: string | null;
    cta: string;
    popular?: boolean;
    features: PricingFeature[];
    deliverables: PricingDeliverable[];
}
