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
        style={styles.image}
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />
      <View>
        <Text style={styles.heading}>{character.name}</Text>
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
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 5,
  },

  heading: {
    fontSize: 20,
  },
});

export default CharacterCard;
