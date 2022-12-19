import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Character } from "../util/interfaces/Character";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.card__image}
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />
      <View style={styles.card__content}>
        <Text style={styles.card__heading}>{character.name}</Text>
        <Text style={styles.card__content__description}>
          {character.description.length > 60
            ? character.description.substring(0, 150).concat("...")
            : character.description ||
              "This character does not have a description."}
        </Text>
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

  card__content__description: {
    overflow: "hidden",
  },

  card__image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 5,
  },

  card__heading: {
    fontSize: 20,
    fontWeight:"bold"
  },
});

export default CharacterCard;
