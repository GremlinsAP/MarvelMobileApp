import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import ComicCard from "../components/ComicCard";
import { Comic } from "../util/interfaces/Comic";
import Footer from "../components/Footer";

const Comics = () => {
  const [comic, setComic] = useState<Comic[]>([]);

  useEffect(() => {
    const data: ApiResponse<Comic> = Api.INSTANCE.getComics();

    const fetch = async () => {
      const dataResult = await data.process();
      setComic(dataResult.data);
    };

    fetch();

    return () => data.controller.abort();
  }, []);

  return (
    <>
      <ScrollView>
        {comic.map((comic, i) => (
          <ComicCard key={i} comic={comic} />
        ))}
          <Footer footer={""} />
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  footer: {
    width: "100%",
  },
});
export default Comics;