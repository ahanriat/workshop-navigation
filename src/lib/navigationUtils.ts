import {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

export function alertStyleInterpolator({
  current,
  closing,
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  return {
    // TODO
  };
}

export function slideFromBottomCardStyleInterpolator({
  current,
  next,
  layouts,
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  return {
    // TODO
  };
}

export function getSlideOverlayNavigationOptions(): StackNavigationOptions {
  return {
    // TODO
  };
}

export function useNavigationProps<T>() {
  return (useRoute().params as unknown) as T;
}
