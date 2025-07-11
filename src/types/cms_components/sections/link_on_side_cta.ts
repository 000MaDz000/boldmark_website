import { Picture } from "@/types/picture";
import { Link } from "../types/link";

export interface LinkOnSideCTA {
    title?: string | null;
    text: string;
    link?: Link | null;
    background_image: Picture;
}