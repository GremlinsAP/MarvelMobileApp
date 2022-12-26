/**
 * Author: Elwyn Van der Borght
 */

import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface NamedSectionProps {
    title: string;
    children: React.ReactNode;
}

const NamedSection: FC<NamedSectionProps> = ({ title, children }) => {
    return <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>{children}</View>
    </View>
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: "white",
        marginTop: 10,
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5
    },

    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 5,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "97%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10
    },

    content: {
        width: "97%",
        marginLeft: "auto"
    }
});

export default NamedSection;