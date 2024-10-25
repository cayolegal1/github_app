import React, { useState, type FC } from "react";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import SearchInput from "@/components/SearchInput";
import UserCard from "@/components/UserCard";
import { Skeleton } from "@/components/Skeleton";
import useDebounce from "@/hooks/useDebounce";
import useGetUsers from "@/hooks/fetch/useGetUser";
import type { UsersScreenProps } from "@/types/navigation";
import { Text } from "react-native";

const UsersScreen: FC<UsersScreenProps> = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);
  const { data, isLoading, isFetching } = useGetUsers(debouncedText);
  return (
    <ScreenContainer>
      <AnimatedRender>
        <SearchInput
          isLoading={isLoading}
          onChangeText={setText}
          placeholder="Busca un usuario"
        />
      </AnimatedRender>

      {isLoading ? (
        <Skeleton />
      ) : data && "id" in data ? (
        <AnimatedRender>
          <UserCard user={data} />
        </AnimatedRender>
      ) : (
        debouncedText &&
        !isLoading &&
        !isFetching && (
          <Text>No se encontraron resultados para "{debouncedText}"</Text>
        )
      )}

    </ScreenContainer>
  );
};

export default UsersScreen;
