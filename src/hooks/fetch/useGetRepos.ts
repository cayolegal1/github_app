import { useInfiniteQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { REQUEST_CONFIG } from "@/constants";
import type {  ReposResponse } from "@/types/repos";

const useGetRepos = (value: string) => {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ReposResponse>({
      queryKey: ["users", value],
      queryFn: ({ pageParam = REQUEST_CONFIG.INITIAL_PAGE }) =>
        get(
          `${REQUEST_CONFIG.BASE_URL}/search/repositories?q=${value}&page=${pageParam}&per_page=${REQUEST_CONFIG.LIMIT}`,
        ),
        getNextPageParam: (lastPage, allPages) => {
          const totalPages = Math.ceil(lastPage.total_count / REQUEST_CONFIG.LIMIT);
          const currentPage = allPages.length;
          return currentPage < totalPages ? currentPage + 1 : null;
        },
      enabled: Boolean(value),
      initialPageParam: REQUEST_CONFIG.INITIAL_PAGE,
      initialData: REQUEST_CONFIG.INITIAL_DATA,
      initialDataUpdatedAt: 0,
      staleTime: REQUEST_CONFIG.STALE_TIME,
    });

  return {
    data: data?.pages.flatMap(page => page.items) || [],
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGetRepos;
