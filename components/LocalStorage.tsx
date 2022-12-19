import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  await AsyncStorage.setItem("id", "John Doe");
};

const getData = async () => {
  const value = await AsyncStorage.getItem("id");
  if (value !== null) {
    alert(value);
  } else {
    alert("No Data found");
  }
};

const App = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData } />
    </View>
  );
};

export default App;