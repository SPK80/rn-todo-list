import React from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Todo} from "./Todo";
import {TodoType} from "./dal/todosAPI";

export const Todos: React.FC<{ todos?: TodoType[] }> = ({todos}) => {
  if (!todos) return (<Text>Add 1st todo</Text>)
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (<Todo todoData={item}/>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
});
