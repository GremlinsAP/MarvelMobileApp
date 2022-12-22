import { View, Text } from "react-native";
import { FavoriteItem } from "../util/interfaces/FavoriteItem";
import { FC, useEffect, useState } from "react";
import { Character } from "../util/interfaces/Character";
import { Comic } from "../util/interfaces/Comic";
import { ApiResponse } from "../util/ApiResponse";
import { Api } from "../util/Api";
import CharacterCard from "./CharacterCard";
import ComicCard from "./ComicCard";

type FavoriteEntryProps = Pick<FavoriteItem, "type" | "id">;

const FavoriteEntry: FC<FavoriteEntryProps> = ({ type, id }) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [object, setObject] = useState<Comic | Character>();

    useEffect(() => {
        const controller = new AbortController();

        const fetch = async () => {
            let data = undefined;
            let result = undefined;

            switch (type) {
                case "character":
                    data = Api.INSTANCE.getCharacter(id);
                    result = await data.process();
                    setObject(result.data[0]);
                    break;
                case "comic":
                    data = Api.INSTANCE.getComic(id);
                    result = await data.process();
                    break;
            }

            setObject(result.data[0]);
            setLoading(false);
        }

        fetch();

        return () => controller.abort();
    }, [])

    return <View>
        {!loading && object && type == "character" && <CharacterCard character={object as Character} />}
        {!loading && object && type == "comic" && <ComicCard comic={object as Comic} />}
    </View>
}

export default FavoriteEntry;