import { RouteProp, useRoute } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { Character } from "../util/interfaces/Character";
import { DetailListPrint } from "../util/RenderUtil";
import NamedSection from "../components/NamedSection";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = () => {
  const {
    params: { character },
  }: RouteProp<Record<string, CharacterDetailProps>> = useRoute();

  return (
    <Layout>
      <View style={styles.section}>

      </View>

      <NamedSection title="Main Info">
        {DetailListPrint({
          Name: character.name,
          Description: character.description,
        })}
      </NamedSection>
    </Layout>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
  },
});

export default CharacterDetail;
