import React from "react";
import { Text, Image } from "react-native";
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

    <Text style={{ alignSelf: "center", padding: 5 }}>
      Welcome at the Marvel page. Here you can look for characters and commics
      from Marvel. Here you can get information on your favorite comics and
      heroes.
    </Text>
    <Footer footer={"Data provided by Marvel. © 2014 Marvel"} />
  </Layout>
);

export default Home;
