import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Character } from "../util/interfaces/Character";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";

const Characters = () => {
  const [character, setCharacter] = useState<Character[]>([]);

  useEffect(() => {
    const data: ApiResponse<Character> = Api.INSTANCE.getCharacters();

    const fetch = async () => {
      const dataResult = await data.process();
      setCharacter(dataResult.data);
    };

    fetch();

    return () => data.controller.abort();
  }, []);

  return (
    <>
      {character.map((character, i) => {
        return (
          <View key={i}>
            <Text>{character.name}</Text>
          </View>
        );
      })}
    </>
  );
};

export default Characters;
