import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { H1 } from "./components/texts/Headers";
import Paragraph from "./components/texts/Paragraph";

interface SlideOverlayProps {
  children: React.ReactNode;
}

export default function SlideOverlay(props: SlideOverlayProps) {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={goBack}>
        <Animated.View style={{ height: "20%" }} />
      </TouchableWithoutFeedback>
      <View style={styles.header}>
        <View style={styles.headerBar} />
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {props.children}
      </View>
    </View>
  );
}

export function SlideOverlayExample() {
  return (
    <SlideOverlay>
      <H1>Some content</H1>
      <Paragraph style={{ padding: 20 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Paragraph>
    </SlideOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerBar: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 30,
    height: 4,
    borderRadius: 2,
  },
});
