import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewTodo from "./src/components/NewTodo";

export default function App() {
  return (
    <View style={styles.container}>
      <NewTodo />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
