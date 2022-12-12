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
    
    var styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#F5FCFF',
      },
      titleWrapper: {
  
      },
      inputWrapper: {
  
      },
      contentContainer: {
          flex: 1 // pushes the footer to the end of the screen
      },
      footer: {
          height: 100
      }
  });

    export default Footer;