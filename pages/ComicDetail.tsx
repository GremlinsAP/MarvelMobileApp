import { FC } from "react";
import Layout from "../components/Layout";
import { Comic } from "../util/interfaces/Comic";
import { StyleSheet, View, Text, Image } from "react-native";

type ComicDetailProps = {
    comic: Comic;
}

const ComicDetail: FC<ComicDetailProps> = ({comic}) => {
    return <Layout>
        <View>
        <Text>{comic.title}</Text>
        <Text>{comic.series.name}</Text>
        <Text>{comic.description}</Text>
        </View>
        <View>
            <Text>List of characters: {comic.characters.available}</Text>
        </View>
    </Layout>
}

export default ComicDetail;