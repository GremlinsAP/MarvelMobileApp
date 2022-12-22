import { View } from "react-native";
import Layout from "../components/Layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { Favorites } from "../util/interfaces/Favorites";
import { getData } from "../util/LocalStorage";
import FavoriteEntry from "../components/FavoriteEntry";

const FavoritesPage = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Favorites>();

  useEffect(() => {
    const fetch = async () => {
      setFavorites(await getData());
      setLoading(false);
    }

    fetch();
  }, []);
  
  const Characters = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         {!loading && favorites && favorites.favoriteCharacters.map((c, i) => <FavoriteEntry key={i} type="character" id={c.id} />)}
      </View>
    );
  }

  const Comics = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         {!loading && favorites && favorites.favoriteComics.map((c, i) => <FavoriteEntry key={i} type="comic" id={c.id} />)}
      </View>
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
