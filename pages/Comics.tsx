import { Character } from '../util/interfaces/Character';
import { Api } from '../util/Api';
import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button } from 'react-native';
import { useEffect,useState } from "react";
import React from "react";
import { Comic } from '../util/interfaces/Comic';

const Comics = () =>
{
    const [comic, setComic] = useState<Comic[]>([])
    React.useEffect(() => {
        const Comic = async () => {
          const data: Comic[] = await Api.INSTANCE.getComics();
          setComic(data)
        };
        Comic();
      }, []);
      return <>
            {comic.map(i => {
                return<View>
                    <Text>{i.title}</Text>
                </View>})}
      </>
      }

export default Comics;