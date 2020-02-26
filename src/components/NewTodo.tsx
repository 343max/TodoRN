import { Entypo } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet
} from "react-native-dark-mode";

export default function(props) {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <SafeAreaView style={styles.container} pointerEvents="box-none">
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Enter Todo…"
          style={styles.textInputs}
          returnKeyType="send"
        />
        <TouchableOpacity>
          <Entypo name="circle-with-plus" color="#0768da" size={30} />
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
    backgroundColor: new DynamicValue("#fff", "#000"),
    borderRadius: 30,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: new DynamicValue("#000", "#fff"),
    shadowOpacity: 0.4,
    shadowRadius: 10
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
