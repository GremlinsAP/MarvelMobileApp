import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Character } from "../util/interfaces/Character";
import DataCard from "./DataCard";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return <DataCard type="character" title={character.name} description={character.description} imagePath={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
};

export default CharacterCard;
