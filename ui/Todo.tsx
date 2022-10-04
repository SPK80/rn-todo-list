import React, {useState} from "react";
import {TodoType} from "../dal/todosAPI";
import {Button, StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {AutoExpandingTextInput} from "./AutoExpandingTextInput";

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
    <View style={styles.container}>
      {!isEditMode
        ?
        <BouncyCheckbox
          style={styles.bouncyCheckbox}
          onPress={isDone => onChange({...todoData, isDone})}
          text={todoData.title}
          isChecked={todoData.isDone}
          onLongPress={() => setIsEditMode(value => !value)}
        />
        : <>
          <AutoExpandingTextInput
            style={styles.textInput}
            value={editingTitle}
            onChangeText={setEditingTitle}
          />
          <View style={styles.buttons}>
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
          </View>
        </>
      }
    </View>
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
  textInput: {
    width: '60%',
    marginEnd: 5,
  },
  buttons: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bouncyCheckbox: {
    width: '100%',
  },
});
