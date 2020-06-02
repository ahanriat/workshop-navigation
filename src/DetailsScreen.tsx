import React from "react";
import { View, Button } from "react-native";
import { H1 } from "./components/texts/Headers";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <H1>Details Screen</H1>
    </View>
  );
}
