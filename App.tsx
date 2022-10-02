import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {Navbar} from "./Navbar";
import {AddTaskBar} from "./AddTaskBar";
import {Todos} from "./Todos";
import {TodoDataType, todosAPI, TodoType} from "./dal/todosAPI";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  
  useEffect(() => {
    todosAPI.getAllItems()
      .then((items) => {
        if (!items) return
        setTimeout(() => setTodos(items), 0) //directly(without setTimeout) not working :-/
      })
  }, [])
  
  const onClearHandler = () => {
    todosAPI.clear()
      .then(() => setTodos([]))
  };
  
  const onAddTodoHandler = (todoData: TodoDataType) => {
    todosAPI.setItem(Date.now().toString(), todoData)
      .then(() => setTodos((prev) =>
          [...prev, {id: Date.now().toString(), title: todoData.title}]
        )
      )
  };
  
  return (
    <View style={styles.container}>
      <Navbar onClear={onClearHandler}/>
      <View style={styles.body}>
        <AddTaskBar onSubmit={onAddTodoHandler}/>
        <Todos todos={todos}/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    
  },
  body: {
    backgroundColor: '#fff',
    padding: 10,
  }
});
