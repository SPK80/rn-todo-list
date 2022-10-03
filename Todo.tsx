import React, {useState} from "react";
import {TodoType} from "./dal/todosAPI";
import {Button, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type PropsType = {
  todoData: TodoType
  onChange: (todoData: TodoType) => void
  onRemove: (id: string) => void
}

export const Todo: React.FC<PropsType> = ({todoData, onChange, onRemove}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingTitle, setEditingTitle] = useState(todoData.title)
  
  const onSubmit = () => {
    onChange({...todoData, title: editingTitle})
    setIsEditMode(false)
  };
  
  const onCansel = () => {
    setEditingTitle(todoData.title)
    setIsEditMode(false)
  };
  
  return (
    <TouchableOpacity onLongPress={() => setIsEditMode(value => !value)}>
      <View style={styles.container}>
        {!isEditMode
          ? <BouncyCheckbox
            onPress={isDone => onChange({...todoData, isDone})}
            text={todoData.title}
            isChecked={todoData.isDone}
          />
          : <>
            <TextInput
              style={styles.textInput}
              value={editingTitle}
              onChangeText={setEditingTitle}
              autoFocus
            />
            <Button
              title="ok"
              onPress={onSubmit}
            />
            <Button
              title="cansel"
              onPress={onCansel}
            />
            <Button
              title=" X "
              onPress={() => onRemove(todoData.id)}
            />
          </>
        }
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 5,
    backgroundColor: "#f6f7f7"
  },
  title: {},
  textInput: {
    minWidth: '50%',
    height: 27,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});
