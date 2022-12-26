import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoriteItem } from "./interfaces/FavoriteItem";
import { Favorites } from "./interfaces/Favorites";
import { DataType } from "../components/DataCard";

export const createFavorite = (type: DataType, id: number, title: string): FavoriteItem => {
  return {
    type: type,
    id: id,
    title: title
  };
}

export const removeFavorite = async (type: DataType, id: number) => {
  const currentData = await getData();
  switch (type) {
    case "character": currentData.favoriteCharacters = currentData.favoriteCharacters.filter((d) => d.id !== id); break;
    case "comic": currentData.favoriteComics.filter((d) => d.id !== id); break;
  }
  saveGlobal(currentData);
}

export const storeFavorite = async (favorite: FavoriteItem) => {
  const currentData = await getData();
  const selectedArray = (favorite.type === "character" ? currentData.favoriteCharacters : currentData.favoriteComics);

  if (selectedArray.findIndex((c) => c.id === favorite.id) === -1) {
    selectedArray.push({ ...favorite, date: Date.now() });
    saveGlobal(currentData);
  }
}

export const setHasChanged = async (changed: boolean = true) => await AsyncStorage.setItem("hasChanged", changed ? "true" : "false");

export const hasChanged = async () => JSON.parse(await AsyncStorage.getItem("hasChanged"));

export const clearFavorites = async () => saveGlobal({
  favoriteCharacters: [],
  favoriteComics: []
});

export const saveGlobal = async (favorites: Favorites) => {
  await AsyncStorage.setItem("Favorites", JSON.stringify(favorites));
  await setHasChanged();
}

export const isFavorited = async (id: number) => {
  const currentData = await getData();
  return [...currentData.favoriteCharacters, ...currentData.favoriteComics].filter((e) => e.id === id).length > 0;
}

export const getData = async (): Promise<Favorites> => {
  const StorageEntry = await AsyncStorage.getItem("Favorites");
  return StorageEntry ? JSON.parse(StorageEntry) : { favoriteComics: [], favoriteCharacters: [] }
};
