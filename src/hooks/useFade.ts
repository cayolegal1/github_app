import { useRef } from "react";
import { Animated } from "react-native";

type useFadeParams = {
  initialValue?: number;
  duration?: number;
};

const useFade = ({
  initialValue = 0,
  duration = 500,
}: useFadeParams = {}) => {
  const opacity = useRef(new Animated.Value(initialValue)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
  };
};

export default useFade;
