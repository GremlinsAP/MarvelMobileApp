import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Image, Button, View } from "react-native";
import Layout from "../components/Layout";
import { Character } from "../util/interfaces/Character";
import { DetailListPrint } from "../util/RenderUtil";
import NamedSection from "../components/NamedSection";
import ComicCard from "../components/ComicCard";
import { ApiResponse } from "../util/ApiResponse";
import { Api } from "../util/Api";
import { Comic } from "../util/interfaces/Comic";
import { ScrollView } from "react-native-gesture-handler";
import InteractiveLoadingText from "../components/InteractiveLoadingText";
import BackToTop from "../components/BackToTop";
import { storeDataCharacter } from "../components/LocalStorage";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = () => {
  const {
    params: { character },
  }: RouteProp<Record<string, CharacterDetailProps>> = useRoute();

  const [loading, setLoading] = useState<boolean>(true);
  const [fetchMore, setFetchMore] = useState<boolean>(false);
  const [comics, setComics] = useState<Comic[]>([]);
  const [noMoreData, setNoMoreData] = useState<boolean>(false);


  useEffect(() => {
    const data: ApiResponse<Comic> = Api.INSTANCE.getComicsForCharacter(
      character.id,
      comics.length
    );

    const fetch = async () => {
      const dataResult = await data.process();
      const actualResult = dataResult.data;

      if (actualResult.length === 0) setNoMoreData(true)

      setComics((prev) => [...prev, ...actualResult]);
      setLoading(false);
      setFetchMore(false);
    }

    fetch();

    return () => data.controller.abort();
  }, [fetchMore])

  const scrollRef = useRef<ScrollView>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  return (
    <Layout>
      <ScrollView ref={scrollRef} scrollEventThrottle={16} onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}>
        <View>
          <Button onPress={e => storeDataCharacter(character)} title="Add favorite comic" />
        </View>
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
          {!loading && comics.length > 0 ?
            comics.map((comic, i) => <ComicCard key={i} comic={comic} />)
            : <Text style={styles.centeredMessage}>No Comics</Text>}
          {(loading || fetchMore) && <InteractiveLoadingText style={{ textAlign: "center", fontSize: 25 }} />}
          {noMoreData && <Text style={{ textAlign: "center", fontSize: 25 }}>No more comics for this character!</Text>}
          {!noMoreData && <Button title="Load More" onPress={(e) => setFetchMore(true)} />}
        </NamedSection>
      </ScrollView>
      {scrollOffset > 35 && <BackToTop onpress={() => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
      }} />}
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
