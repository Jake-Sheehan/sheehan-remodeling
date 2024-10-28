import type { EntryFieldTypes } from "contentful";

export interface HeroSkeleton {
    contentTypeId: "hero";
    fields: {
        heroText: EntryFieldTypes.Text;
        heroImage: EntryFieldTypes.AssetLink;
    };
}

