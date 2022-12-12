import * as React from 'react';
import {useState} from 'react';
import { Text, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import Characters from './Characters';
import {useNavigate } from 'react-router-dom';

let navigate = useNavigate();

let pathCharacters = "./Characters"

const Home = () => 
<ScrollView>
    <Image
    style = {{width: 200, height: 100, alignSelf: "center"}}
        source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/11/Marvel-Studios-Symbol.png",
            }}
            />

<Text style= {{alignSelf: "center", padding: 5}}> 
Welcome at the Marvel page. 
Here you can look for characters and commics from Marvel. 
Here you can get information on your favorite comics and heroes.
</Text>

<button onClick={() => navigate(pathCharacters)}>View</button>

<Footer footer={''} />
    </ScrollView>
export default Home;