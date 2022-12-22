import { DataType } from "../../components/DataCard"

export type FavoriteItem = {
    type: DataType;
    id: number;
    title: string;
    date?: number;
}