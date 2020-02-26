import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";

interface NewTodoProps {
  addItem(text: string): void;
}

export default function NewTodo(props: NewTodoProps) {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const [value, setValue] = useState("");

  const submit = () => {
    if (value == "") {
      return;
    }
    props.addItem(value);
    Keyboard.dismiss();
    setValue("");
  };

  return (
    <SafeAreaView style={styles.container} pointerEvents="box-none">
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Add Todo…"
          style={styles.textInputs}
          returnKeyType="send"
          value={value}
          onChangeText={text => setValue(text)}
          onSubmitEditing={submit}
          blurOnSubmit={false}
        />
        <TouchableOpacity onPress={submit} disabled={value == ""}>
          <View style={{ opacity: value == "" ? 0.3 : 1 }}>
            <Entypo name="circle-with-plus" color="#0768da" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    zIndex: 10,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: new DynamicValue("#fff", "#111"),
    borderRadius: 30,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: new DynamicValue("#000", "#000"),
    shadowOpacity: new DynamicValue(0.3, 0.0),
    shadowRadius: 6,
    borderWidth: new DynamicValue(0, 1),
    borderColor: "#222"
  },
  textInputs: {
    flex: 1,
    marginLeft: 10
  },
  addButton: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }
});
