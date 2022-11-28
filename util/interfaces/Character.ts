import { CollectionList } from './CollectionList';
import { Image } from "./Image";
import { BaseSummary } from './BaseSummary';
import { StorySummary } from './StorySummary';

export type Character = {
    id: number;
    name: string;
    description: string;
    modified: Date,
    resourceURI: string;
    urls: string[];
    thumbnail: Image;
    comics: CollectionList<BaseSummary>;
    stories: CollectionList<StorySummary>;
    events: CollectionList<BaseSummary>;
    series: CollectionList<BaseSummary>;
}