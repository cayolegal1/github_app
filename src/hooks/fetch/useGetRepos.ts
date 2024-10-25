import { useInfiniteQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { REQUEST_CONFIG } from "@/constants";
import type { ReposResponse } from "@/types/repos";

const useGetUsers = (value: string, page: number) => {
  const {
    data,
    isFetching: isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<ReposResponse>({
    queryKey: ["users", value, page],
    queryFn: () =>
      get(
        `https://api.github.com/search/repositories?q=${value}&page=${page}&per_page=${REQUEST_CONFIG.LIMIT}`
      ),
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.total_count / REQUEST_CONFIG.LIMIT);
      return lastPage.items.length === REQUEST_CONFIG.LIMIT && page < totalPages
        ? page + 1
        : undefined;
    },
    initialPageParam: REQUEST_CONFIG.INITIAL_PAGE,
    initialData: REQUEST_CONFIG.INITIAL_DATA,
    initialDataUpdatedAt: 0,
  });

  return {
    data: data.pages.flatMap(page => page.items),
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGetUsers;
