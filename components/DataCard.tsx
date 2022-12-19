import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Character } from "../util/interfaces/Character";

type DataCardProps = {
    imagePath: string;
    title: string;
    description: string;
    type: "character" | "comic";
};

const DataCard: FC<DataCardProps> = ({ imagePath, title, description, type }) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.card__image}
                source={{
                    uri: imagePath,
                }}
            />
            <View style={styles.card__content}>
                <Text style={styles.card__heading}>{title.length > 25 ? title?.substring(0, 25).concat("...") : title}</Text>
                <Text style={styles.card__content__description}>
                    {description.length > 60
                        ? description?.substring(0, 60).concat("...")
                        : description ||
                        `There is no description provided for this ${type}`}
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
        fontWeight: "bold"
    },
});

export default DataCard;