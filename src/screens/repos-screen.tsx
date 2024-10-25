import React, { useState, type FC } from "react";
import { FlatList, Text } from "react-native";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import type { ReposScreenProps } from "@/types/navigation";
import SearchInput from "@/components/SearchInput";
import RepoCard from "@/components/RepoCard";
import useDebounce from "@/hooks/useDebounce";
import useGetRepos from "@/hooks/fetch/useGetRepos";

const ReposScreen: FC<ReposScreenProps> = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);
  const { isLoading, fetchNextPage, hasNextPage, data, isFetching } =
    useGetRepos(debouncedText);
  return (
    <ScreenContainer>
      <AnimatedRender>
        <SearchInput
          isLoading={isFetching}
          onChangeText={setText}
          placeholder="Busca un repositorio"
        />
      </AnimatedRender>
      {data.length > 0 ? (
        <AnimatedRender>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={data}
            renderItem={({ item }) => (
              <AnimatedRender>
                <RepoCard repo={item} />
              </AnimatedRender>
            )}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={1}
            maxToRenderPerBatch={4}
            onEndReached={() => hasNextPage && fetchNextPage()}
            style={{ marginBottom: 100 }}
          />
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

export default ReposScreen;
