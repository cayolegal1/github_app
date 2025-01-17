import React, { useEffect, type FC } from "react";
import { Animated } from "react-native";
import useFade from "@/hooks/useFade";
import { AnimatedRenderProps } from "./AnimatedRender.types";

const AnimatedRender: FC<AnimatedRenderProps> = ({ children, style = {} }) => {
  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn();
    return () => fadeOut();
  }, []);

  return (
    <Animated.View
      style={
        Array.isArray(style) ? [{ opacity }, ...style] : { opacity, ...style }
      }
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedRender;
