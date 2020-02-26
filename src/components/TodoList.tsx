import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import TodoEntry from "../model/TodoEntry";
import { Feather } from "@expo/vector-icons";
import darkMode from "../helpers/darkMode";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";

interface ListItemProps {
  item: TodoEntry;
  styles: any;
  checkItem(id: string, done: boolean): void;
}

function ListItem({ item, checkItem, styles }: ListItemProps) {
  const iconName = item.done ? "check-square" : "square";

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => checkItem(item.id, !item.done)}
      >
        <Feather
          name={iconName}
          size={20}
          color={darkMode() ? "#444" : "#999"}
        />
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const dynamicItemStyles = new DynamicStyleSheet({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: new DynamicValue("#ddd", "#222")
  },
  touchable: {
    padding: 14,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: new DynamicValue("#000", "#fff"),
    marginLeft: 6
  }
});

interface TodoListProps {
  items: TodoEntry[];
  checkItem(id: string, done: boolean): void;
}

export default function TodoList({ items, checkItem }: TodoListProps) {
  const cellStyles = useDynamicStyleSheet(dynamicItemStyles);
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
        renderItem={({ item }) => (
          <ListItem item={item} checkItem={checkItem} styles={cellStyles} />
        )}
        keyExtractor={item => item.id}
        keyboardDismissMode="on-drag"
        style={{
          paddingTop: 70
        }}
      />
    </View>
  );
}
