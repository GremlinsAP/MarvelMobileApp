import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { Comic } from "../util/interfaces/Comic";
import { StyleSheet, Text, Image, ScrollView, Button } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import NamedSection from "../components/NamedSection";
import { DetailListPrint } from "../util/RenderUtil";
import FavoriteSelection from "../components/FavoriteSelection";
import BackToTop from "../components/BackToTop";
import CharacterCard from "../components/CharacterCard";
import InteractiveLoadingText from "../components/InteractiveLoadingText";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import { Character } from "../util/interfaces/Character";

type ComicDetailProps = {
    comic: Comic;
}

const ComicDetail = () => {
    const {
        params: { comic },
    }: RouteProp<Record<string, ComicDetailProps>> = useRoute();

    const scrollRef = useRef<ScrollView>(null);
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [fetchMore, setFetchMore] = useState<boolean>(false);
    const [characters, SetCharacters] = useState<Character[]>([]);
    const [noMoreData, setNoMoreData] = useState<boolean>(false);


    useEffect(() => {
        const data: ApiResponse<Character> = Api.INSTANCE.getCharactersForComics(
            comic.id,
            characters.length
        );

        const fetch = async () => {
            const dataResult = await data.process();
            const actualResult = dataResult.data;

            if (actualResult.length === 0) setNoMoreData(true)

            SetCharacters((prev) => [...prev, ...actualResult]);
            setLoading(false);
            setFetchMore(false);
        }

        fetch();

        return () => data.controller.abort();
    }, [fetchMore]);

    return <Layout>
        <ScrollView>
            <FavoriteSelection id={comic.id} title={comic.title} type="comic"/>
            <NamedSection title="Main Info">
                {DetailListPrint({
                    Name: comic.title,
                    Series: comic.series.name,
                    Description: comic.description?.length > 60
                        ? comic.description.substring(0, 150).concat("...")
                        : comic.description ||
                        "This comic does not have a description."
                })}
            </NamedSection>
            <NamedSection title="Thumbnail">
                <Image
                    style={styles.image}
                    source={{
                        uri: `${comic.thumbnail.path.endsWith("image_not_available") ? "https://i.redd.it/7z6qt753qe031" : comic.thumbnail.path}.${comic.thumbnail.extension}`,
                    }}
                />
            </NamedSection>
            <NamedSection title="Characters">
                {!loading && characters.length > 0 ?
                    characters.map((character, i) => <CharacterCard key={i} character={character} />)
                    : <Text style={styles.centeredMessage}>No Characters</Text>}
                {(loading || fetchMore) && <InteractiveLoadingText style={{ textAlign: "center", fontSize: 25 }} />}
                {noMoreData && characters.length > 0 && <Text style={{ textAlign: "center", fontSize: 25 }}>No more characters for this character!</Text>}
                {!noMoreData && <Button title="Load More" onPress={(e) => setFetchMore(true)} />}
            </NamedSection>
            <NamedSection title="Creators">
                {comic.creators.items.length > 0 ? comic.creators.items.map((creator, i) => {
                    return (
                        <Text key={i}>{creator.name}</Text>
                    );
                }) : <Text style={styles.centeredMessage}>This comic has no creators available</Text>}
            </NamedSection>
        </ScrollView>
        {scrollOffset > 35 && <BackToTop onPress={() => {
            scrollRef.current?.scrollTo({ y: 0, animated: true });
        }} />}
    </Layout>

}

export default ComicDetail;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 450,
        alignSelf: "center"
    },

    centeredMessage: {
        fontWeight: "bold",
        alignSelf: "center"
    }
});