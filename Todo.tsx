import React from "react";
import {TodoType} from "./dal/todosAPI";
import {StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type PropsType = {
  todoData: TodoType
  onChange: (todoData: TodoType) => void
}

export const Todo: React.FC<PropsType> = ({todoData, onChange}) => (
  <View style={styles.container}>
    <BouncyCheckbox
      onPress={isDone => onChange({...todoData, isDone})}
      text={todoData.title}
      textStyle={{fontFamily: "JosefinSans-Regular"}}
      isChecked={todoData.isDone}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
