import React, { type FC } from "react";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { InputText } from "../Input";
import { Loader } from "../Loader";
import styles from "./SearchInput.styles";
import type { SearchInputProps } from "./SearchInput.types";

const SearchInput: FC<SearchInputProps> = ({ isLoading = true, ...props }) => {
  return (
    <View style={styles.container}>
      <InputText
        {...props}
        icon={!isLoading ? <MaterialIcons name="search" size={25} /> : <Loader />}
      />
    </View>
  );
};

export default SearchInput;
