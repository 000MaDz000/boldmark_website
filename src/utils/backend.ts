import axios from "axios";

// console.log("BACNEND_HOST=", process.env.STRAPI_HOST);
// console.log("BACNEND_API_TOKEN=", process.env.STRAPI_API_READONLY_TOKEN);

const readOnlyBackend = axios.create({
    baseURL: `${process.env.STRAPI_HOST}/api`,
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_READONLY_TOKEN}`,
    }
});


export { readOnlyBackend };