import React, {useState} from "react";
import {TodoType} from "./dal/todosAPI";
import {Button, StyleSheet, TouchableOpacity, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type PropsType = {
  todoData: TodoType
  onChange: (todoData: TodoType) => void
  onRemove: (id: string) => void
}

export const Todo: React.FC<PropsType> = ({todoData, onChange, onRemove}) => {
  const [isContextMenuShow, setIsContextMenuShow] = useState(false)
  return (
    <TouchableOpacity onLongPress={() => setIsContextMenuShow(value => !value)}>
      <View style={styles.container}>
        <BouncyCheckbox
          onPress={isDone => onChange({...todoData, isDone})}
          text={todoData.title}
          textStyle={{fontFamily: "JosefinSans-Regular"}}
          isChecked={todoData.isDone}
        />
        {isContextMenuShow &&
            <View>
                <Button
                    title=" X "
                    onPress={() => onRemove(todoData.id)}
                />
            </View>
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
});
