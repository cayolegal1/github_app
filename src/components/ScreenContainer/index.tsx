import React, { type FC } from "react";
import { SafeAreaView } from "react-native";
import { screenStyles } from "./ScreenContainer.types";
import type { ScreenContainerProps } from "./ScreenContainer.styles";

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaView {...props} style={screenStyles.container}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
