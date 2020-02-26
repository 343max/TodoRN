import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import testData from "../model/TestData";

export default function Home() {
  const [items, setItems] = useState(testData());
  const styles = useDynamicStyleSheet(dynamicStyles);
  return (
    <View style={{ flex: 1 }}>
      <NewTodo addItem={text => console.log(text)} />
      <TodoList items={items} />
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
