import React, { type FC } from "react";
import { InputText } from "../Input";
import { Loader } from "../Loader";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SearchInputProps } from "./SearchInput.types";

const SearchInput: FC<SearchInputProps> = ({ isLoading = true, ...props }) => {
  return (
    <InputText
      {...props}
      icon={!isLoading ? <MaterialIcons name="search" size={25} /> : <Loader />}
      readOnly={isLoading}
    />
  );
};

export default SearchInput;
