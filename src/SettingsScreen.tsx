import React from "react";
import { View } from "react-native";
import { H1 } from "./components/texts/Headers";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <H1>Settings</H1>
    </View>
  );
}
