import axios from "axios";

export const axiosInstance = (path) => {
    const client = axios.get('https://api-us.storyblok.com/v2/cdn/stories',{
        params: {
            version: "draft",
            token: "OhUQfj92QJ3nrnhk6o5Gdwtt"
        },
        timeout: 5000
    });
    return client;
};



export const fetchAllEvents = async (per_page = 10, page = 1) => {
    try {
        const { data } = await axiosInstance("/", {
            params: {
                page,
                per_page
            }
        });
        return data;
    } catch (error) {
        return null;
    }
}

export const fetchEvent = async (slug) => {
    try {
        const { data } = await axiosInstance().get("/events/" + slug);
        return data;
    } catch (error) {
        return null;
    }
}

export const fetchAllNewsletters = async (per_page = 10, page = 1) => {
    try {
        const { data } = await axiosInstance("/")
        return data;
    } catch (error) {
        return error.message;
    }
}

export const fetchNewsletter = async (slug) => {
    try {
        const { data } = await axiosInstance().get("/newsletter/" + slug);
        return data;
    } catch (error) {
        return null;
    }
}