import React from "react";
import { View, Button } from "react-native";
import { H2 } from "./components/texts/Headers";
import CenterAll from "./components/layouts/CenterAll";
import { useNavigation } from "@react-navigation/native";
import { useNavigationProps } from "./lib/navigationUtils";

export interface AlertNavProps {
  title: string;
}

export default function Alert() {
  const { title } = useNavigationProps<AlertNavProps>();
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          width: 250,
          height: 150,
          borderRadius: 8,
          backgroundColor: "white",
          padding: 12,
        }}
      >
        <H2 style={{ textAlign: "center" }}>{title}</H2>
        <CenterAll>
          <Button title="Close" onPress={goBack} />
        </CenterAll>
      </View>
    </View>
  );
}
