/**
 * Author: Elwyn Van der Borght
 */

import { Pressable, StyleSheet, Text } from "react-native";
import { FC } from 'react';

interface BackToTopProps {
    onPress: () => void;
}

const BackToTop: FC<BackToTopProps> = ({ onPress }) => {
    return <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.innerText}>^</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        width: 50,
        height: 50,
        padding: 2,
        position: "absolute",
        bottom: 50,
        right: 15,
        borderRadius: 50
    },

    innerText: {
        color: "black",
        fontSize: 50,
        alignSelf: "center"
    }
});

export default BackToTop;