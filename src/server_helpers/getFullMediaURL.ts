
function getFullMediaURL(path: string) {
    if (/^https?:\/\//i.test(path)) {
        return path;
    }

    return `${process.env.STRAPI_HOST}${path}`;
}

export default getFullMediaURL;
