import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Favorites = () => {

  const Characters = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Characters!</Text>
      </View>
    );
  }
  
  const Comics = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Comics!</Text>
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

export default Favorites;
