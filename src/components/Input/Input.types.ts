import type { ReactNode } from "react";
import type { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  icon?: ReactNode;
};
