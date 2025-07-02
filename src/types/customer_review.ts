import { Picture } from "./picture";

export interface CustomerReview {
    customer_picture: Picture;
    customer_name: string;
    rate: number;
    text?: string | null;
}