import React, { FC } from "react";

import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Comic } from "../util/interfaces/Comic";
import ComicCard from "./ComicCard";
import Comics from "../pages/Comics";
import { Character } from "../util/interfaces/Character";

interface CommicFavorite {
  id: number;
  title: string;
  date: number;
}

interface CharacterFavorite {
  id: number;
  name: string;
  date: number;
}

const storeDataComic = async (comic: Comic) => {
  let comicFavorite : CommicFavorite = {
    id: comic.id,
    title: comic.title,
    date: Date.now()
  };
  await AsyncStorage.setItem("comicFavorite", JSON.stringify(comicFavorite));
};

const storeDataCharacter = async (character: Character) => {
  let characterFavorite : CharacterFavorite = {
    id: character.id,
    name: character.name,
    date: Date.now()
  };
  await AsyncStorage.setItem("characterFavorite", JSON.stringify(characterFavorite));
};

const getData = async () => {
  const value : string = await AsyncStorage.getItem("randomStudent");
  if (value !== null) {
    let student : Student = JSON.parse(value);
    alert(student.name + " is " + student.age + " years old");
  } else {
    alert("No Data found");
  }
};
const App = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeDataComic} />
      <Button title="Load Data" onPress={getData } />
    </View>
  );
};

export default App;