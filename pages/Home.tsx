import * as React from 'react';
import {useState} from 'react';
import { Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


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
    </ScrollView>
export default Home;