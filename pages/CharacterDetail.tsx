import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";
import { Character } from "../util/interfaces/Character";
import { DetailListPrint } from "../util/RenderUtil";
import NamedSection from "../components/NamedSection";
import ComicCard from "../components/ComicCard";
import { ApiResponse } from "../util/ApiResponse";
import { Api } from "../util/Api";
import { Comic } from "../util/interfaces/Comic";
import { ScrollView } from "react-native-gesture-handler";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = () => {
  const {
    params: { character },
  }: RouteProp<Record<string, CharacterDetailProps>> = useRoute();

  const [loading, setLoading] = useState<boolean>(true);
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const data: ApiResponse<Comic> = Api.INSTANCE.getComicsForCharacter(
      character.id
    );

    const fetch = async () => {
      const dataResult = await data.process();
      const actualResult = dataResult.data;
      setComics(actualResult);
      setLoading(false);
    }

    fetch();
  }, [])

  return (
    <Layout>
      <ScrollView>
        <NamedSection title="Main Info">
          {DetailListPrint({
            Name: character.name,
            Description: character.description || "No description",
          })}
        </NamedSection>

        <NamedSection title="Picture">
          <Image style={styles.image} source={{
            uri: `${character.thumbnail.path.endsWith("image_not_available") ? "https://i.redd.it/7z6qt753qe031" : character.thumbnail.path}.${character.thumbnail.extension}`
          }} />
        </NamedSection>

        <NamedSection title="Comics">
          {loading ? <Text>Loading Comics...</Text> : comics.length > 0 ?
            comics.map((comic, i) => <ComicCard key={i} comic={comic} />)
            : <Text style={styles.centeredMessage}>No Comics</Text>}
        </NamedSection>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 450,
    alignSelf: "center"
  },

  centeredMessage: {
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default CharacterDetail;
