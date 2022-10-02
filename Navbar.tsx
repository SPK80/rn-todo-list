import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

type PropsType = {
  onClear: () => void
}

export const Navbar: React.FC<PropsType> = ({onClear}) => {
  return <View style={styles.container}>
    <Text style={styles.text}>Todo App</Text>
    <Button
      title=" CLEAR "
      onPress={onClear}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3949ab',
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

