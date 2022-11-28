export type BaseData<T> = {
    count: number;
    limit: number;
    offset: number;
    results: T[];
}