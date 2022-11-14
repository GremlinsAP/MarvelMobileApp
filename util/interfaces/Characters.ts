import { Character } from "./Character";

export interface Characters {
    count: number;
    limit: number;
    offset: number;
    results: Character[];
}