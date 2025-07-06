import { Picture } from "@/types/picture";

export function getImgURL(image: Picture) {
    const params = new URLSearchParams();
    params.set("path", image?.url);

    const url = "/api/images?" + params.toString();

    return url;
}