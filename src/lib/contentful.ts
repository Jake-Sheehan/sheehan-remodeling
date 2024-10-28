import * as contentful from 'contentful';
import type { HeroSkeleton } from './models';

const contentful_client = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: "cdn.contentful.com",
});

const hero_entries =
    await contentful_client.withoutUnresolvableLinks.getEntries<HeroSkeleton>({
        content_type: "hero",
    });

export const hero_text = hero_entries.items[0].fields.heroText ?? "default text";
export const hero_url = `https:${hero_entries.items[0].fields.heroImage?.fields?.file?.url ?? "//picsum.photos/1920/1080"}`;

