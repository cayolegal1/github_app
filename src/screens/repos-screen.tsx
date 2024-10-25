import React, { useState, type FC } from "react";
import { FlatList } from "react-native";
import ScreenContainer from "@/components/ScreenContainer";
import AnimatedRender from "@/components/AnimatedRender";
import SearchInput from "@/components/SearchInput";
import RepoCard from "@/components/RepoCard";
import EmptyView from "@/components/EmptyView";
import useDebounce from "@/hooks/useDebounce";
import useGetRepos from "@/hooks/fetch/useGetRepos";
import type { ReposScreenProps } from "@/types/navigation";
import SkeletonList from "@/components/SkeletonList";

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

      {isFetching && !(data.length > 0) ? (
        <SkeletonList variant="normal" />
      ) : data.length > 0 ? (
        <AnimatedRender>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={
              isFetching && hasNextPage ? (
                <SkeletonList variant="normal" />
              ) : null
            }
            maxToRenderPerBatch={4}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={1.5}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 100 }}
            renderItem={({ item }) => (
              <AnimatedRender>
                <RepoCard repo={item} />
              </AnimatedRender>
            )}
          />
        </AnimatedRender>
      ) : (
        debouncedText &&
        !isLoading &&
        !isFetching && <EmptyView searchedValue={debouncedText} />
      )}
    </ScreenContainer>
  );
};

export default ReposScreen;
