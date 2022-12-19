import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Comic } from "../util/interfaces/Comic";
import DataCard from "./DataCard";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: FC<ComicCardProps> = ({ comic }) => {
  return <DataCard type="comic" title={comic.title} description={comic.series.name} imagePath={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
};

export default ComicCard;