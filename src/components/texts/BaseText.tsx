import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";

export type BaseTextProps = TextProps & { children: ReactNode };

export default function BaseText(props: BaseTextProps) {
  return <Text {...props} style={props.style} />;
}
