import type { TextInputProps } from "react-native";

export type SearchInputProps = TextInputProps & {
  isLoading: boolean;
};
