import React from "react"
import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type FooterProps = {
    footer: string;
  };

const Footer: FC<FooterProps> = ({}) => {
    return (
        <View style={styles.footer}>
          <Text style={{ fontSize: 20, alignSelf: "center", marginTop: "auto", marginBottom: "auto", color: "white", backgroundColor: "black" }}>
            Data provided by Marvel. © 2014 Marvel
          </Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
    footer: {
      display: "flex",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 100,
      backgroundcolor: "red",
      color: "white",
      textAlign: "center",
      },
    });

    export default Footer;