import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from "react-native";
import {TodoDataType} from "../dal/todosAPI";

type PropsType = {
  onSubmit: (todoData: TodoDataType) => void
}

export const AddTaskBar: React.FC<PropsType> = ({onSubmit}) => {
  const [title, setTitle] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <Button
        title=" + "
        onPress={() => {
          onSubmit({title, isDone: false})
          setTitle('')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    width: '90%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  }
});
