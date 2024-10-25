import { useInfiniteQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import type { UsersResponse } from "@/types/users";

const limit = 10;

const useGetUsers = (value: string, page: number) => {
  const {
    data,
    isFetching: isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<UsersResponse>({
    queryKey: ["users", value, page],
    queryFn: () =>
      get(
        `https://api.github.com/search/users?q=${value}&page=${page}&per_page=${limit}`,
      ),
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.total_count / limit);
      return lastPage.items.length === limit && page < totalPages
        ? page + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGetUsers;
