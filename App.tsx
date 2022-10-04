import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {Navbar} from "./ui/Navbar";
import {AddTaskBar} from "./ui/AddTaskBar";
import {Todos} from "./ui/Todos";
import {TodoDataType, todosAPI, TodoType} from "./dal/todosAPI";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  
  useEffect(() => {
    todosAPI.getAllItems()
      .then((items) => {
        if (!items) return
        setTimeout(() => setTodos(items), 100) //directly(without setTimeout) not working :-/
      })
  }, [])
  
  const onClearHandler = () => {
    todosAPI.clear().then(() => setTodos([]))
  };
  
  const onAddTodoHandler = (todoData: TodoDataType) => {
    todosAPI.setItem({id: Date.now().toString(), ...todoData})
      .then(() => setTodos((prev) =>
          [{id: Date.now().toString(), ...todoData}, ...prev]
        )
      )
  };
  
  const onChangeHandler = (changedDodo: TodoType) => {
    todosAPI.setItem(changedDodo)
      .then(() => {
        setTodos(todos => todos.map(todo => todo.id === changedDodo.id ? changedDodo : todo))
      })
  };
  
  const onRemoveHandler = (id: string) => {
    todosAPI.remove(id)
      .then(() => {
        setTodos(todos => todos.filter(todo => todo.id != id))
      })
  };
  
  return (
    <View style={styles.container}>
      <Navbar onClear={onClearHandler}/>
      <View style={styles.body}>
        <AddTaskBar onSubmit={onAddTodoHandler}/>
        <Todos todos={todos} onChange={onChangeHandler} onRemove={onRemoveHandler}/>
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
