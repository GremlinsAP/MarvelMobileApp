import { RouteProp, useRoute } from "@react-navigation/native";
import { FC } from "react";
import { View, Text } from "react-native";
import Layout from "../components/Layout";
import { Character } from "../util/interfaces/Character";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = () => {
  const {
    params: { character },
  }: RouteProp<Record<string, CharacterDetailProps>> = useRoute();

  return (
    <Layout>
      <View>
        <Text>{character.name}</Text>
        <Text>{character.description}</Text>
      </View>
    </Layout>
  );
};

export default CharacterDetail;
