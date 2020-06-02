import React from "react";
import { View, Button } from "react-native";
import { H1 } from "./components/texts/Headers";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <H1>Welcome to react-navigation workshop!</H1>
      <Button
        title={"Show Modal"}
        onPress={() => {
          navigate("Alert", { title: "Alert" });
        }}
      />
      <Button
        title={"Show SlideOverlay"}
        onPress={() => {
          navigate("SlideOverlay");
        }}
      />
      <Button
        title={"Show Details"}
        onPress={() => {
          navigate("Details");
        }}
      />
    </View>
  );
}
