import {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

export function alertStyleInterpolator({
  current,
  closing,
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  return {
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [closing ? 20 : -20, 0],
            extrapolate: "clamp",
          }),
        },
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [closing ? 0.9 : 1.1, 1],
          }),
        },
      ],
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      backgroundColor: "black",
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
    containerStyle: {
      backgroundColor: "transparent",
    },
  };
}

export function slideFromBottomCardStyleInterpolator({
  current,
  next,
  layouts,
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  return {
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
            extrapolate: "clamp",
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.95],
              })
            : 1,
        },
      ],
    },
    overlayStyle: {
      backgroundColor: "black",
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
    containerStyle: {
      backgroundColor: "transparent",
    },
  };
}

export function getSlideOverlayNavigationOptions(): StackNavigationOptions {
  return {
    headerShown: false,
    gestureDirection: "vertical" as const,
    gestureEnabled: true,
    gestureResponseDistance: {
      vertical: Dimensions.get("window").height,
    },
    cardStyle: { backgroundColor: "transparent" },
    cardStyleInterpolator: slideFromBottomCardStyleInterpolator,
  };
}

export function useNavigationProps<T>() {
  return (useRoute().params as unknown) as T;
}
