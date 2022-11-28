import * as React from 'react';
import {useState} from 'react';
import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Characters from './Characters';
import Comics from './Comics';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5  } from '@expo/vector-icons'; 

const Home = () =>
<Text>
Welcome at the Marvel page. Here you can look for characters and commics from Marvel.
</Text>
export default Home;