export type CollectionList<T> = {
    available: number;
    returned: number;
    collectionURI: string;
    items: T[];
}