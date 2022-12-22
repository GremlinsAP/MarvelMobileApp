import React from "react";
import { Text, Image, View } from "react-native";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <Image
      style={{ width: 200, height: 100, alignSelf: "center" }}
      source={{
        uri: "https://logos-world.net/wp-content/uploads/2020/11/Marvel-Studios-Symbol.png",
      }}
    />
    <View>
      <Text>Welcome to our Marvel website!</Text>
      <Text>
        Here, you'll find all the latest news and updates on your favorite Marvel
        characters and comic books. From Iron Man to Spider-Man,
        The Avengers to The X-Men, Marvel has a vast universe of heroes, villains,
        and adventures to explore.
      </Text>
      <Text>
        Stay up-to-date with the latest Marvel news and join the conversation on
        social media using the hashtag #Marvel.
      </Text>
      <Text>Thank you for visiting and we hope you enjoy your time on the Marvel website.</Text>
      <Text>Best regards,</Text>
      <Text>The Marvel Team</Text>
    </View>
    <Footer footer={"Data provided by Marvel. © 2014 Marvel"} />
  </Layout>
);

export default Home;
