import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { enableScreens } from "react-native-screens";
import Home from "./src/components/Home";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";
import { useColorScheme, AppearanceProvider } from "react-native-appearance";
import darkMode from "./src/helpers/darkMode";

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer theme={darkMode() ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
