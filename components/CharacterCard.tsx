import { FC } from "react";
import { Pressable } from "react-native";
import { Character } from "../util/interfaces/Character";
import DataCard from "./DataCard";
import { useNavigation } from "@react-navigation/native";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const navigation = useNavigation<{ navigate: (link: string, data: {}) => void; }>();

  return <Pressable
    onPress={(e) => {
      navigation.navigate("Character Detail", {
        character: character,
      });
    }}
  >
    <DataCard type="character" title={character.name} description={character.description} imagePath={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
  </Pressable>
};

export default CharacterCard;
