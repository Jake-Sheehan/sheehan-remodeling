import * as contentful from 'contentful';

export const contentful_client = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: "cdn.contentful.com",
});

