import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {Navbar} from "./Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.body}>
        <Text>Body</Text>
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
    width: "100%",
    height: "100%",
  }
});
