import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Comic } from "../util/interfaces/Comic";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: FC<ComicCardProps> = ({ comic }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        }}
      />
       <View style={styles.card__content}>
        <Text style={styles.heading}>{comic.title}</Text>
        <Text>{comic.series.name.length > 60 ? comic.series.name.substring(0, 60).concat("...") : comic.series.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: "95%",
    margin: 15,
    padding: 5,
    backgroundColor: "#FFF",
    maxHeight: 100,
  },

  card__content: {
    flex: 2,
    width: "100%",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 5,
  },

  heading: {
    fontSize: 16,
    fontWeight:"bold"
  },

  footer: {
    width: "100%",
    height: 100,
  },
});

export default ComicCard;