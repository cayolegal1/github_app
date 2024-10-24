import React, { type FC } from "react";
import { View } from "react-native";
import { ScreenContainer } from "@/components/ScreenContainer";
import SearchInput from "@/components/SearchInput";
import type { UsersScreenProps } from "@/types/navigation";

const UsersScreen: FC<UsersScreenProps> = () => {
  return (
    <ScreenContainer>
      <SearchInput isLoading={false} />
    </ScreenContainer>
  );
};


export default UsersScreen;
