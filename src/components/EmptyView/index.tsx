import React, { type FC } from "react";
import { Text } from "react-native";
import AnimatedRender from "../AnimatedRender";
import { EmptyViewProps } from "./EmptyView.types";

const EmptyView: FC<EmptyViewProps> = ({ searchedValue }) => {
  return (
    <AnimatedRender>
      <Text>No se encontraron resultados para "{searchedValue}"</Text>
    </AnimatedRender>
  );
};

export default EmptyView;
