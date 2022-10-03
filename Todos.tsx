import React from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Todo} from "./Todo";
import {TodoType} from "./dal/todosAPI";

type PropsType = {
  todos: TodoType[]
  onChange: (todoData: TodoType) => void
  onRemove: (id: string) => void
}

export const Todos: React.FC<PropsType> = ({todos, onChange, onRemove}) => {
  if (!todos) return (<Text>Add 1st todo</Text>)
  
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Todo
            todoData={item}
            onChange={onChange}
            onRemove={onRemove}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
});
