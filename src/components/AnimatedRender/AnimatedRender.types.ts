import type { ReactNode } from "react";
import type { Animated, ViewProps, ViewStyle } from "react-native";

export type AnimatedRenderProps = Omit<ViewProps, "style"> & {
  children: ReactNode;
  style?:
    | Animated.WithAnimatedObject<ViewStyle>
    | Animated.WithAnimatedObject<ViewStyle>[];
};
