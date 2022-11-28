import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button } from 'react-native';
import { useEffect,useState } from "react";
import React from "react";
import { Character } from '../util/interfaces/Character';
import { Api } from '../util/Api';

interface TimerProps {
  interval: number
}

const Characters = () =>
{
    const [character, setCharacter] = useState<Character[]>([])
    React.useEffect(() => {
        const Character = async () => {
          const data: Character[] = await Api.INSTANCE.getCharacters();
          setCharacter(data)
        };
        Character();
      }, []);
      return <>
            {character.map(i => {
                return<View>
                    <Text>{i.name}</Text>
                </View>})}
      </>
      }


export default Characters;