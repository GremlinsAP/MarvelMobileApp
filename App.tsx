import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

const Drawer = createDrawerNavigator();

export default function App() {
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

