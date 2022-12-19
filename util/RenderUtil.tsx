import { Text, View } from "react-native";
import React from "react";

export const DetailListPrint = (data: { [key: string]: string | number[] }) => {
  return Object.entries(data).map((entry, i) => <Text key={i}><Text style={{ fontWeight: "bold" }}>{entry[0]}</Text>: {entry[1]}</Text>);
};
