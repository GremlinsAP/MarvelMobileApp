import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import { Api } from "./util/Api";
import { Character } from "./util/interfaces/Character";

const Drawer = createDrawerNavigator();

export default function App() {
  React.useEffect(() => {
    const test = async () => {
      const data: Character[] = await Api.INSTANCE.getCharacters();
    };
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={Characters} />
        <Drawer.Screen name="Comics" component={Comics} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
