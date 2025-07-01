import { Picture } from "@/types/picture";
import { Link } from "../types/link";

export interface CenteredCta {
    title: string;
    text: string;
    regular_link?: Link | null;
    filled_link?: Link | null;
    background_image: Picture;
}