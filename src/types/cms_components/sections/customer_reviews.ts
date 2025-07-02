import { CustomerReview } from "@/types/customer_review";


export interface CustomerReviewsItem {
    id: number;
    customer_review: CustomerReview;
}

export interface CustomerReviews {
    id: number;
    title?: string | null;
    subtitle?: string | null;
    reviews: CustomerReviewsItem[]
}