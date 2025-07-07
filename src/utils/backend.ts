import axios from "axios";

// console.log("BACNEND_HOST=", process.env.STRAPI_HOST);
// console.log("BACNEND_API_TOKEN=", process.env.STRAPI_API_READONLY_TOKEN);

// this axios instance will be used in the send contact messages and fetch data, so make sure it's cannot read any private thing and has the right permissions
const readOnlyBackend = axios.create({
    baseURL: `${process.env.STRAPI_HOST}/api`,
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_READONLY_TOKEN}`,
    }
});


export { readOnlyBackend };