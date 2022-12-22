import { FC, useEffect, useState } from "react";
import { FavoriteItem } from "../util/interfaces/FavoriteItem";
import { Button, View } from "react-native";
import { createFavorite, isFavorited, removeFavorite, storeFavorite } from "../util/LocalStorage";

type SelectionProps = Pick<FavoriteItem, "type" | "id" | "title">;

const FavoriteSelection: FC<SelectionProps> = ({ type, id, title }) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        const setup = async () => {
            setFavorite(await isFavorited(id));
        }

        setup();
    }, [])

    return <View>
        {!favorite ? <Button onPress={_ => {
            setFavorite((favorite) => !favorite);
            storeFavorite(createFavorite(type, id, title))
        }} title={`Add favorite ${type}`} /> : <Button onPress={_ => {
            setFavorite((favorite) => !favorite);
            removeFavorite(type, id);
        }} title={`Remove favorite ${type}`} />}
    </View>
}

export default FavoriteSelection;