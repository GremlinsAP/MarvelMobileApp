import React from "react";
import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

type FooterProps = {
  footer: string;
};

const Footer: FC<FooterProps> = ({ footer }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{footer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: "auto",
    marginBottom: 5
  },

  text: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 20,
    alignSelf: "center",
    marginTop: "auto",
    color: "white",
    backgroundColor: "black",
  },
});

export default Footer;
