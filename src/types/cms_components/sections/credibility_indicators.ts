import { Picture } from "@/types/picture";
import { Link } from "../types/link";
import { CredibilityIndecator } from "../types/credibility_indicator";

export interface CredibilityIndecators {
    background_image: Picture;
    indicators: CredibilityIndecator[];
}