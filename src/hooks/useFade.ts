import { useRef } from "react";
import { Animated } from "react-native";
import { ANIMATION } from "@/theme/animations";

type useFadeParams = {
  initialValue?: number;
  duration?: number;
};

const useFade = ({
  initialValue = 0,
  duration = ANIMATION.duration,
}: useFadeParams = {}) => {
  const opacity = useRef(new Animated.Value(initialValue)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};

export default useFade;
