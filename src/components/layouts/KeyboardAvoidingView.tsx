import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  ViewStyle,
  StyleProp,
} from "react-native";

interface KeyboardAvoidingViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export default function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  return (
    <RNKeyboardAvoidingView
      {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
      style={{ flex: 1 }}
      {...props}
    >
      {props.children}
    </RNKeyboardAvoidingView>
  );
}
