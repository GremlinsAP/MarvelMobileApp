import { StoryList } from './StoryList';
import { ComicList } from './ComicList';
import { Image } from "./Image";
import { EventList } from './EventList';
import { SeriesList } from './SeriesList';

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date,
    resourceURI: string;
    urls: string[];
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    events: EventList;
    series: SeriesList;
}