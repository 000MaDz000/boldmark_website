import { Video } from "@/types/video";
import { Link } from "../types/link";

export interface HeroSection {
    background_video: Video;
    title: string;
    subtitle?: string | null;
    regular_link?: Link | null;
    filled_link?: Link | null;
}