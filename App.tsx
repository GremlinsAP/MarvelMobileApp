import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetail from "./pages/CharacterDetail";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Characters" component={Characters} />
      <Drawer.Screen name="Comics" component={Comics} />
      <Drawer.Screen name="Favorites" component={Favorites} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
