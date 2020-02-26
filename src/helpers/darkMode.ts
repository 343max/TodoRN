import { useColorScheme } from "react-native-appearance";

export default function darkMode(): boolean {
  return useColorScheme() === "dark";
}
