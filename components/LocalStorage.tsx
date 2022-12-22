import React, { FC } from "react";

import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Comic } from "../util/interfaces/Comic";
import ComicCard from "./ComicCard";
import Comics from "../pages/Comics";
import { Character } from "../util/interfaces/Character";
import { FavoriteItem } from "../util/interfaces/FavoriteItem";
import { Favorites } from "../util/interfaces/Favorites";

export const storeDataComic = async (comic: Comic) => {
  let comicFavorite : FavoriteItem = {
    type: "comic",
    id: comic.id,
    title: comic.title,
    date: Date.now()
  };
  const currentData = await getData();
  currentData.favoriteComics.push(comicFavorite)
  await AsyncStorage.setItem("Favorites", JSON.stringify(currentData));
};

export const storeDataCharacter = async (character: Character) => {
  let characterFavorite : FavoriteItem = {
    type: "character",
    id: character.id,
    title: character.name,
    date: Date.now()
  };
  const currentData = await getData();
  currentData.favoriteCharacters.push(characterFavorite)
  await AsyncStorage.setItem("Favorites", JSON.stringify(currentData));
};

export const getData = async (): Promise<Favorites> => {
  const StorageEntry = await AsyncStorage.getItem("Favorites");
  return StorageEntry ? JSON.parse(StorageEntry) : {favoriteComics: {}, favoriteCharacters: {}}
};
