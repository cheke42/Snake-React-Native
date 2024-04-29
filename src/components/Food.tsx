import { StyleSheet, Text } from "react-native";
import {  IFood } from '../types/types';

export default function Food({ fruit,coords}: IFood): JSX.Element {
  return (<Text style={[{ top: coords.y * 10, left: coords.x * 10 }, styles.food]}>{fruit}</Text>);
}

const styles = StyleSheet.create({
  food: {
    width: 20,
    height: 20,
    borderRadius: 7,
    position: "absolute",
  },
});