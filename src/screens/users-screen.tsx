import React, { useState, type FC } from "react";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import SearchInput from "@/components/SearchInput";
import useDebounce from "@/hooks/useDebounce";
import useGetUsers from "@/hooks/fetch/useGetUser";
import type { UsersScreenProps } from "@/types/navigation";
import UserCard from "@/components/UserCard";
import { Text } from "react-native";

const UsersScreen: FC<UsersScreenProps> = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const { data, isLoading } = useGetUsers(debouncedValue);
  return (
    <ScreenContainer>
      <AnimatedRender>
        <SearchInput
          isLoading={isLoading}
          onChangeText={setValue}
          placeholder="Busca un usuario"
        />
      </AnimatedRender>

      {data && "id" in data ? (
        <AnimatedRender>
          <UserCard user={data} />
        </AnimatedRender>
      ) : (
        debouncedValue &&
        !isLoading && (
          <Text>No se encontraron resultados para {debouncedValue}</Text>
        )
      )}
    </ScreenContainer>
  );
};

export default UsersScreen;
