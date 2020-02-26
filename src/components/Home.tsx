import React from "react";
import { Text, View } from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import testData from "../model/TestData";

let listItems = testData();

export default function Home() {
  const styles = useDynamicStyleSheet(dynamicStyles);
  return (
    <View style={{ flex: 1 }}>
      <NewTodo />
      <TodoList items={listItems} />
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    backgroundColor: new DynamicValue("#fff", "#000"),
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: new DynamicValue("#000", "#fff")
  }
});
