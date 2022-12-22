import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetail from "./pages/CharacterDetail";
import ComicDetail from "./pages/ComicDetail";
import FavoritesPage from "./pages/Favorites";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Characters" component={Characters} />
      <Drawer.Screen name="Comics" component={Comics} />
      <Drawer.Screen name="Favorites" component={FavoritesPage} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Character Detail" component={CharacterDetail} />
        <Stack.Screen name="Comic Detail" component={ComicDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
