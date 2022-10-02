import React from "react";
import {TodoType} from "./dal/todosAPI";
import {StyleSheet, Text, View} from "react-native";

export const Todo: React.FC<{ todoData: TodoType }> = ({todoData}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{todoData.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 5,
    backgroundColor: "#ccd"
  },
  title: {},
});
