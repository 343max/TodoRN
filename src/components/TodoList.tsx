import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TodoEntry from "../model/TodoEntry";
import { Feather } from "@expo/vector-icons";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";

interface TodoListProps {
  items: TodoEntry[];
}

function ListItem({ item }: { item: TodoEntry }) {
  const iconName = item.done ? "check-square" : "square";
  const styles = useDynamicStyleSheet(dynamicItemStyles);

  return (
    <View style={styles.row}>
      <Feather name={iconName} size={20} color="#999" />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const dynamicItemStyles = new DynamicStyleSheet({
  row: {
    padding: 14,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  text: {
    color: new DynamicValue("#000", "#fff"),
    marginLeft: 6
  }
});

export default function TodoList({ items }: TodoListProps) {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }}
    >
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
        contentInset={{ top: 70, left: 0, bottom: 0, right: 0 }}
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}
