import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import type { UserResponse } from "@/types/users";
import { REQUEST_CONFIG } from "@/constants";

const useGetUser = (value: string) => {
  const { data, isLoading, isFetching } = useQuery<UserResponse>({
    queryKey: ["users", value],
    queryFn: () => get(REQUEST_CONFIG.BASE_URL + "/users/" + value),
    enabled: Boolean(value),
  });

  return {
    data,
    isLoading,
    isFetching,
  };
};

export default useGetUser;
