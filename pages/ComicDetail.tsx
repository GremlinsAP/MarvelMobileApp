import { FC } from "react";
import Layout from "../components/Layout";
import { Comic } from "../util/interfaces/Comic";
import { StyleSheet, View, Text, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ComicDetailProps = {
    comic: Comic;
}

const ComicDetail = () => {
    const {
        params: { comic },
    }: RouteProp<Record<string, ComicDetailProps>> = useRoute();
    return <Layout>
        <View>
            <Text>Name: {comic.title}</Text>
            <Text>Series: {comic.series.name}</Text>
            <Text>Description: {comic.description}</Text>
        </View>
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                }}
            />
        </View>
        <View>
        {comic.stories.items.map((story) => {
        return (
          <View>
            <Text>{story.name}</Text>
          </View>
        );
      })}
        </View>
    </Layout>
}

export default ComicDetail;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        alignSelf: "center"
    },
});