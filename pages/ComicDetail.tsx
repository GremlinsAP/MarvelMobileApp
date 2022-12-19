import { FC } from "react";
import Layout from "../components/Layout";
import { Comic } from "../util/interfaces/Comic";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import NamedSection from "../components/NamedSection";
import { DetailListPrint } from "../util/RenderUtil";


type ComicDetailProps = {
    comic: Comic;
}

const ComicDetail = () => {
    const {
        params: { comic },
    }: RouteProp<Record<string, ComicDetailProps>> = useRoute();
    return <Layout>
        <ScrollView>
        <NamedSection title="Main Info">
            {DetailListPrint({
            Name: comic.title,
            Series: comic.series.name,
            Description: comic.description.length > 60
            ? comic.description.substring(0, 500).concat("...")
            : comic.description ||
              "This comic does not have a description."
            })}
        </NamedSection>
        <NamedSection title="Thumbnail">
            <Image
                style={styles.image}
                source={{
                    uri: `${comic.thumbnail.path.endsWith("image_not_available")? "https://i.redd.it/7z6qt753qe031" : comic.thumbnail.path}.${comic.thumbnail.extension}`,
                }}
            />
        </NamedSection>
        <NamedSection title="Characters">
        {comic.characters.items.map((character) => {
        return (
            <Text>{character.name.endsWith("")? "this comic has no characters available": character.name}</Text>
        );
      })}
        </NamedSection>
        <NamedSection title="Creators">
        {comic.creators.items.map((creator) => {
        return (
            <Text>{creator.name}</Text>
        );
      })}
        </NamedSection>
        </ScrollView>
    </Layout>
    
}

export default ComicDetail;

const styles = StyleSheet.create({
    image: {
        width:  300,
        height: 450,
        alignSelf: "center"
    },
});