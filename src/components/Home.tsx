import React, { useState } from "react";
import { View } from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import uuid from "react-native-uuid";
import testData from "../model/TestData";
import TodoEntry from "../model/TodoEntry";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

export default function Home() {
  const [items, setItems] = useState(testData());
  const styles = useDynamicStyleSheet(dynamicStyles);

  const addItem = (text: string) => {
    const entry: TodoEntry = {
      id: uuid.v1(),
      text: text,
      done: false
    };

    setItems([entry].concat(items));
  };

  return (
    <View style={{ flex: 1 }}>
      <NewTodo addItem={addItem} />
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
