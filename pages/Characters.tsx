import { Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Character } from "../util/interfaces/Character";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import CharacterCard from "../components/CharacterCard";
import Footer from "../components/Footer";
import { FlatList } from "react-native-gesture-handler";
import Layout from "../components/Layout";

const Characters = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character[]>([]);
  const [fetchMore, setFetchMore] = useState<boolean>(false);
  const [noMoreData, setNoMoreData] = useState<boolean>(false);

  useEffect(() => {
    const data: ApiResponse<Character> = Api.INSTANCE.getCharacters(
      character.length
    );

    const fetch = async () => {
      const dataResult = await data.process();

      const actualResult = dataResult.data;

      if (actualResult.length === 0) setNoMoreData(true);

      setCharacter([...character, ...actualResult]);
      setLoading(false);
      setFetchMore(false);
    };

    fetch();

    return () => data.controller.abort();
  }, [fetchMore]);

  return (
    <Layout>
          <FlatList
            data={character}
            renderItem={(character) => (
              <CharacterCard key={character.index} character={character.item} />
            )}
            onEndReached={(e) => !noMoreData && setFetchMore(true)}
          />

          {noMoreData && (
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              There are no characters left!
            </Text>
          )}
        
        {loading && (<Text>Loading...</Text>)}
      
    </Layout>
  );
};

export default Characters;
