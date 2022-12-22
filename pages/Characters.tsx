import { Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Character } from "../util/interfaces/Character";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import CharacterCard from "../components/CharacterCard";
import { FlatList } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import InteractiveLoadingText from "../components/InteractiveLoadingText";
import BackToTop from "../components/BackToTop";

const Characters = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character[]>([]);
  const [fetchMore, setFetchMore] = useState<boolean>(false);
  const [noMoreData, setNoMoreData] = useState<boolean>(false);

  const scrollRef = useRef<FlatList>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    const data: ApiResponse<Character> = Api.INSTANCE.getCharacters(character.length);

    const fetch = async () => {
      const dataResult = await data.process();

      const actualResult = dataResult.data;

      if (actualResult.length === 0) setNoMoreData(true);
      else {
        setCharacter([...character, ...actualResult]);
        setLoading(false);
        setFetchMore(false);
      }
    };

    fetch();
  }, [fetchMore]);

  return (
    <Layout>
      <FlatList
        ref={scrollRef}
        data={character}
        renderItem={(character) => (
          <CharacterCard key={character.index} character={character.item} />
        )}
        onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}
        onEndReached={(e) => !noMoreData && setFetchMore(true)}
      />

      {noMoreData && (
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          There are no characters left!
        </Text>
      )}

      {scrollOffset > 15 && <BackToTop onpress={() => {
        scrollRef.current!.scrollToOffset({
          animated: true,
          offset: 0
        })
      }} />}
      {(loading || fetchMore) && <InteractiveLoadingText style={{ textAlign: "center", fontSize: 30 }} />}
    </Layout>
  );
};

export default Characters;
