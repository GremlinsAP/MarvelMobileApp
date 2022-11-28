import { CreatorSummary } from './CreatorSummary';
export type CreatorList = {
    available: number;
    collectionURI: string;
    items: CreatorSummary[];
    returned: number;
}