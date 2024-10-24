import React, { type FC } from "react";
import {} from "react-native";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import type { ReposScreenProps } from "@/types/navigation";
import SearchInput from "@/components/SearchInput";

const ReposScreen: FC<ReposScreenProps> = () => {
  return (
    <ScreenContainer>
      <AnimatedRender>
        <SearchInput isLoading={false} placeholder="Busca un repositorio" />
      </AnimatedRender>
    </ScreenContainer>
  );
};


export default ReposScreen;
