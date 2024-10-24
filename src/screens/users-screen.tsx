import React, { type FC } from "react";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import SearchInput from "@/components/SearchInput";
import type { UsersScreenProps } from "@/types/navigation";

const UsersScreen: FC<UsersScreenProps> = () => {
  return (
    <ScreenContainer>
       <AnimatedRender>
        <SearchInput isLoading={false} placeholder="Busca un repositorio" />
      </AnimatedRender>
    </ScreenContainer>
  );
};


export default UsersScreen;
