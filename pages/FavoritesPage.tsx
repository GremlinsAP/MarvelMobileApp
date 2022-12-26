/**
 * Author: Elwyn Van der Borght
 */

import Layout from "../components/Layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { Favorites } from "../util/interfaces/Favorites";
import { getData, hasChanged, setHasChanged } from "../util/LocalStorage";
import FavoriteEntry from "../components/FavoriteEntry";
import { ScrollView } from "react-native-gesture-handler";

const FavoritesPage = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Favorites>();

  useEffect(() => {
    const fetch = async () => {
      setFavorites(await getData());
      setLoading(false);
    }

    fetch();

    const interval = setInterval(async () => {
      if (await hasChanged()) {
        fetch();
        await setHasChanged(false);
      }
    }, 4000);
  }, []);

  const Characters = () => {
    return (
      <ScrollView>
        {!loading && favorites && favorites.favoriteCharacters.map((c, i) => <FavoriteEntry key={i} type="character" id={c.id} />)}
      </ScrollView>
    );
  }

  const Comics = () => {
    return (
      <ScrollView>
        {!loading && favorites && favorites.favoriteComics.map((c, i) => <FavoriteEntry key={i} type="comic" id={c.id} />)}
      </ScrollView>
    );
  }

  const Tab = createBottomTabNavigator();

  return <Layout>
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={Characters} options={{
        tabBarIcon: () => <Ionicons name="people-outline" size={24} color="black" />
      }}
      />
      <Tab.Screen name="Comics" component={Comics}
        options={{
          tabBarIcon: () => <Feather name="book-open" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  </Layout>;
};

export default FavoritesPage;