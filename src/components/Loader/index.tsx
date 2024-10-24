import { COLORS } from "@/theme/colors";
import React, { type FC } from "react";
import { View, ActivityIndicator } from "react-native";

type LoaderProps = {

};

export const Loader: FC<LoaderProps> = ({ }) => {
  return (
    <ActivityIndicator size={25} color={COLORS.TEXT_COLOR_NORMAL} />
  );
};
