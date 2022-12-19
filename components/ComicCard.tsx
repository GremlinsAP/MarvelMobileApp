import { FC } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Comic } from "../util/interfaces/Comic";
import DataCard from "./DataCard";
import { useNavigation } from "@react-navigation/native";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: FC<ComicCardProps> = ({ comic }) => {
  const navigation = useNavigation<{ navigate: (link: string, data: {}) => void; }>();

  return <Pressable
    onPress={(e) => {
      navigation.navigate("Comic Detail", { comic: comic });
    }}
  >
    <DataCard type="comic" title={comic.title} description={comic.series.name} imagePath={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
  </Pressable>
};

export default ComicCard;